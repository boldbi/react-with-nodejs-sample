var fs = require("fs");
var http = require("http");
var https = require("https");
var express = require('express');
var cors = require('cors');
var app = express();
const path = require('path');
app.use(cors());
//Parse JSON bodies (as sent by API clients).
app.use(express.json());

//Assign a port number for an API to run.
const port = 8080;

let appconfig;
const configPath = path.join(__dirname, 'embedConfig.json');
let rawConfig;
try {
  rawConfig = fs.readFileSync(configPath, 'utf8');
} catch (err) {
  console.error(`Error: cannot read embedConfig.json at ${configPath}:`, err.message);
  process.exit(1);
}
try {
  if (rawConfig && rawConfig.charCodeAt(0) === 0xFEFF) {
    rawConfig = rawConfig.slice(1);
  }
  rawConfig = rawConfig.trim();
  appconfig = JSON.parse(rawConfig);
} catch (err) {
  console.error(`Error: invalid JSON in embedConfig.json at ${configPath}:`, err.message);
  process.exit(1);
}

app.post('/TokenGeneration', function (req, response) {
  const embedDetails = {
    email: appconfig.UserEmail,
    serverurl: appconfig.ServerUrl,
    siteidentifier: appconfig.SiteIdentifier,
    embedsecret: appconfig.EmbedSecret,
    dashboard: {  // Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
      id: appconfig.DashboardId
    }
  }

  const parsedUrl = new URL(embedDetails.serverurl);
  const postData = JSON.stringify(embedDetails);
  const client = parsedUrl.protocol === 'https:' ? https : http;
  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
    path: `${parsedUrl.pathname}/api/${embedDetails.siteidentifier}/embed/authorize`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const requ = client.request(options, res => {
    let result = '';
    res.setEncoding('utf8');
    res.on('data', chunk => result += chunk);
    res.on('end', () => {
      const resultparse = JSON.parse(result); // Parse the response
      response.send(resultparse?.Data?.access_token);
    });
  });

  requ.on('error', (e) => {
    console.error("Error fetching embed token:", e.message);
  });

  requ.write(postData);
  requ.end();
})

app.get('/GetData', (req, res) => {
  const parsedData = appconfig;

  const clientEmbedConfigData = {
    DashboardId: parsedData.DashboardId,
    ServerUrl: parsedData.ServerUrl,
    SiteIdentifier: parsedData.SiteIdentifier,
    EmbedType: parsedData.EmbedType,
    Environment: parsedData.Environment
  };

  res.send(clientEmbedConfigData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
