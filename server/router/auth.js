// const express = require("express");
// const router = express.Router();
// const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const authenticate = require("../middleware/authenticate");
// // const cookieParser = require("cookie-parser");
// // router.use(cookieParser);

// require("../db/conn");
// const User = require("../models/user");

// // const authenticate = (req, res, next) => {
// //   console.log("hello middleware");
// //   next();
// // };

// let Login = false;

// if (Login) {
//   router.get("/", authenticate, (req, res) => {
//     console.log("hello form /");
//     res.send("home");
//   });

//   // About page :- User Details
//   router.get("/about", authenticate, (req, res) => {
//     console.log("About");
//     // res.send(req.rootUser);
//     res.send(rootUser);
//   });
// }

// //Register
// router.post("/register", async (req, res) => {
//   const { name, email, phone, password, cpassword } = req.body;

//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({ error: "Please fill the required fields" });
//   }

//   // Checking user exist or not in database
//   // If user user exist then return error on the basis of email
//   // Other wise register new user
//   try {
//     const userExist = await User.findOne({ email: email });

//     if (userExist) {
//       return res
//         .status(422)
//         .json({ error: "Email or Phonenumber already Exist" });
//     } else if (password !== cpassword) {
//       return res.status(422).json({ error: "Password incorrect" });
//     } else {
//       const user = new User({ name, email, phone, password, cpassword });

//       await user.save();

//       res.status(201).json({ message: "User Registered Successfully" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
//   console.log("hello from /register");
// });

// //Login
// router.post("/login", async (req, res) => {
//   try {
//     let token;
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Invalid data" });
//     }

//     userLogin = await User.findOne({ email: email });

//     // If user exist then go to next line and check password with given email or not
//     if (userLogin) {
//       // Compare password with already given password by compareing it using bcryptjs
//       const isMatch = await bcryptjs.compare(password, userLogin.password);

//       // token = await userLogin.generateAuthToken();

//       // res.cookie("jwtoken", token, {
//       //   expires: new Date(Date.now() + 432000000),
//       //   httpOnly: true,
//       // });

//       if (!isMatch) {
//         res.status(400).json({ error: "Invalid Credentials" });
//       } else {
//         res.json({ message: "SignIn Successfully" });
//         Login = true;
//       }
//     } else {
//       res.status(400).json({ error: "Invalid Credentials" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
//   console.log("hello from /login");
// });

// // router.get("/admin", (req, res) => {
// //   res.send("Admin Portal!");
// // });

// // router.post("/user/:userId", middleware, (req, res) => {
// //   res.send("Post request User Portal!");
// // });

// // router.get("/user/:userId", middleware, (req, res) => {
// //   const { userId } = req.params;
// //   res.send(`User portal user details ${userId}`);
// // });

// // router.get("/search", (req, res) => {
// //   const { q } = req.query;
// //   if (!q) {
// //     res.send("Nothing found");
// //   }
// //   res.send(`Search details for ${q}`);
// // });

// // router.get("*", (req, res) => {
// //   res.send("404 Page not found");
// // });

// module.exports = router;

// Crerating new User Login Authencation Url using passportjs ot auth0 or bodyparser ot any other technique
