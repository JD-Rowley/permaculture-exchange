const { Schema } = require('mongoose');

const fileSchema = new Schema(
  {
    filename: {
      type: String
    },
    mimetype: {
      type: String
    },
    encoding: {
      type: String
    },
    url: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = fileSchema;