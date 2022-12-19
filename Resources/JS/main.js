//Initialize Variables
var retireValue = 0;

//Social Security Could Be Future Improvement

//Setup Function to Retrieve Input Values
function grabValue(name){
    return parseFloat(document.getElementById(name).value);
};

function output (amount) {

    //Grab Results div and Create an Output div
    var target = document.getElementById("results");
    label = "$" + amount;
    var outputItem = document.createElement('div');

    //Set Text For New Div
    outputItem.innerText = label;

    //Render Output
    target.appendChild(outputItem);

};

//Addd Commas to numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Calculate Retirement
function retireAnalysis() {

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
    
    var calc = initial;
    var monthlyAdd = monthlySave;

    for (var i=1; i <= monthsToRetire; i++ ) {     

        //Calculate Monthly Increase Until Retirement - Every 12 Months Increase Account For Raise
        if ((i/12 - Math.floor(i/12)) === 0) {

            monthlyAdd = monthlyAdd * (1 + raise);
            calc = (calc + monthlyAdd) * (1 + monthlyPct);

        } else {

            calc = (calc + monthlyAdd) * (1 + monthlyPct);
        };

    };

    retireValue = numberWithCommas(Math.round(calc));
    
    output(retireValue);
};

//Get and Listen For Button Clicks
var retireButton = document.getElementById('retireButton');
retireButton.addEventListener('click', retireAnalysis);