/*lecture 11---------------------------------------------------->*/
//Very important topic DOM
/*let h1ob=document.getElementById('head1');
document.write(h1ob+'<br>');
/!*obj=new HTMLHeadingElement();
//object initialised with all settings  (Html & Css and data);
then it returns obj;*!/
//output is [object HTMLHeadingElement]
/!*console.log(h1ob);*!/

let h2ob=document.getElementsByName('head2')
document.write(h2ob+'<br>');
//output is [object NodeList];

h2ob[2].innerText='changed'
h2ob[1].innerText='me' //adding the data in the existing tag
h2ob[0].innerText='Hey its'
console.log(h2ob[2]);
//to check the objects details enter h2ob[0 or 1 or 1] to check

let tag1=document.getElementsByTagName('input');
document.write(tag1+'<br>');
//output is [object HTMLCollection];
// console.log(tag1);*/



//Getting Access to th tags and modifying using innerText and Value
/*const firstH1Tag=document.getElementById('head1');
//if the tag is paired tag or output or non input  then we use InnerText //but for data collection we use innerHtml
//if the tag is non input tag then we use innerHTML
//if its text box the .value will work
//innerText returns the data of the correspondent tag
document.write(firstH1Tag.innerText+'<br>');
firstH1Tag.innerText='Hello World'; //to change the data in the particular tag or modification
/!*firstH1Tag.innerText=''; //to delete a tag just make it empty string*!/ //deleting data
firstH1Tag.innerText+=', Good Morning'; //appending data

const textBox=document.getElementById('tf1')
//for getting access of the input tag or non-paired tag we use value
document.write(textBox.value+'<br>'); //we use value for input tags //retrieving the data
textBox.value+="300";
document.write(textBox.value+'<br>');
// textBox.value='';*/



//for the paired tags we use INNER HTML
/*const op1=document.getElementById('res1');
op1.innerText="<h1>Hello</h1>" //not working
//if we write op1.innerText it will write the text even if you add the tags, so we go for innerHtml
op1.innerHTML="<h1><u>Hello World</u></h1>"; //Here using innerHTML it will add tags data but not the tag itself

const op2=document.getElementById('res2');
op2.innerHTML="<a href='http://google.com'>It came roi</a>";*/

//doing it dynamically======================================IMP>
/*const event=document.getElementById('op1')
// event.innerText="Yeah button clicked";*/ //for re-usability use this
//shortcut
// document.getElementById('op1').innerText="Yeah button clicked";

/*Changing the styles dynamically*/
function changeStyle(){
    const h1=document.getElementById('head1');
    h1.style.color="red"; //style is one of the DOM property
    h1.style.backgroundColor="yellow"; //use style. any css property to change the styles
    h1.style.display="inline-block"
    h1.style.border="1px solid blue"
    h1.style.borderRadius='10px';
}
