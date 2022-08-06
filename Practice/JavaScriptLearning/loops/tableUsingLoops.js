function forTable(){
    let j=document.getElementById("tn").value;
    for (let i=1;i<=20;i++){
        document.write(`${j}*${i}=${i*j}`+"<br>");
    }
}