const events = require('events');
const updater = new events.EventEmitter();
module.exports.updater = updater;
const storedData = require('../../database');
module.exports.updateData = function updateData(dataIn){
    let groups = Object.keys(dataIn);
    groups.forEach((i) => {
        let sensors = Object.keys(dataIn[i]);
        // console.log(i);
        sensors.forEach((sensor) =>{
            input = dataIn[i][sensor];
            target = storedData[i][sensor];
            target.push(input);
        });
    });
    updater.emit('updateData');
}