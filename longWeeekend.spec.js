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

let inputData = [
    new Date('2018-01-01') // monday  
]

configs = {
    longWeekendStreak : 1, // number of days to be trarversed in left and right direction to check the long weekend combination
    weekends: 'Saturday,Sunday'   // days of weekend in that country/calendar
}

test('long weekend with sat, sunday, monday off and streak=1', (t)=> {

    let combinations = longWeekendCalculator(inputData, configs);

    console.log('combinations = \n', combinations);
    
    t.end();
});

test('long weekend with sat,sundays, tuesday off and streak=2', (t)=> {

    inputData = [
        new Date('2018-01-02'), // tues
    ];
    
    configs.longWeekendStreak = 2; // number of days to be trarversed in left and right direction to check the long weekend combination

    let combinations = longWeekendCalculator(inputData, configs);

    console.log('combinations = \n', combinations);

    t.end();
});

test('long weekend with sat,sundays, tuesday, thursday and next tuesday off and streak=2', (t)=> {

    inputData = [
        new Date('2018-01-02'), // tues
        new Date('2018-01-04'), // thurs   
        new Date('2018-01-09') // next tues
    ];
    
    configs.longWeekendStreak = 2; // number of days to be trarversed in left and right direction to check the long weekend combination

    let combinations = longWeekendCalculator(inputData, configs);
    
    console.log('combinations = \n', combinations);

    t.end();
});
