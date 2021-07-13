const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'First Period is end',
                text: 'HEllo'
            })
        }, 2000)
    }
}

module.exports = School;