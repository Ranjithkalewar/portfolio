/*for (let i = 0; i<=10; i++){
    document.write(4 * i+'<br>');
}*/;
let login=prompt(`Please Enter Your Status`,'');
if (login==='Admin'){
    let pass=prompt(`Please Enter Password`,'');
    if (pass==='Master'){
        alert(`Welcome`);
    }else if (pass===''||pass===null){
        alert(`Cancelled`);
    }else {
        alert(`Wrong Password`);
        alert(pass=prompt(`Please Enter Password`,''));
    }
}else if (login===''||login===null){
    alert(`Cancelled`);
}else {
    alert(`I dont Know You`);
}