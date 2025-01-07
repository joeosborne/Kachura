const mongoose = require('mongoose');
//const config = require('config');
//const db = 'mongodb+srv://joeposbornehotmailcom:C0xci0q9Q3ibcMRt@sandboxcluster.rpwix.mongodb.net/';//config.get('mongoURI');
const db = 'mongodb+srv://joeposbornehotmailcom:C0xci0q9Q3ibcMRt@sandboxcluster.rpwix.mongodb.net/sample_mflix';

const connectDB = async () => {
  try {
 await mongoose.connect(db);
    // await mongoose.connect(db, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
