let login = prompt("Who's there? " + " Answer : ((Admin))"); // Admin Question
let usr = "Admin"; // Admin
let pwd = "TheMaster"; // Password
if (login === false || login == null) {
// Empty field || null is cancel button or Esc
    alert("Canceled"); // Message
} else if (login !== usr) {
// if Admin have wrong value
    alert("I don't know you"); // Message
} else {
// if login == usr
    login = prompt("Password?" + "Answer : ((TheMaster))"); // show password question
    if (login == null || login === false) {
// Empty field || null is cancel button or Esc
        alert("Canceled"); // Message
    } else {
        login === pwd ? alert("Welcome!") : alert("Wrong password"); // if Password is true : if Password is wrong
    }
}