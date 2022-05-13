/// <reference types="cypress" />


/**
 * @type {Cypress.PluginConfig}
 */

 const sqlite3 = require("sqlite3");
 const path = 'C:/Users/fgabriel/AppData/Roaming/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db'
 function queryTestDb(sql){
 let db = new sqlite3.Database(path)
   return new Promise((resolve, reject) => { 
       db.all(sql, (error, results) => {
       if(error) reject(error)
       else{
         db.close()
         return resolve(results);
       }
       }) 
     });
 }
   
 
 
 module.exports = (on, config) => {
   on("task", {
     queryDb: (query) => {
       return queryTestDb(query, config);
     }
   });
 };
