
/*let message = (login == 'Employee') ?'Hello' :
    (login == 'Director') ? 'Greetings':
        (login == '') ?'No login': '';
alert(message)
let hour=11;
let min=30;
/*if (hour<10 || hour>20){
    alert(`Office is Closed`);
}
else {
    alert(`welcome`);
}
if (hour==11 && min==30){
    alert("Its 11:30")
}*/
let login=prompt(`Your Status`,'');
if (login==='Admin') {
    let pass = prompt(`password`, '');
    if (pass === 'TheMaster') {
        alert(`Welcome`);
    } else if (pass === '' || pass === null) {
        alert(`Cancelled`);
    } else {
        alert(`Wrong Password`);
    }
}
else if (login===''||login===null){
        alert(`Cancelled`)
    } else {
        alert(`I Dont Know You`)
}