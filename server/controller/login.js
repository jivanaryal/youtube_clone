const jwt = require("jsonwebtoken");
const LOGIN = require("../model/login");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
function generateAccessToken(email) {
  const token = jwt.sign({ email }, process.env.SECRET_KEY);
  return token;
}
exports.RegisterLoginController = async (req, res, err) => {
  try {
    const { email, fullname, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const LoginModel = new LOGIN(email, fullname, hash);
    const createRecord = await LoginModel.createRegister();

    if (createRecord.length >= 1) {
      const token = generateAccessToken({ user: createRecord });

      res.status(200).json({
        err: false,
        user: createRecord,
        msg: "register db created succesfully",
        token,
      });
    } else {
      res.status(401).json({
        err: true,
        msg: "Email or password mismatch",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.getLoginController = async (req, res, err) => {
  try {
    const [user] = await LOGIN.findAll();
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
exports.deleteLoginController = async (req, res, err) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const LoginModel = await LOGIN.deleteUser(id);
    return res.status(200).json({
      LoginModel,
      msg: "Register/Login details deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.userLoginController = async (req, res, err) => {
  try {
    const { email, password } = req.body;
    const [user] = await LOGIN.findUser(email);
    console.log(user);
    if (user.length >= 1) {
      const matched = await bcrypt.compare(password, user[0].password);
      if (matched) {
        const token = generateAccessToken(user[0]);
        res.cookie("token", token);
        return res.status(200).json({
          msg: "you have login successfully",
          user,
          token,
        });
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: "email or password does not matched" }] });
      }
    } else {
      return res.status(404).json({ errors: [{ msg: "email not found" }] });
    }
  } catch (error) {
    err(error);
  }
};
exports.verifyUser = async (re1, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "you are not authenticated" });
  } else {
    jwt.verify(token, process.env.SECRET_KEY);
  }
};
