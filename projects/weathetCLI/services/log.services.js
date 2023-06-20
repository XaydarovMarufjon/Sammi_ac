import chalk from "chalk"; /// ranglar uchun kutubxona
import dedent from 'dedent-js' // console da kodlar chiroyli chiqishi uchun

const printError = (error) =>{
    console.log(chalk.bgRed( "ERROR" ) + ' ' + error);
}

const printSuccess = (message) =>{
    console.log(chalk.bgGreen( "SUCCESS" ) + ' ' + message);
}


const printHelp = (message) =>{
    console.log( dedent`
     
    ===================== ${chalk.bgCyan(" HELP ")} =====================

     ${chalk.yellow('-save')}  [CITY] Shahar nomini kiriting
     ${chalk.green('-help')}  Yordam oling
     ${chalk.cyanBright('-t')}     [API_TOKEN] Token saqlash
    `);
}



export  {  printError , printSuccess , printHelp}

