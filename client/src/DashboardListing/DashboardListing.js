import React from 'react';
//import './DashboardListing.css';
import '../index.css';
import '../index';
import querystring from 'querystring';
import {BoldBI} from '@boldbi/boldbi-embedded-sdk';


//NodeJs application would be run on http://localhost:61377/, which needs to be set as `apiHost`
const apiHost="http://localhost:8080";

//Url of the GetDetails action in ValuesController of the NodeJs application
const authorizationUrl="/embeddetail/get";

 var BoldBiObj;

class DashboardListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          toke: undefined,
          items: [],
          embedConfig: {},
        };
        this.BoldBiObj = new BoldBI();
      };

   renderDashboard(data) {
    this.dashboard= BoldBI.create({
      serverUrl: data.ServerUrl+"/" + data.SiteIdentifier,
      dashboardId: data.DashboardId,
      embedContainerId: "dashboard",
      embedType: data.EmbedType,
      environment: data.Environment,
      mode:BoldBI.Mode.View,
      width:"100%",
      height: window.innerHeight + 'px',
      expirationTime:100000,
      authorizationServer: {
          url: apiHost + authorizationUrl
      }
  });

  console.log(this.dashboard);
  this.dashboard.loadDashboard();     
    
  }

  render() {
    return (
      <div id="DashboardListing">
          <div id="viewer-section">
            <div id="dashboard"></div>
          </div>
      </div>
    );
  }

 async componentDidMount() {
    var dashboard = undefined;
    var querystring = require('querystring');
    var token = "";
    try {
        const response = await fetch(apiHost+"/GetData");
        const data = await response.json();
        this.setState({ embedConfig: data });
        const embedConfig = this.state.embedConfig;
        this.renderDashboard(embedConfig);
      } catch (error) {
        console.log(error);
        this.setState({ toke: "error", items: "error" });
      }
    }
}
export default DashboardListing;
