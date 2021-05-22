const Cron = require('node-cron')

/*
|--------------------------------------------------------------------------
| Scheduler
|--------------------------------------------------------------------------
|
| Here we setup the sceduled functionality. Using the 'schedule'
| functionality we can define functionality that will be executed based
| on the crontab expression that you define
|
*/

module.exports = class Scheduler {
    constructor () {
        this.cron = Cron
    }

    boot () {
        this.cron.schedule('* * * * *', () => {
            console.log('Example Scheduled Event')
        })
    }
}
