console.log("Lesson 2");
var weightM1 = 78
var heightM1 = 1.69
var weightJ1 = 92
var heightJ1 = 1.95
var weightM2 = 95
var heightM2 = 1.88
var weightJ2 = 85
var heightJ2 = 1.76

var BMIM1 = weightM1/(heightM1*heightM1)
var BMIJ1 = weightJ1/(heightJ1*heightJ1)
var BMIM2 = weightM2/(heightM2*heightM2)
var BMIJ2 = weightJ2/(heightJ2*heightJ2)

var markHigherBMI1 = BMIM1>BMIJ1
var markHigherBMI2 = BMIM2>BMIJ2

if (markHigherBMI1 == true) {
    console.log("Mark's BMI ("+Math.round(BMIM1*10)/10+") is higher than John's("+Math.round(BMIJ1*10)/10+")!")
} else {
    console.log("John's BMI ("+Math.round(BMIJ1*10)/10+") is higher than Mark's("+Math.round(BMIM1*10)/10+")!");  
}

if (markHigherBMI2 == true) {
    console.log("Mark's BMI ("+Math.round(BMIM2*10)/10+") is higher than John's("+Math.round(BMIJ2*10)/10+")!")
} else {
    console.log("John's BMI ("+Math.round(BMIJ2*10)/10+") is higher than Mark's("+Math.round(BMIM2*10)/10+")!");  
}

