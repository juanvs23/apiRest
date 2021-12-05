const RoleSchema = require("../models/role");
const User = require("../models/user");
const checkRole = async (role = "") => {
  const isRole = await RoleSchema.findOne({ role });
  if (!isRole) {
    throw new Error(`El rol: ${role}... no existe`);
  }
};
const checkId = async (id = "") => {
  const isId = await User.findById(id);
  if (!isId) {
    throw new Error(`El id: ${id}... no existe`);
  }
};

module.exports = {
  checkRole,
  checkId,
};
