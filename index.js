const faker = require('faker');

const a = new Array(50).fill(null)
    .map(e =>
        e = faker.fake("{{name.firstName}} {{name.lastName}}"))
require('fs').writeFile('random_names.json', JSON.stringify(a), function(err) {
    if(err)
        throw err;
    console.log('complete');
});