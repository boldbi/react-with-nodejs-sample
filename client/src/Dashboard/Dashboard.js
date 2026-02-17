import React from 'react';
import '../index';
import {BoldBI} from '@boldbi/boldbi-embedded-sdk';

//NodeJs application will run on http://localhost:8080, which needs to be set as apiHost.
const apiHost="http://localhost:8080";

//Url of the TokenGeneration action in embed.js
const tokenGenerationUrl = "/tokengeneration";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          toke: undefined,
          items: [],
          embedConfig: {},
        };
        this.BoldBiObj = new BoldBI();
      };

    getEmbedToken() {
        return fetch(apiHost + tokenGenerationUrl, { // Backend application URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        })
          .then(response => {
            if (!response.ok) throw new Error("Token fetch failed");
            return response.text();
          });
      }
    
    renderDashboard(data) {
      this.getEmbedToken()
        .then(accessToken => {
          const dashboard = BoldBI.create({
            serverUrl: data.ServerUrl + "/" + data.SiteIdentifier,
            dashboardId: data.DashboardId,
            embedContainerId: "dashboard",
            embedToken: accessToken
          });

          dashboard.loadDashboard();
        })
        .catch(err => {
          console.error("Error rendering dashboard:", err);
        });
    };

  render() {
    return (
      <div id="Dashboard">
          <div id="viewer-section">
            <div id="dashboard"></div>
          </div>
      </div>
    );
  }

  async componentDidMount() {
    try {
      const response = await fetch(apiHost + "/GetData");
      const embedConfig = await response.json();
      this.renderDashboard(embedConfig);
    } catch (error) {
      console.log(error);
      this.setState({ toke: "error", items: "error" });
    }
  }
}
export default Dashboard;
