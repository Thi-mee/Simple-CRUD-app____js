// write your code here
const { data } = require('./data.js')
const express = require ('express');
const port = 8080;
const app = express();


app.use(express.json());



// READ for 'R' in CRUD
app.get('/', function(req, res) {

    res.status(200).json(data)
});
app.get('/:id', (req, res) => {

    let id = req.params.id;
    data.forEach(item => {
        if(item.id == parseInt(id)){
            res.status(200).json(item)
        }
    });
});


//Create for 'C' in CRUD
app.post('/', (req, res) => {

    let newCourse = req.body;
    res.json({
        newCourse,
        success: "New course added successfully"
    })
});

// Update for 'U' in CRUD
app.put('/:id', (req, res) => {

    let id = req.params.id
    let status = req.body.status
    //update course enrollment status
    data.forEach(item => {
        if(item.id == id){
            let index = data.indexOf(item)
            item.status = status;
            res.json({
                item,
                message: `status of Item with id ${index + 1} updated successfully`
            })
        }
    })
});


// Delete for 'D' in CRUD
app.delete('/:id', (req, res) => {

    let id = req.params.id;
    data.forEach(item => {
        if(item.id == id){
            let index = data.indexOf(item)
            data.splice(index, 1)
            res.status(200).json(`Item with id ${index + 1} deleted successfully`)
        }
    })
})



// default URL to API
app.use('/', function(req, res){
    res.statusCode = 200;
    res.send('The API works :-)');
});



app.listen(port, () => {
    console.log(`CRUD app listening on port ${port}`)
})