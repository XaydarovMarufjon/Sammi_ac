import getArgs from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import {printError , printSuccess  , printHelp} from './services/log.services.js'
import { saveKeyValue  , TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async token => {
    if (!token.length) {
        return printError("Token yoq~");
    }
   try {
    await saveKeyValue(TOKEN_DICTIONARY.token , token);
    printSuccess("Token saqlandi")
   } catch (error) {
    printError(error.mesage)
   }
}

const startCLI = ()=>{
    const args = getArgs(process.argv)
    if (args.help) {
        printHelp()
    }
    if(args.save) {  // save city
    
    }
    if (args.t) {    // save token
       return saveToken(args.t)
    }
    getWeather("uzbekistan")
}

startCLI()










