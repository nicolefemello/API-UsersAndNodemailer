import UserController from '../controller/userController.js';

const userRoutesInit = (app) => {
    app.get("/users", UserController.showUsers);
    app.post("/users", UserController.createUser);
    app.put("/users/:id", UserController.updateUser);
    app.patch("/users/:id", UserController.updateItemUser);
    app.delete("/users/:id", UserController.deleteUser);
}

export default userRoutesInit;