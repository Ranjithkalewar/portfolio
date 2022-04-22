let login=prompt(`Status`,'');
if(login==='Admin'){
    let pass=prompt(`Enter Password`,'');
    if (pass==='TheMaster'){
        alert(`Welcome`);
    }else if (pass===''||pass===null){
        alert(`Cancelled`);
    }else {
        alert(`Wrong Password`);
    }
}else if (login===''||login===null){
    alert(`Cancelled`);
}else {
    alert(`I Dont Know You`);
}