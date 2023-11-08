let connection;
 var oracledb = require('./oracledb');

 (async function() {
 try{
    connection = await oracledb.getConnection({
         user : 'isd',
         password : 'krypt0nit3',
         connectString : 'soltp-can01-dt.educ.gov.bc.ca:1521/oltpt.world'
    });
    console.log("Successfully connected to Oracle!")
 } catch(err) {
     console.log("Error: ", err);
   } finally {
     if (connection) {
       try {
         await connection.close();
       } catch(err) {
         console.log("Error when closing the database connection: ", err);
       }
     }
   }
 })()