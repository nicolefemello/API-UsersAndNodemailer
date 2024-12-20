import User from "../model/user.js";

class UserController {
  static async createUser(req, res) { //post user
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(201).send("Usuário cadastrado:" + user);
    } catch (error) {
      res.status(500).send("Erro em criar usuário!");
    }
  }

  static async showUsers(req, res) { //get users
    try {
      const users = await User.find();

      res.status(200).send("Usuários encontrados:" + users);
    } catch (error) {
      res.status(500).send("Erro em encontrar usuários!");
    }
  }

  static async updateUser(req, res) { //put user
    try {
      const user = await User.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      res.status(200).send("Usuário atualizado:" + user);
    } catch (error) {
        res.status(500).send("Erro em atualizar usuário!");
    }
  }
}
