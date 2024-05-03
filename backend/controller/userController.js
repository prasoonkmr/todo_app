import User from "../model/User.js";

const saveUser = async (req, res) => {
  const { name, email, username, password, picture } = req.body;
  const userData = { name, email, username, password, picture };
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      const newUser = await User.create(userData);
      res.status(200).json(newUser);
    } else {
      res.json(`${username} already exists..!`);
    }
  } catch (error) {
    res.json(error);
  }
};

// const fetchUser = async (req, res) => {
//   try {
//     const allUsers = await User.find();
//     res.json(allUsers);
//   } catch (error) {
//     res.json(error);
//   }
// };

const updateUser = async (req, res) => {
  const { id, name, email, password, picture } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
        picture,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.body.id });
    res.json({ delete_user: `user deleted..!` });
  } catch (error) {
    res.json({ delete_user: `error --> ${error}` });
  }
};

export { saveUser, deleteUser, updateUser };
