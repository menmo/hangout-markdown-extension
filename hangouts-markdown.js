var onStateChange = function(eventObj) {
  console.log(eventObj.message);
};
gapi.hangout.data.onMessageReceived.add(onStateChange);
