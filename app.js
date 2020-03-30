const express = require('express');
const app = express();

app.use("/api/stuff", (req, res, next)=>{
    const stuff = [
        {
        _id: "myID",
  title: "my first stuff",
  description: "description of my first stufff",
  imageUrl: '',
  price: 12346423,
  userId: 'myUserID',
    },
   {
        _id: "my2ID",
  title: "my Second stuff",
  description: "descripion of my 2nd stufff",
  imageUrl: '',
  price: 1423,
  userId: 'my2ndUserID',
    }
];
res.status(200).json(stuff);
});
next();


module.exports = app;