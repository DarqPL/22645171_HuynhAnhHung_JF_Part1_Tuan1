console.log("Lesson 3");
var DolphinScore1 = [96,108,89]
var KoalasScrore1 = [88,91,110]
var DolphinScore2 = [97,112,101]
var KoalasScrore2 = [109, 95 , 123]
var DolphinScore3 = [97,112,101]
var KoalasScrore3 = [109, 95 , 106]

var DolphinAvgScore1 = DolphinScore1.reduce((acc,current) => acc+current,0)/DolphinScore1.length
var KoalasAvgScore1 = KoalasScrore1.reduce((acc,current) => acc+current,0)/KoalasScrore1.length
var DolphinAvgScore2 = DolphinScore2.reduce((acc,current) => acc+current,0)/DolphinScore2.length
var KoalasAvgScore2 = KoalasScrore2.reduce((acc,current) => acc+current,0)/KoalasScrore2.length
var DolphinAvgScore3 = DolphinScore3.reduce((acc,current) => acc+current,0)/DolphinScore3.length
var KoalasAvgScore3 = KoalasScrore3.reduce((acc,current) => acc+current,0)/KoalasScrore3.length

if (Math.round(DolphinAvgScore1)>Math.round(KoalasAvgScore1) ) {
    console.log("Dolphin team win on first data (" + DolphinAvgScore1+")")
} else if (Math.round(DolphinAvgScore1)<Math.round(KoalasAvgScore1) ) {
    console.log("Koalas team win on first data (" + KoalasAvgScore1+")")
} else {
    console.log("Draw on first data");
}

if (Math.round(DolphinAvgScore2)>Math.round(KoalasAvgScore2)) {
    console.log("Dolphin team win on second data (" + DolphinAvgScore2+")")
} else if (Math.round(DolphinAvgScore2)<Math.round(KoalasAvgScore2)) {
    console.log("Koalas team win on second data (" + KoalasAvgScore2+")")
} else {
    console.log("Draw on second data");
}

if (Math.round(DolphinAvgScore3)>Math.round(KoalasAvgScore3)) {
    console.log("Dolphin team win on third data (" + DolphinAvgScore3+")")
} else if (Math.round(DolphinAvgScore2)<Math.round(KoalasAvgScore2)) {
    console.log("Koalas team win on third data (" + KoalasAvgScore3+")")
} else {
    console.log("Draw on third data");
}

console.log("Bonus");
if (Math.round(DolphinAvgScore1)>Math.round(KoalasAvgScore1) && DolphinAvgScore1>=100.0) {
    console.log("Dolphin team win on first data (" + DolphinAvgScore1+")")
} else if (Math.round(DolphinAvgScore1)<Math.round(KoalasAvgScore1) && KoalasAvgScore1>=100.0) {
    console.log("Koalas team win on first data (" + KoalasAvgScore1+")")
} else {
    console.log("Draw on first data");
}

if (Math.round(DolphinAvgScore2)>Math.round(KoalasAvgScore2)&& DolphinAvgScore2>=100.0) {
    console.log("Dolphin team win on second data (" + DolphinAvgScore2+")")
} else if (Math.round(DolphinAvgScore2)<Math.round(KoalasAvgScore2)&& KoalasAvgScore2>=100.0) {
    console.log("Koalas team win on second data (" + KoalasAvgScore2+")")
} else {
    console.log("Draw on second data");
}

if (Math.round(DolphinAvgScore3)>Math.round(KoalasAvgScore3)&& DolphinAvgScore3>=100.0) {
    console.log("Dolphin team win on third data (" + DolphinAvgScore3+")")
} else if (Math.round(DolphinAvgScore2)<Math.round(KoalasAvgScore2)&& KoalasAvgScore3>=100.0) {
    console.log("Koalas team win on third data (" + KoalasAvgScore3+")")
} else {
    console.log("Draw on third data");
}