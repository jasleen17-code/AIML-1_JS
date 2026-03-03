     
/**********Switch case statement in JavaScript**********/
function myFunction(){
    alert("HELLO WORLD HEHE");
}
function sayHello(name ,age){
    document.write("Hello " + name + ", you are " + age + " years old.");
}
var res = mul(12,30);
function mul(x,y){
    return x*y;
}
document.write("The product of 12 and 30 is: " + res);
/**********Functions in JavaScript**********/ 
var add2 = (a,b) => {
    console.log(a+b);
}
add2(10,20);
/**********Arrow functions in JavaScript**********/
var person = {
    name : "Jasleen Kaur",
    age : 18,
    isMarried : false,                                                // static object
    address :{
        street : "123 Main St",
        flatNo : "6B",
    }
}
console.log(person["address"] , person["isMarried"]);

var person2 = new Object();
person2.name = "Jasleen kaur";
person2.age = 18;   
person2.isMarried = false;
person2.address = {};
person2.address.street = "123 Main St";
person2["address"]["flatNo"] = "6B";
console.log(person2);
/**********Objects in JavaScript**********/