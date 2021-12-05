const { Schema, model } = require("mongoose");

const roleSchema = new Schema({
  role: {
    type: String,
    required: [true, "Identificar tipo de usuario"],
  },
});
module.exports = model("Role", roleSchema);
