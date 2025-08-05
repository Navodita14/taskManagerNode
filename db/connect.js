const mongoose = require('mongoose');

const connectDB= (url)=>{
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    w: "majority",
    wtimeout: 5000
  }
})
}

module.exports= connectDB
