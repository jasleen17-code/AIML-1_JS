const person ={
    fname : "Jasleen",
    lname : "Kaur",
    age : 18,
}
for (let x in person){
    console.log("Person's details  " + x + " is " + person[x]);
}
/**********For in loop in JavaScript**********/
var count = 0;
document.write("Starting loop" +"<br>");
while(count<10){
    document.write("Current count = " + count + "<br>");
    count++;
}
document.write("Loop ended");
/**********While loop in JavaScript**********/
var age =2;
if(age>=18){
    document.write("You are eligible to vote");
}
else{
    document.write("You are minor");
}
/**********If else statement in JavaScript**********/
var grade ='A';
document.write("Entering switch block <br/>");
switch(grade){
    case 'A':
        document.write("SLAY");
        break;
    case 'B':
        document.write("pretty gooood");
        break;      
    case 'C':
        document.write("not bad");
        break;  
    case 'D':   
        document.write("could be better");
        break;  
        default:
        document.write("unknown grade");
        }
        document.write("<br/>Exiting switch block");
        /**********Switch case statement in JavaScript**********/