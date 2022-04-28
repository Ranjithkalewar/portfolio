//creating objectives
let person={name:'Ranjith',
    age:25,
    town:'Nizamabad',
    occupation:'study',
    fulldetails:function (){
    return "name is:"+this.name+"," +
        "age is:"+this.age+"," +
        "occupations is:"+this.occupation;
    }
}
document.write(person.name);
document.write('<br/>');
document.write(person["occupation"]);
document.write(person.fulldetails())
