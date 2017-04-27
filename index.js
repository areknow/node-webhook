 
// Initialize WebHooks module. 
var WebHooks = require('node-webhooks')
 

// json file that store webhook URLs 
var webHooks = new WebHooks({
    db: './webHooksDB.json', 
})


//define the webhook url
var url = 'https://outlook.office.com/webhook/9a13f911-e1f1-4f6a-868b-def0c81f3a4e@70ebe3a3-5b30-435d-9d67-7716d74ca190/IncomingWebhook/e5cefb5c639943aab4c7ba8046459c4e/d609a152-1ff6-41f5-a3c7-e5a1db19636e';
 

// sync instantation - add a new webhooks
webHooks.add('webhook-simple', url).then(function(){
    console.log('webhook-simple success')
}).catch(function(err){console.log(err)});

webHooks.add('webhook-more', url).then(function(){
    console.log('webhook-more success')
}).catch(function(err){console.log(err)});
 
webHooks.add('webhook-complex', url).then(function(){
    console.log('webhook-complex success')
}).catch(function(err){console.log(err)});



//set up the webhook triggers
webHooks.trigger('webhook-simple', {
    "text": "Hello MS Teams!"
});
webHooks.trigger('webhook-more', {
    "title": "Learn about Office 365 Connectors", 
    "text": "Visit the [Outlook Dev Portal](https://dev.outlook.com) to learn more about Office 365 Connectors!", 
    "themeColor": "EA4300"
});
webHooks.trigger('webhook-complex', {
    "title": "Learn about Office 365 Connectors", 
    "text": "Visit the [Outlook Dev Portal](https://dev.outlook.com) to learn more about Office 365 Connectors!", 
    "themeColor": "EA4300", 
    "potentialAction": [{
        "@context": "https://schema.org", 
        "@type": "ViewAction", 
        "name": "Open Outlook Dev Center", 
        "target": ["https://dev.outlook.com"]
    }]
});