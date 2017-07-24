
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ;
let dayMs = (24*60*60*1000);
/*
Inputs:
    holidays: array of date(s) which are holidays in that country/calendar
    config: {
        longWeekendStreak : x, // number of days to be trarversed in left and right direction to check the long weekend combination
        weekends: 'Saturday,Sunday' // comma separated name of day(s) (in English) of weekend in that country/calendar
    }
Output:
combinations = [
        {  // 1st combination
            message: Take just 1 day off on 'dd-mmm' to enjoy 4 days of holidays between 'dd-mmm' and 'dd-mmm'
            combination: [ 
                { date: 'yyyy-mm-dd'}, 
                { date: 'yyyy-mm-dd'}, 
                { date: 'yyyy-mm-dd'}, 
                { date: 'yyyy-mm-dd'} 
            ]
        },... 
*/

function dateSortingAsc(a,b){
    return a - b;
}

    let alreadyProcessed ;
    let allCombinations ;

longWeekendCalculator = function (holidays, configs){
    alreadyProcessed = [];
    allCombinations = [];

    holidays.map( holiday => {
        processDate(holiday, holidays, configs);
    });

    return allCombinations.sort(dateSortingAsc);
}

function processDate(candidateDate, holidays, configs) {

    // check if already processed 
    let isProcessed = alreadyProcessed.map(Number).indexOf(+candidateDate);

    if ( isProcessed < 0 ) {
        // proceed only if not processed already 

        alreadyProcessed.push(candidateDate); // declare as Processed

        // if its a holiday or weekend, repeat the PROCESS
        let isWeekend = configs.weekends.indexOf(weekdays[candidateDate.getDay()]);
        let isHoliday = holidays.map(Number).indexOf(+candidateDate); // map to number and serialize

        if(isHoliday >=0 || isWeekend >= 0)
        {
            allCombinations.push(candidateDate);

            // get dates before and after configs.longWeekendStreak days of holiday
            let streakStartDate = new Date(candidateDate.getTime() - configs.longWeekendStreak*dayMs);
            let streakEndDate = new Date(candidateDate.getTime() + configs.longWeekendStreak*dayMs);

            // find all dates between start and end streak
            let allDates = Array(Math.floor((streakEndDate - streakStartDate) / dayMs) + 1).fill().map((_, idx) => (new Date(streakStartDate.getTime() + idx * dayMs)))

            // go thru each date
                allDates.map( date => {
                    processDate( date, holidays, configs);
                });
            
        }

    }
}

module.exports = longWeekendCalculator ;