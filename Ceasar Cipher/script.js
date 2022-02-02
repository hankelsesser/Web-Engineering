
function getWords () {
var rawinput = document.getElementById("inputmsg").value;
var input = rawinput.toUpperCase();
//console.log(input);
var key = document.getElementById("keyInput").value
//console.log(key);
var output = '';
let keyint = parseInt(key);

for (let j = 1; keyint > 26; j++) {
keyint = keyint - 26
//console.log(keyint)
}

if (keyint < 0) {
	for (let j = 1; keyint < -26; j++) {
	keyint = keyint + 26;
	//console.log(keyint)
	}
	keyint = 26 + keyint;
} else {}

for (var i = 0; i < input.length; i++){ 
		//console.log(input.charCodeAt(i));
		

		output += String.fromCharCode(input.charCodeAt(i) + keyint);
		//console.log(output.charCodeAt(i));
	 }


document.getElementById("result").innerHTML = output;





var alphabet = 'abcdefghijklmnopqrstuvwxyz';
for (let k = 0; k <= 26; k++) {
	console.log(alphabet.charCodeAt(k));
}
}



