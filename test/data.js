const { data } = require('../src/data')


let id = '1';
data.forEach(item => {
    if(item.id == parseInt(id)){
        console.log("I am perfectly working");
    }
});