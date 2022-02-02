console.log(location);
console.log(location.search);

// (2020, 12, 20, 80, 100)

function setTime () {
let  now = new Date ();
let birthday = new Date('May 13, 2020');
let search = new Date(location.search);
let count = search.getTime() - now.getTime();

let days = Math.floor(count / (1000 * 60 * 60 * 24));
let hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((count % (1000 * 60)) / 1000);

document.getElementById("time").innerHTML = days + " days and " + hours + ":" + minutes + ":" + seconds + "";

}


setInterval(setTime, 1000);