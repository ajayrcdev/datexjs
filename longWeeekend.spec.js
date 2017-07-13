let test = require('tape');

let longWeekendCalculator = require('./longWeekend');


    /* expect to get inputData of Holidays in following format
       inputData = [
           {
            date: 'yyyy-mm-dd',
            calendarCode: 'US'
            }, ...
        ]

        configs = {
                longWeekendStreak : 2 // number of days to be trarversed in left and right direction to check the long weekend combination
                weekends: [
                {
                    calendarCode: 'US',
                    weekendDays: [Saturday,Sunday]   // days of weekend in that country/calendar
                },
                {
                    calendarCode: 'AE', (ISO of UAE)
                    weekendDays: [Friday,Saturday]   // days of weekend in that country/calednar
                }
            ]
        }

       expected output data is combination of long-weekends
        combinations = [
                {  // 1st combination
                 message: Take 1 day off on 'dd-mmm' to enjoy 4 days off.
                 combination: [ 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'} 
                    ]
                },
                {  // 2nd combination
                 message: Take 2 days off on 'dd-mmm' and 'dd-mmm' to enjoy 5 days off.
                 combination: [ 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'} 
                    ]
                },
                {  // 3rd combination
                 message: Take 3 days off on 'dd-mmm','dd-mmm' and 'dd-mmm' to enjoy 7 days off.
                 combination: [ 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'},                                                               
                     { date: 'yyyy-mm-dd'} 
                    ]
                } 
                 
                ...
            ]
    */

test('basic arithmetic', function (t) {
console.log(longWeekendCalculator(null, null));

    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);

    t.end();
});