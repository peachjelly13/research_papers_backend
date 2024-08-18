import { createLogger, format, transports } from "winston";
const {combine,timestamp,json,colorize} = format;

// custom format for console logging 

const consoleLogFormat = format.combine(
    format.colorize(),
    format.printf(({level,message,timestamp})=>{
        return `${level}:${timestamp}`
    })
);

const logger = new createLogger({
    level:"info",
    format:combine(
        colorize(),
        timestamp(),
        json()
    ),
    transports: [
        new transports.File({
             level: 'info',
             dirname: 'logs',
             json: true,
             handleExceptions: true,
             filename: `combined.log`
         }),
         new transports.Console({format:consoleLogFormat})
     ], exitOnError: false
});


export default logger;