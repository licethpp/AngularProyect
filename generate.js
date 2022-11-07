var faker = require('faker');
var database = { cheese: []};

for (var i = 1; i<= 300; i++) {
  database.database.push({
    id: i,
    naam: faker.naam(),
    soort: faker.soort(),
    smaak: faker.smaak(),
   
  });
}

console.log(JSON.stringify(database));