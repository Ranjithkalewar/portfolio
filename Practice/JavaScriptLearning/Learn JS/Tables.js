/*for (let i=0; i<=10; i++){
    document.write("3*" + i + "=" + 3 * i + "<br/>");
}//for loop table
function myName(){
    alert(`Ranjith Kumar`)
}//function
let userName=prompt(`Enter your Name`,'');
function myMessage(){
    let message='Hello,' + userName;
    alert(message);
}
function ageCheck(age){
    if (age>=18){
        return true;
    }else {
        return confirm(`DO you have permission from your Parents`);
    }
}
let age=prompt(`Enter your age`,'');
if (ageCheck(age)){
    let pass=prompt(`Enter Password`,'');
    if (pass==='NightClub'){
        alert(`Access Granted`);
        alert(`Welcome`);
    }
    else if (pass === '' || pass == null){
        alert(`Cancelled`);
    }else {
        alert(`Wrong Password`)
    }
}else {
    alert(`No Access`);
}
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
function min(a, b){
    return (min(1, 1));
}*/;
function gender(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}
function showOk(){
    alert(`You are Male`);
}
function showCancel(){
    alert(`You are Female`)
}
gender(`Are you male`, showOk, showCancel);