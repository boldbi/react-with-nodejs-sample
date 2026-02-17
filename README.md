# BoldBI Embedding React with NodeJS Sample

This project was created using NodeJS 14.16. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

   ![Dashboard view](/images/dashboard.png)

## Prerequisites

The samples require the following to run.

* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/download)

> **NOTE:** Node.js v14.16 to v18.18 are supported.

#### Supported browsers
  
* Google Chrome, Microsoft Edge, and Mozilla Firefox.

## Configuration

* Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code?utm_source=github&utm_medium=backlinks) to enable it.

    ![Embed Settings](/images/enable-embedsecretkey.png)

* To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file?utm_source=github&utm_medium=backlinks) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](/images/download-embedsecretkey.png)
    ![EmbedConfig Properties](/images/embedconfig-file.png)

* Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-nodejs-sample/tree/master) within the application. Please ensure that you have placed it in the application as shown in the following image.

   ![EmbedConfig image](/images/embedconfig-location.png)

## Developer IDE

* Visual Studio Code(<https://code.visualstudio.com/download>)

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

* After executing the command, the application will automatically launch in the default browser. You can access it at the specified port number (e.g., <https://localhost:3000>).

    ![dashboard view](/images/dashboard.png)

> **NOTE:** If the API host is already in use, modify the port number per your preference in embed.js and update that Dashboard.js file.

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/react-with-node-js/#how-to-run-the-sample?utm_source=github&utm_medium=backlinks) to know how to run the sample.

## Important notes

In a real-world application, it is recommended not to store passwords and sensitive information in configuration files for security reasons. Instead, you should consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed?utm_source=github&utm_medium=backlinks).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/?utm_source=github&utm_medium=backlinks).
