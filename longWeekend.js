function longWeekendCalculator(inputData, configs){
    let combinations = null; // output

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
                 message: Take 1 day off on 'yyyy-mm-dd' and enjoy 4 days off.
                 combination: [ 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'} 
                    ]
                },
                {  // 2nd combination
                 message: Take 1 day off on 'yyyy-mm-dd' and enjoy 4 days off.
                 combination: [ 
                     { date: 'yyyy-mm-dd'}, 
                     { date: 'yyyy-mm-dd'} 
                    ]
                } 
                ...
            ]
    */



}