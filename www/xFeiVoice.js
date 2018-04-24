var exec = require('cordova/exec');

exports.record = function (arg0, success, error) {
    exec(success, error, 'xFeiVoice', 'record', [arg0]);
};
