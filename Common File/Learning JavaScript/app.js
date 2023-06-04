//var x = "Hello World";
//console.log(x);
//
//var y = 999;
//console.log(y);
//
//var z = true;
//console.log(z);
//
//console.log(typeof(z));

//////////////////Arithmetic Operators

//var x = 90;
//var y = 10;
//console.log(x + y);
//console.log(x % y);

/////////////Logical And Ternary

//var x = 20;
//var y = 10;
//var z = x > y;
//
//console.log(x > y);
//console.log(z);
//console.log(typeof(z));
//
//var a = 40;
//var b = 20;
//var c = a < b;
//
//console.log(typeof(c));
//console.log(c);
//
//// &&
//console.log(z && c);
//
//// ||
//console.log(z || c);
//
//// !
//console.log(!c);
//
//var age = 19;
//var eligiblevote = (age > 18) ? "PERSON CAN VOTE" : "PERSON IS UNDER 18";
//
//console.log(eligiblevote);
//
//console.log(z &= c);
//
//console.log(z |= c);
//
//console.log(z != c);

//var a = "10";
//var b = 10;
//
//console.log(a);
//console.log(b);
//
//console.log(typeof(a));
//console.log(typeof(b));
//
//console.log(a == b);
//console.log(a === b);
//
//var c;
//var d = null;

//console.log(typeof(c));
//console.log(typeof(d));

// undefined: when an variable is only declared and not defined then it is undefined

// null: null is just same as the other string, number etc

// =

// == this operator doesnt care about the type of the value. It just compares the two values.

// === this operator cares even for the values and the types of it.

//////Concatination////////

//var a = 10;
//var b = 30;
//
//var d = "Sunny";
//var e = "Singh";
//
//var f = d + e;
//var c = a + b;
//console.log(c);
//console.log(f);
//
//////////Type Conversion/////////////
//
//var g = "10";
//var h = 20;
//var j = 30;
//var i = j + g + h;
//
//console.log(i);
//console.log(typeof(i));

/////////////if & else

////////////Condition Statements

//var age = 12;
//
//if(age <= 20)
//    {
//        console.log("Teenager");
//    }
//else if(age > 20 && age <= 55)
//    {
//        console.log("Mid Age Person");
//    }
//else
//    {
//        console.log("Retire Age");
//    }
//
//////////////////Switch
//
//switch(age)
//    {
//        case 1:
//            console.log("Case 1");
//            break;
//        case 12:
//            console.log("Case 12");
//            break;
//        default:
//            console.log("Wrong Case");
//    }

///////////////Arrays////////

var a = "Misi Saga";
var b = "Sari";
var c = "Calgari";
var d = "Brampton";
var e = "munda";
var f = "randa";

// array is a collection of similar type of data and it holds multiple data in a single variable

// how to declare array??

var ary = []; // first way

var ary2 = new Array(); // second way

console.log(typeof(ary));

// insert data into array

ary = ["Mortriol", "Sari", "Nova Scoshiya", "Mini Punjab", "Toronto"];

// how can we traverse data from array

console.log(ary[2]);

// how to mutate array

ary[2] = "Canada";

console.log(ary[2]);

console.log(ary);

//////// Loops & Itrators

// Types of Loops

var i = 0;

while(i < 5)
    {
        console.log(ary[i]);
        i++;
    }
console.log("While");

//Do While

var k = 0;
do{
        console.log(k);
        k++;
}while(k < 5)
console.log("Do While");
    
// For loop

for(var j = 0; j < 5; j++)
    {
        console.log(ary[j]);
    }
console.log("For Loop");

for(var j = 0; j < ary.length; j++)
    {
        console.log(ary[j]);
    }
console.log("For Loop length");