import User from "../model/User.js";

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const loginInfo = await User.findOne({ username });
    if (!loginInfo) {
      console.log(`user not found`);
      res.json({ login_msg: `User not found` });
    } else if (password !== loginInfo.password) {
      res.json({ login_msg: `Wrong password` });
    } else {
      res.json(loginInfo);
    }
  } catch (error) {
    res.json({ login_error: error });
  }
};

export { loginUser };
