class UsersController {
  getListUser(req, res) {
    const query = req.query;
    res.status(200).json({
      users: [
        { name: "Luis Jose", query },
        { name: "Luis Jose", query },
        { name: "Luis Jose", query },
      ],
    });
  }
  newUser(req, res, next) {
    console.log(req.body);

    res.status(200).json({
      status: 200,
      data: "new user",
    });
  }
  updateUser(req, res, next) {
    console.log(req.params.id);
    res.status(200).json({
      status: 200,
      data: "updated",
    });
  }
  deleteUser(req, res, next) {
    res.status(200).json({
      status: 200,
      data: "delete",
    });
  }
}
module.exports = UsersController;
