const fetch = require("node-fetch");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.facebookLogin = (req, res, next) => {
  const { userID, accessToken } = req.body;

  let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
  fetch(urlGraphFacebook, {
    method: "GET"
  })
    .then(res => res.json())
    .then(async response => {
      const { email, name } = response;
      let user;
      try {
        user = await User.findOne({ email });
      } catch (error) {
        return res.status(500).json({ msg: "Uh Oh! Server error!" });
      }

      if (user) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d"
        });
        const { _id, name, email } = user;

        res.status(200).json({
          token,
          user: {
            _id,
            name,
            email
          }
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const password = email + process.env.JWT_SECRET_KEY;
        let hashedPassword;
        try {
          hashedPassword = await bcrypt.hash(password, salt);
          console.log(hashedPassword);
        } catch (error) {
          console.error(error.message);
        }

        let newUser = new User({ name, email, password: hashedPassword });
        try {
          const savedUser = await newUser.save();
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
          );
          const { _id, name, email } = savedUser;

          res.status(200).json({
            token,
            user: {
              _id,
              name,
              email
            }
          });
        } catch (error) {}
      }
    });
};

exports.getUserInfo = async (req, res, next) => {
  const { _id, name } = req.user;
  return res.status(200).json({
    userId: _id,
    name
  });
};
