/*let name=prompt(`Name?`,'');
if (name==='John'){
    alert(`welcome`);
}else {
    alert(`User Not Found`);
}
let a=prompt(`enter a number`,'');
let b=prompt(`enter a number`,'');
let add= (+a + +b);
alert(`The addition of a+b is ${add}`);
let i=0;
while(i<3){
    alert(i);
    i++
}
let num;

do {
    num = prompt("Enter a number greater than 100",'');
} while (num <= 100 && num);*/;
let n = 50;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }