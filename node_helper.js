const NodeHelper = require("node_helper");
const Log = require("logger");

module.exports = NodeHelper.create({
  start: function(){
    Log.log("Node helper for " + this.name + " is started");
  },

  socketNotificationReceived: function(notification, payload) {
  	Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
  	this.sendSocketNotification("CONFIG_BACK",payload)
  },
});
