//Begin the login process and set up the listener for new messages
login(start, recieveMessage);

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	console.log(user);
	document.getElementById("sendMessage").addEventListener("click", send);
}

//This function runs every time you recieve a message. It will run for every message already in the database.
//The message information is passed to you in the variable 'message'
function recieveMessage(message) {
	console.log(message);
  var receivedMessages = document.getElementById("received-messages");
  receivedMessages.innerHTML = message.content
  //var msg = getElementById("messageout") 

}

//The sendMessage('text') function will send a message from you to the database.
function send() {
	//sendMessage(document.getElementById("messageout").value);
  var message = document.getElementById("message").value;
  sendMessage(message)
}

function displayMessages() {
 var receivedMessages = snapshot.val().message;
for (var i in receivedMessages) {
  var displayedMessage = document.createElement("p")
  displayedMessage.innerHTML = receivedMessages[i].content;
  receivedMessages.append(displayedMessage);
}

}

