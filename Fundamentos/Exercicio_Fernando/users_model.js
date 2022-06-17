

var { users } = require('./db');

const fs = require('fs');

const getUsers = () => {
    met = fs.readFile('C:/aa.json', (err, data) => {  
        if(err) throw err;
        
        return JSON.parse(data);
    });

    console.dir(met, 2);
};

const getUserByID = (id) => {
    fs.readFile('C:/aa.json', (err, data) => {
        if(err) throw err;
        let users = JSON.parse(data);
        let search = { };
        for (let i = 0; i < users.length ;i++) {
            if(users[i].id === id ) {
                search = users[i];
            };
            
        };
        console.log("\n")
        console.log(search)
        return search;
       
    })
};

const getAdultUsers = () => {

    fs.readFile('C:/aa.json', (err, data) => {
        if(err) throw err;
        let users = JSON.parse(data);
        let getAdults = [];

    for (let i = 0; i < users.length; i++) {
        if(users[i].age >= 18){
            getAdults.push(users[i])
        };  
        
    }
    console.log("\n")
    console.log(getAdults);
    return getAdults;

     
    })
};

module.exports = { getUsers , getUserByID, getAdultUsers };

