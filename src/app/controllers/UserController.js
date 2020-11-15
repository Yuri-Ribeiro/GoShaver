import User from '../models/User';

class UserController {
  async store(req, res) {
    const newUser = req.body;
    const userExists = await User.findOne({ where: { email: newUser.email } });

    if (userExists)
      return res.status(400).json({ error: 'User alrealdy exists.' });

    const { id, name, email, provider } = await User.create(newUser);

    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    const updatedUser = req.body;
    const { email, oldPassword } = updatedUser;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists)
        return res.status(401).json({ error: 'Email alrealdy registered.' });
    }

    if (oldPassword && !(await user.checkPassword(oldPassword)))
      return res.status(401).json({ error: 'Password does not match.' });

    const { id, name, provider } = await user.update(updatedUser);

    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
