const faker = require('faker');
const fs = require('fs');

const names = new Array(50).fill(null).map(e => e = faker.fake("{{name.firstName}} {{name.lastName}}"))
fs.writeFile('random_names.json', JSON.stringify(names), function(err) {
    if(err)
        throw err;
    console.log('complete');
});