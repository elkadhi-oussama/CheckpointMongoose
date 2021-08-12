let mongoose = require ("mongoose");
const Person = require ('./person/person')
mongoose
    .connect("mongodb://localhost:27017/person", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connect To DB .. "))
    .catch((err) => console.log(err));
//Create a person with this prototype
    const person = new Person({
        name: "Elkadhi Oussama",
        age: 28,
        favoriteFoods: ["Rouz", "Scalope" , "Ma9rouna Salsa"],
    });
    person.save(() => {
        console.log("Person Added succesfully !!!");
    });
//Create and Save a Record of a Model
    arrayOfPeople = [
        {
            name: "Abdsellam",
            age: 29,
            favoriteFoods: ["karous", "wrata","Pizza"],
        },
        {
            name: "Mohamed",
            age: 25,
            favoriteFoods: ["Pizza", "baguette"],
        },
        {
            name: "aboud",
            age: 20,
            favoriteFoods: ["kol chay yakla may9oulich la ", "yachrab kan 9azouz farnca"],
        },
    ];
//Create Many Records with model.create()
    Person.create(arrayOfPeople, (err, data) => {
        if (err) {
            console.log(err);
        } else console.log("Many Records Added Succefully:");
    });
//Use model.find() to Search Your Database
    Person.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else console.log(data);
    });
//Use model.findOne() to Return a Single Matching Document from Your Database   
    Person.findOne({ favoriteFoods: "Pizza" }, (err, data) => {
        if (err) {
            console.log(err);
        } else console.log(data);
    });
//Use model.findById() to Search Your Database By _id
    Person.findById({ _id: "611565ed63baee184cdaada6" }, (err, data) => {
        if (err) {
            console.log(err);
        } else console.log(data);
            
    });
//Perform Classic Updates by Running Find, Edit, then Save
    Person.findByIdAndUpdate(
        "61156a0b119ad42048530ca1",
        { $push: { favoriteFoods: "hamburger" } },
        (err, data) => {
            if (err) {
                console.log(err);
            } else console.log(data);
        }
    );
//Perform New Updates on a Document Using model.findOneAndUpdate()
    Person.findOneAndUpdate({ name: "aboud" }, { age: 20 }, (err, data) => {
        if (err) {
            console.log(err);
        } else console.log(data);
    });

//Delete One Document Using model.findByIdAndRemove
    Person.findByIdAndRemove("61156a0b119ad42048530ca1", (err, data) => {
        if (err) {
            console.log(err);
        } else console.log(data);
    });
//MongoDB and Mongoose - Delete Many Documents with model.remove()
    Person.deleteMany({ name: "Mary" }, (err, data) => {
        if (err) {
            console.log(err);
        } else console.log(data);
    });

//Chain Search Query Helpers to Narrow Search Results
    Person.find({ favoriteFoods: "Pizza" }) // find Person
    .limit(2) // limit to Two
    .sort({ name: 1 }) // sort ascending by name
    .select({ age: false }) // Make age hidden
    .exec((err, data) => {
        if (err) {
            console.log(err);
        } else console.log(data);
    });