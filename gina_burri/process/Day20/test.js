//first alert
alert ("hello world");

//second alert
alert ("hello again");


var myVariableGina;

myVariableGina = 10;

//al in one
var myVar2 = "hello";

// change value
myVar2 = "hello agiain";

myVar2 = 5;

var customerAge = 32;

var myVar3 = 40;


// else if statements

// var myAge = 29;

// if (myAge > 30){
//     document.write("you are over 30!");

// } else if (myAge > 20){
//     document.write("you are over 20!")

// } else if (myAge > 10){
//     document.write("you are over 10!");

// } else{
//     document.write("you are not over 10!");
// }

// var myAge = 25;

// if (myAge >= 18 && myAge <= 30){
//     document.write("You can come!")

// } else{
//     document.write("you aint comiing!")
// }

// var myAge = 25;



// nur eine der beiden muss zutreffen
// if (myAge < 18 || myAge > 30 || myAge === 25){
//     document.write("you aint comiing!")


// } else{
//     document.write("You can come!")

// }



//while loop
// var age = 5;

// while (age < 10) {

//     console.log("your age is less than 10");
//     age++;
// }
// document.write("you are now 10");



// same as the loop oben
// for (age = 5; age <10; age++) {

//     console.log("your age is less than 10"); 
// }
// document.write("you are now 10");



// for loops

// var links = document.getElementsByTagName("a");

// for (i = 1; i <= links.length; i++) {

//     console.log("this is link number" + i); 
// }
// document.write("all links now looped");



// for loops short counts to 7 auslassen 5 and 3
// for (i = 0; i < 10; i++) {

// if(i === 5 || i === 3) {
//     continue;
// }

//     console.log(i);

//     if(i === 7){

//     break;
//     }
// }
// console.log("i ahve broken outt of the loop");



//Practical Example using Loops/ classes hinzugefügt <spannend>
var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){

    links[i].className = "link-" + i;

}

function getAverage (a,b){

    var average = (a + b) / 2;
    console.log(average);
}

getAverage(7,12);
