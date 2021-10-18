// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, arrayIndex, newPresetArray) => {
    //presets = presets[arrayIndex];
    let response = []
    if (arrayIndex > presets.length || arrayIndex < 0) {
        response[0] = 404;
    } else if ((requestType === 'GET') || (requestType === 'PUT')){
        response[0] = 200;
    } else if ((requestType !== 'GET') || (requestType !== 'PUT')){
        response[0] = 400;
    }
    if (requestType === 'GET') {
        response[1] = presets[arrayIndex];
    } else if (requestType === 'PUT') {
        presets[arrayIndex] = newPresetArray;
        response[1] = presets[arrayIndex];
    }
    return response;
};


// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
