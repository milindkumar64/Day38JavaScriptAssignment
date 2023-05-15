let a = Math.random()*900+100;
let b = Math.random()*900+100;
let c = Math.random()*900+100;
let d = Math.random()*900+100;
let e = Math.random()*900+100;
//console.log(num1,num2,num3,num4,num5);

if ((a >= b) && (a >= c) && (a >= d) && (a >= e)) { // a >= b,c,d,e
    console.log("Largest is: " + a);
} else if ((b >= c) && (b >= d) && (b >= e)) {      // b >= c,d,e
    console.log("Largest is: " + b);
} else if ((c >= d) && (c >= e)) {                  // c >= d,e
    console.log("Largest is: " + c);
} else if (d >= e) {                                // d >= e
    console.log("Largest is: " + d);
} else {                                            // e > d
    console.log("Largest is: " + e);
}