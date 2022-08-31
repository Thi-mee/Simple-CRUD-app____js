const { data } = require('../src/data')




    let id = 1;
    let status = {
        "status" : "inactive",
    }
    //update course enrollment status
    data.forEach(item => {
        if(item.id == id){
            console.log("I am here")
            let index = data.indexOf(item)
            item.status = status;
            console.log(item.status)
        }
    })
