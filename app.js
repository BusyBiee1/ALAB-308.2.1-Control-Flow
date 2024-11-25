// class tasts //

console.log ("First Part");

let ouNum = 0;

if(outNum = 0) {
    console.log('the no is pve ${ourNum}')
}
else {
    console.log('The no is nve ${ourNUm}')
}

// Exercise start //
//Nested If//
let num =80;
if(num>=90) {
    console.log("A");
}
else{ 
    if (num>=80) {
    console.log("B");
    }
    else{
        if (num>=70) {
            console.log("C");
            }
        else{
            if (num>=55) {
                console.log("C");
                }
            else{
                console.log("D");
            }
        }
    }
}

console.log ("Second Part");

//Swith stmt//
let x = 5;
let y = 4;
let operand = "/";
switch (operand) {
   case "+":
       console.log(x + y);
       break;
   case "-":
       console.log(x - y);
       break;
   case "*":
       console.log(x * y);
       break
   case "/":
       switch (x) {
        case 5:
            console.log(x + y);
            break;
        case 4:
            console.log(x - y);
            break;
        }
        break;
    default:
       console.log("Invalid Operand")
       break;
}

console.log ("Third Part");

const PlantContainedRadius= 5; 
const PI = 3.1415;
const area = PI * PlantContainedRadius * PlantContainedRadius;
const EachPlantNeedsArea = 0.8;
const TotalPlantToStartWith = 20;
const RateOfPlantDoublingInNo = 1;
let PlantGrowthInNoOfWeeks = 0;
let prediction = "nothing";
const prompt = require("prompt-sync")({sigint: true});
//let InputValue = 3;
let InputValue = prompt("enter no of weeks to predict the plaint growth: ", 0);
//let InputValue = rl("enter no of weeks to predict the plaint growth in that many weeks", 0);
//let PlantGrowthInNoOfWeeks = Math.pow(TotalPlantToStartWith, InputValue);
//let PlantGrowthInNoOfWeeks = (TotalPlantToStartWith *  2**InputValue);
if (Number(InputValue) === 1){
//if (true) {
     PlantGrowthInNoOfWeeks = TotalPlantToStartWith;
    }
else if (Number(InputValue) >=2) {
     PlantGrowthInNoOfWeeks = (TotalPlantToStartWith *  2**Number(InputValue-1));
    }
else{ 
    console.log("Error: unexpected input! ");
    }
console.log(`plant growth after ${InputValue} no of weeks will be ${PlantGrowthInNoOfWeeks}`);


const MaxAreaPlantcanFitIn5Meters = PI * PlantContainedRadius * PlantContainedRadius;
const AreaTakenByGivenNoOfPlants = PlantGrowthInNoOfWeeks * EachPlantNeedsArea;
//const PercentageAreaTakenByGveinNoofPlantsToMaxArea = ((AreaTakenByGivenNoOfPlants - MaxAreaPlantcanFitIn5Meters) / AreaTakenByGivenNoOfPlants *100);
const PercentageAreaTakenByGveinNoofPlantsToMaxArea = ((AreaTakenByGivenNoOfPlants / MaxAreaPlantcanFitIn5Meters) *100);
console.log(`PlantGrowthInNoOfWeeks = ${PlantGrowthInNoOfWeeks}`);
console.log(`MaxAreaPlantcanFitIn5Meters = ${MaxAreaPlantcanFitIn5Meters}`);
console.log(`AreaTakenByGivenNoOfPlants = ${AreaTakenByGivenNoOfPlants}`);
console.log(`PercentageAreaTakenByGveinNoofPlantsToMaxArea = ${PercentageAreaTakenByGveinNoofPlantsToMaxArea}`);

if (PercentageAreaTakenByGveinNoofPlantsToMaxArea > 80.0){
    prediction = " - So Need to be PRUNED.";
//    console.log(`For ${InputValue} week(s) the percent area taken by the plants will be ${PercentageAreaTakenByGveinNoofPlantsToMaxArea} but the MaxAvailArea is ${MaxAreaPlantcanFitIn5Meters} - So Need to be PRUNED`);}
}
else if (PercentageAreaTakenByGveinNoofPlantsToMaxArea >= 50.0 && (PercentageAreaTakenByGveinNoofPlantsToMaxArea <= 80.0)) {
    prediction = " - So Need to be MONITORED.";
//    console.log(`For ${InputValue} week(s) the percent area taken by the plants will be ${PercentageAreaTakenByGveinNoofPlantsToMaxArea} but the MaxAvailArea is ${MaxAreaPlantcanFitIn5Meters} - So Need to be MONITORED`);}
}
else if (PercentageAreaTakenByGveinNoofPlantsToMaxArea < 50.0) {
    //console.log(`For ${InputValue} week(s) the percent area taken by the plants will be ${PercentageAreaTakenByGveinNoofPlantsToMaxArea} - area taken by plant will be: ${AreaTakenByGivenNoOfPlants} but the MaxAvailArea is ${MaxAreaPlantcanFitIn5Meters} - So Need to be PLANTED`);
    prediction = " - So Need to be PLANTED.";
//    console.log(`For ${InputValue} week(s) the percent area taken by the plants will be ${PercentageAreaTakenByGveinNoofPlantsToMaxArea} but the MaxAvailArea is ${MaxAreaPlantcanFitIn5Meters} - So Need to be PLANTED`);
}
else {
    prediction = " - UNEXPECTED INPUT / ERROR";
}

console.log(`For ${InputValue} week(s) the percent area taken by the plants will be ${PercentageAreaTakenByGveinNoofPlantsToMaxArea} but the MaxAvailArea is ${MaxAreaPlantcanFitIn5Meters} and the predication is ${prediction}`);

