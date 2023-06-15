# BoldBI Embedding React with NodeJs Sample

<!-- This Bold BI React with NodeJs sample contains the dashboard embedding samples. In this sample, the `React` application act as the front-end, and the `NodeJs` acts as the back-end application. This sample demonstrates the rendering of dashboard available in your Bold BI server. -->
This project was created using NodeJS 16.17. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

   ![Dashboard View](https://github.com/bold-bi/embedded-bi-samples/assets/129486688/2a9c309b-d349-4095-8d9e-ea4cb512d6c2)
 
 ## Requirements to run the demo

The samples require the following to run.

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

> **NOTE:** Node.js v14.16 to v18.16 are supported

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

 * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/bold-bi/embedded-bi-samples/tree/315584_Revamping_NodeJSwithReact_Sample) within the application. Please ensure that you have placed it in the application as shown in the following image.
 
   ![EmbedConfig image](https://github.com/bold-bi/embedded-bi-samples/assets/129486688/7911b29c-0b65-4f7b-8915-a2f66f6231b2)

 ## Developer IDE


  * Visual studio code(https://code.visualstudio.com/download)

 ### Run a Sample Using Visual Studio Code
 
  * Open the React with NodeJs sample in Visual Studio Code.
   
  * Open the terminal in Visual Studio Code and install all dependent packages by executing the following command in the terminal
    
    ```bash
    npm install
    ```
    
  * Finally, run the application using the following command.
    
    ```bash
      npm start
    ```
    
  * After executing the command, the application will automatically launch in the default browser.
    
    ![Dashboard image](https://github.com/bold-bi/embedded-bi-samples/assets/129486688/2a9c309b-d349-4095-8d9e-ea4cb512d6c2)

Please refer to the [help documentation]() to know how to run the sample.

## Important notes

It is recommended to not store passwords and sensitive information in configuration files for security reasons, in a real-world application. Instead, you should consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
