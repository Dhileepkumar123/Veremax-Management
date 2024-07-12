// const hubspot = require('@hubspot/api-client');

// const hubspotClient = new hubspot.Client({"developerApiKey":"YOUR_DEVELOPER_API_KEY"});

// const appId = 100;

// try {
//   const apiResponse = hubspotClient.webhooks.settingsApi.getAll(appId);
//   console.log(JSON.stringify(apiResponse, null, 2));
// } catch (e) {
//   e.message === 'HTTP request failed' ? console.error(JSON.stringify(e.response, null, 2)) : console.error(e);
// }

const express = require("express");

const app = express();
const ip = "192.168.4.216",port = 9050;

app.listen(port, (err) => {
    if(err) throw err
    console.log("Server is running on this port:" +ip+":"+port);
});