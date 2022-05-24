// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const SECRET_KEY =
//   "asdfasdfasfasgsgasdgsgasdggfsdfasddfjlasdhfasdhfkjlashfkjhasf";

// const Authenticate = async (req, res, next) => {
//   try {
//     // const token = req.cookies.jwtoken;
//     const token = req.headers.token;
//     const verifyToken = jwt.verify(token, SECRET_KEY);

//     const rootUser = await User.findOne({
//       _id: verifyToken._id,
//       "tokens.token": token,
//     });

//     // const { email, password } = User.findOne({email:});

//     // if (!email || !password) {
//     //   return res.status(400).json({ error: "Invalid data" });
//     // }

//     // const rootUser = await User.findOne({ email: email });

//     if (!rootUser) {
//       throw new Error("User not found");
//     }

//     req.token = token;
//     req.rootUser = rootUser;
//     req.userID = rootUser._id;
//     next();
//   } catch (err) {
//     res.status(401).send("Unauthorised: No token provided");
//     console.log(err);
//   }
// };

// module.exports = Authenticate;
