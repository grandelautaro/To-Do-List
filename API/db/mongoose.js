//mongodb connection logic

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(() => {
    console.log("Connected to mongoDB")
}).catch((e) => {
    console.log("Error while attempting to connecte to mongoDB");
    console.log(e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports ={
    mongoose
};