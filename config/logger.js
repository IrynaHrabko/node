const levels = [
    'Emergency',
    'Alert',
    'Critical',
    'Error',  // prod
    'Warning',
    'Notice',  // dev
    'Informational',
    'Debug'   // local
];

const availableLevel = {
    Critical: "Critical",
    Warning: "Warning",
    Debug: "Debug"
};

const logger = (level, arg) => {
    const env = process.env['APP_ENV'];

    if (!levels.includes(level))
        throw new Error('invalid log level');

    if (env === 'prod' && levels.indexOf(level) > 3)
        return;

    if (env === 'dev' && levels.indexOf(level) > 5)
        return;

    if (arg instanceof Error) {
        const stack = arg.stack.split('\n');
        const location = stack[1].trim();
        console.log(`Log level: ${level}, message: ${arg.message}, location: ${location}`);
    } else {
        console.log(`Log level: ${level}, message: ${arg}`);
    }
};

const criticalLog = (msg) => {
    logger(availableLevel.Critical, msg);
};

const warningLog = (msg) => {
    logger(availableLevel.Warning, msg);
};

const debugLog = (msg) => {
    logger(availableLevel.Debug, msg);
};

module.exports = {
    criticalLog,
    warningLog,
    debugLog
};
