# BoldBI Embedding React with NodeJS Sample

This project was created using NodeJS 14.16. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

   ![Dashboard view](https://github.com/boldbi/react-with-nodejs-sample/assets/129486688/9608f9e1-99f8-4375-9724-d15820cb690f)
 
 ## Prerequisites

The samples require the following to run.

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

> **NOTE:** Node.js v14.16 to v18.18 are supported.

#### Help link

 * https://help.boldbi.com/embedded-bi/faq/where-can-i-find-the-product-version/

 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

 ## Configuration

 * Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

 * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

 * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-nodejs-sample/tree/master) within the application. Please ensure that you have placed it in the application as shown in the following image.

   ![EmbedConfig image](https://github.com/boldbi/react-with-nodejs-sample/assets/129486688/6dc248bc-306c-497f-9aed-421abb2ca710)

 ## Developer IDE

  * Visual studio code(https://code.visualstudio.com/download)

 ### Run a Sample Using Visual Studio Code
 
  * Open the React with NodeJS sample in **Visual Studio Code**.
   
  * Open the terminal in Visual Studio Code and install all dependent packages by executing the following command in the terminal.
    
    ```bash
       npm install
    ```
    
  * Finally, run the application using the following command.
    
    ```bash
       npm start
    ```
    
  * After executing the command, the application will automatically launch in the default browser. You can access it at the specified port number (e.g., https://localhost:3000).

    ![Dashboard view](https://github.com/boldbi/react-with-nodejs-sample/assets/129486688/9608f9e1-99f8-4375-9724-d15820cb690f)

> **NOTE:** 
> 1. If the API host is already in use, modify the port number per your preference in embed.js and update that Dashboard.js file.
> 2. If you are using React version lower than v18.0, you can update the `index.js` file by adding the following line. Ensure that you replace the existing `createRoot` line with the following line.</br>
     `import ReactDOM from 'react-dom';
      ReactDOM.render(<App />, document.getElementById('root'));`

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/react-with-node-js/#how-to-run-the-sample) to know how to run the sample.

## Important notes

In a real-world application, it is recommended not to store passwords and sensitive information in configuration files for security reasons. Instead, you should consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
