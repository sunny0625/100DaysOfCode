/////////Functions///////

function name()
{
    return "Sunny";
}

console.log(typeof(name))
//// Everything in JS is an object

////////if a function is not placed under a js object then that function belongs to the windows object...

console.log(window.name);

/////////methods of function

var sunny = {
    firstname: "sunny",
    lastname: "singh",
    age: 20,
    occupation: "Machine Learning",
    greet: function(style, timeofday)
    {
        if (style == "formal")
            {
                console.log("Hi, My name is " + this.firstname + this.lastname ", I am " + this.occupation + ". I'm " + this.age + "'s old.");    
            }
        else if(style == "friendly")
            {
                console.log ("Hey, What's up!" + this.firstname + " I'm " + this.age + "'s year old and my tech stack is " + this.occupation);
            }
    }
}

var raj = {
    firstname: "Raj",
    lastname: "Sharma",
    age: 22,
    occupation: "Web Developer / Designer",
}

//////// call.......

var raj = sunny.greet.call(raj, "formal", "Morning");
console.log(raj.greet);

////////Apply

var rajApply = sunny.greet.apply(raj,)