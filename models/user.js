const { Schema, model } = require("mongoose");

/**
 {
     name:string
     email:string
     password:string
     avatar:string
     role:string
     status:number
     google:boolean
 }
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Usuario requerido"],
  },
  email: {
    type: String,
    required: [true, "Correo requerido"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Usuario requerido"],
  },
  avatar: {
    type: String,
    default:
      "https://drive.google.com/file/d/1fLuHSu9uK8_W6sG-tOv5GWJlHLgQSP9B/view?usp=sharing",
  },
  role: {
    type: String,
    required: [true, "Identificar tipo de usuario"],
    default: "USER_ROLE",
    // enum: ["USER_ROLE", "ADMIN_ROLE"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

//metodos personalizados
userSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

module.exports = model("User", userSchema);
