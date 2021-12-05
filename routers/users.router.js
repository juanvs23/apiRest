const { check } = require("express-validator");
const { checkId, checkRole } = require("../helpers/check-role");

const UsersController = require("../controllers/usersController"),
  { validateFields, checkUser } = require("../middleware/validate-fields");
const usersController = new UsersController();
class Users {
  constructor(router) {
    this.router = router;
  }
  userList() {
    const passrwordLength = 6;
    this.router.get(
      "/list",

      usersController.getListUser
    );
    this.router.post(
      "/new",
      [
        check("email", "Formato de correo invalido").isEmail(),
        checkUser,
        check("name", "El nombre no puede estar vacio").not().isEmpty(),
        check(
          "password",
          `La constraseña debe tener al menos ${passrwordLength} caracteres`
        ).isLength({ min: passrwordLength }),
        check("role", "El tipo de usuario no existe").custom(checkRole),
        validateFields,
      ],
      usersController.newUser
    );
    this.router.put(
      "/update/:id",
      [
        check("id", "No es un id valido").isMongoId(),
        check("id", "El id no existe").custom(checkId),
        validateFields,
      ],
      usersController.updateUser
    );
    this.router.delete(
      "/delete/:id",
      [
        check("id", "No es un id valido").isMongoId(),
        check("id", "El id no existe").custom(checkId),
        check(
          "validate",
          `La constraseña debe tener al menos ${passrwordLength} caracteres`
        ).isLength({ min: passrwordLength }),
        validateFields,
      ],
      usersController.deleteUser
    );
  }
}
module.exports = Users;
