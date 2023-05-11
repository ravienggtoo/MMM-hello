Module.register("MMM-hello",{
     defaults: {
        text: "Hello From Default"
     },

     init: function(){
       Log.info(this.name + " is in init stage");
     },

     loaded: function(){
       Log.info(this.name + " is in loaded stage");
     },

     start: function(){
       Log.info(this.name + " is in start stage");
       this.config.newmessage = "New message";
       Log.info("Config is " +  this.config.text);
     },

     notificationReceived(notification, payload, sender) {
       if(notification==="ALL_MODULES_STARTED"){
           Log.info("Sending Notification to Socket1");
           this.sendSocketNotification("CONFIG", {"text" : this.config.text})
       }
     },

     socketNotificationReceived: function(notification, payload) {
     if (notification==="CONFIG_BACK") {
               Log.info("Got  Notification back " + notification + " " + payload);
         }
     },

     getDom: function(){
       var wrapper = document.createElement("div");
       wrapper.innerHTML = this.config.text + " " + this.config.newmessage;
       return wrapper;
     },
});
