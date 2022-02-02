  var firebaseConfig = {
    apiKey: "AIzaSyDVQl7X03RAoe0cbnjGtULzEzpeFaOq_yQ",
    authDomain: "webengineering-a3bfd.firebaseapp.com",
    databaseURL: "https://webengineering-a3bfd.firebaseio.com",

    projectId: "webengineering-a3bfd",
    storageBucket: "webengineering-a3bfd.appspot.com",
    messagingSenderId: "656725693544",
    appId: "1:656725693544:web:c95155f962c2eabb6b97dd",
    measurementId: "G-2ZF0YDVNZC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Prep the database object
var database = firebase.database();

//Gets information from the page and sends it to the database
document.getElementById("submit").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var act1 = document.getElementById("act1").value;
  var act2 = document.getElementById("act2").value;
  writeUserData(name, act1, act2);
});

//Writes information to the database
function writeUserData(userId, name, email) {
  database.ref('users').push({
    name: name,
    act1: act1,
    act2: act2
  });
}

//Read from the database EVERY TIME the reference location changes
firebase.database().ref('/').on('value', function(snapshot) {
  //Get the value from the database snapshot
  var users = snapshot.val().users;
  //Get the location from html
  var ul = document.getElementById("output");
  //Clear the html so we don't duplicate everything
  ul.innerHTML = "";
  //Loop through the value and add each one
  for(var i in users) {
    var temp = document.createElement("li");
    temp.innerHTML = users[i].name + " likes " + users[i].act1 + " and " + users[i].act2;
    ul.append(temp);
  }
});


