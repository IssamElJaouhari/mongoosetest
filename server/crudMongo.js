require("dotenv").config()
const mongoose = require("mongoose")

const url_db = process.env.DATA_BASE_URL


mongoose.connect(url_db,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });


  //schema of our collection
  const schemaPerson = new mongoose.Schema(
    {
        name:{
            type: String, 
            required: true
        },
        age:Number,
        favoriteFoods:[String]
    }
  );

const Person = mongoose.model('Person', schemaPerson)


const createPerson = (done) =>{
    const person = new Person({
        name:"Issam",
        age:30,
        favoriteFoods:["rfissa", "briwa", "toplexil","water"]
    })
    person.save((req, res)=>{
        if (err) return done(err)
            done(null, data)
    })
}
//create many  records with model.create , we use peson because person it hold the  [mongoose.model]
const createManyPeople = (arrayOfppl,done)=>{
    Person.create(arrayOfppl,(err, data)=>{
        if(err) return done(err)
            done(null, data)
    })
}

const findPeopleByNam = (namePerson,done)=>{
    Person.find({name:namePerson},(err, data)=>{
        if(err) return done(err)
            done(null, data)
    })
}

const findPersonByFood= (food,done)=>{
    Person.findOne({favoriteFoods:food},(err, data)=>{
        if(err) return done(err)
            done(null, data)
    })
}

const findPersonById= (personId,done)=>{
    Person.findById(personId,(err, data)=>{
        if(err) return done(err)
            done(null, data)
    })
}
const findandEditandSave= (personId,done)=>{
    Person.findById(personId,(err, person)=>{
        if(err) return done(err)
            person.favoriteFoods.push("dolipran")
        person.markModified('favoriteFoods')
        person.save((err, updatePerson)=>{
            if(err) return done(err)
                done(null,updatePerson)
        })
    })
}


const findandandUpdate= (personName,done)=>{
Person.findByIdAndUpdate(
    {name:personName},
    {name:20},
    {new:true},
    (err, data)=>{
        if(err) return done(err)
            done(null,data)
    })
}


const removeByID =(personId, done)=>{
    Person.findByIdAndDelete(personId, (err, data)=>{
        if(err) return done(err)
            done(null,data)
    })
}

const removeManyperson = (done)=>{
    Person.deleteMany({name:"jhon"}, (err, data)=>{
        if(err) return done(err)
            done(null,data)
    })
}

// ....to be continued