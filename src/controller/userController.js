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
      const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(200).send("Usuário atualizado:" + user);
    } catch (error) {
      res.status(500).send("Erro em atualizar usuário!");
    }
  }

  static async updateItemUser(req, res) { //put item user
    const { email, currentPassword, newPassword } = req.body;

    try {
      const user = await User.findById(req.params.id);

      if (email) {
        const existingEmail = await User.findOne({ email });

        if (existingEmail && existingEmail.id.toString() !== user.id) {
          return res.status(500).send("Já possui um usuário com este e-mail!");
        }

        await User.findByIdAndUpdate(user, { email });
      }

      res.status(200).send("Usuário atualizado:" + user);
    } catch (error) {
      res.status(500).send("Erro em atualizar usuário!");
    }
  }

  static async deleteUser(req, res) { //delete user
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.status(200).send("Usuário deletado!");
    } catch (error) {
      res.status(500).send("Erro em deletar usuário!");
    }
  }
}

export default UserController;
