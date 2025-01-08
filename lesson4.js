console.log("Lesson 4");
const calTip = (bill) => {
    return (bill>=50 && bill <= 300) ? bill*0.15 : bill*0.2                                                                
}

const printLog= (bill) => {
    const tip = calTip(bill)
    console.log("The bill was "+bill+", the tip was "+tip+", and the total value "+(bill+tip));
}

console.log("Data 1");
printLog(275)
console.log("Data 2");
printLog(40)
console.log("Data 3");
printLog(430)