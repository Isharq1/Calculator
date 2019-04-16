
// if (choice == "a") {
//   var x = prompt("Enter first number");
//   var y = prompt("Enter second number");
//   var result = Number(x) + Number(y);
//   alert("The answer is "+result+"");
//
// } else if (choice == "s") {
//   var x = prompt("Enter first number");
//   var y = prompt("Enter second number");
//   var result = Number(x) - Number(y);
//   alert("The answer is "+result+"");
//
// } else if (choice == "m") {
//
//   var x = prompt("Enter first number");
//   var y = prompt("Enter second number");
//   var result = Number(x) * Number(y);
//   alert("The answer is "+result+"");
//
// } else if (choice == "d") {
//   var x = prompt("Enter first number");
//   var y = prompt("Enter second number");
//   var result = Number(x) / Number(y);
//   alert("The answer is "+result+"");
//
// }

do {

var features = prompt("Addition or basic features? (ad) Additional (bf) Basic")

if (features == "bf") {

  var choice = prompt("What function would you like? (a)Addition (s)subtraction (m)Multiplication (d)Division ")

  switch (choice) {

    case "a":
    var x = prompt("Enter first number");
    var y = prompt("Enter second number");
    var result = Number(x) + Number(y);
    alert("The answer is "+result+"");
    break;

    case "s":
    var x = prompt("Enter first number");
    var y = prompt("Enter second number");
    var result = Number(x) - Number(y);
    alert("The answer is "+result+"");
    break;

    case "m":

    var x = prompt("Enter first number");
    var y = prompt("Enter second number");
    var result = Number(x) * Number(y);
    alert("The answer is "+result+"");

    break;
    case "d":
    var x = prompt("Enter first number");
    var y = prompt("Enter second number");
    var result = Number(x) / Number(y);
    alert("The answer is "+result+"");

    break;
    default:
    var x = prompt("Enter first number");
    var y = prompt("Enter second number");
    var result = Number(x) + Number(y);
    alert("The answer is "+result+"");

  }
}
else {
  var choice2 = prompt("What function would you like? (p) power (sq) square root");

  if (choice2 == "p") {
    var x = prompt("Enter first number");
    var y = prompt("Enter second number");
    var result = Math.pow(x, y)
    alert("The answer is "+result+"");


  }
   else if (choice2 == "sq") {
     var x = prompt("Enter first number");
     var result = Math.sqrt(x)
     alert("The answer is "+result+"");
  }


}
} while (true);
