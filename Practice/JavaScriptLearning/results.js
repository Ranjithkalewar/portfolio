function getResult() {
    let telugu1 = +document.getElementById('telugu').value;
    let english1 = +document.getElementById('english').value;
    let maths1 = +document.getElementById('maths').value;
    let physics1= +document.getElementById('physics').value;
    let total1=telugu1+english1+maths1+physics1;
    let avg=total1/4;
    document.getElementById('total').value="Total Marks: "+total1;
    document.getElementById('average').value="Average :"+avg;
    if(telugu1>39 && english1>39 && maths1>39 && physics1>39) {
        if(avg>=90){
            document.getElementById('grade').value="A+";
        }else if(avg>=80){
            document.getElementById('grade').value="A";
        }else if(avg>=70){
            document.getElementById('grade').value="B+";
        }else if(avg>=60){
            document.getElementById('grade').value="B";
        }else if(avg>=50){
            document.getElementById('grade').value="C";
        }else if(avg>=40){
            document.getElementById('grade').value="D";
        }
    }else {
        document.getElementById('grade').value="Fail";
    }

}