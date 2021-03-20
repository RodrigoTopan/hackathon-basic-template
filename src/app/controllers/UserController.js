import userService from "@services/UserService";

class UserController {
    async store(req, res) {
        const createdUser = await userService.store({
            username: req.body.username,
            password: req.body.password,
        });
        return res.json(createdUser);
    }
}

export default new UserController();
