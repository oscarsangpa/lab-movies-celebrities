//  Add your code here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    occupation: {
      type: String,
      default: 'unknown'
    },
    catchPhrase: {
      type: String,
      required: [true, 'CatchPhrase is required'],
    }
  },
  { timestamps: true },
);

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
