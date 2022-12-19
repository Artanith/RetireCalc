//Initialize Variables

//Social Security Could Be Future Improvement

//Setup Function to Retrieve Input Values
function grabValue(name){
    return parseFloat(document.getElementById(name).value);
};

//Grab Values from User Inputs
var income = grabValue("income");
var fundPct = grabValue("fundPct")/100;
var payPeriod = grabValue("payPeriod");
var retireAge = grabValue("retireAge");
var deathAge = grabValue("deathAge");
var returnPct = grabValue("returnPct")/100;
var currentAge = grabValue("currentAge");
var spend = grabValue("spend");
var raise = grabValue("raise")/100;
var initial = grabValue("initial");

//Calculate Initial Values
var yearlySave = income * fundPct;
var paycheckSave = yearlySave / payPeriod;
var monthlyPeriods = payPeriod / 12;
var monthlySave = paycheckSave * monthlyPeriods;
var monthlyPct = returnPct / 12;
var monthsToRetire = (retireAge - currentAge) * 12;


//Calculate Retirement

function retireAnalysis() {
    for (var i=1; i <= monthsToRetire; i++ ) {

        if ((i/12 - Math.floor(i/12)) === 0) {

            

        } else {


        };

    };
};

//Get and Listen For Button Clicks
var retireButton = document.getElementById('retireButton');
retireButton.addEventListener('click', retireAnalysis);