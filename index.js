 
// Initialize WebHooks module. 
var WebHooks = require('node-webhooks')
 

// json file that store webhook URLs 
var webHooks = new WebHooks({
    db: './webHooksDB.json', 
})
 
// sync instantation - add a new webhook called 'hook1'
webHooks.add('hook1', 'https://outlook.office.com/webhook/9a13f911-e1f1-4f6a-868b-def0c81f3a4e@70ebe3a3-5b30-435d-9d67-7716d74ca190/IncomingWebhook/e5cefb5c639943aab4c7ba8046459c4e/d609a152-1ff6-41f5-a3c7-e5a1db19636e').then(function(){
    console.log('webhook success')
}).catch(function(err){
    console.log(err) // why didnt this get the error back?
})
 

webHooks.trigger('hook1', {"text": "test"})