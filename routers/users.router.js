const UsersController = require("../controllers/usersController");
const usersController = new UsersController();
class Users {
  constructor(router) {
    this.router = router;
  }
  userList() {
    this.router.get("/list", usersController.getListUser);
    this.router.post("/new", usersController.newUser);
    this.router.put("/update/:id", usersController.updateUser);
    this.router.delete("/delete", usersController.deleteUser);
  }
}
module.exports = Users;
