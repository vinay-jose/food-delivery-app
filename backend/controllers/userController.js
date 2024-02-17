const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/Users")

const userRegister = async (req, res) => {
    const { name, email, password, cnf_password} = req.body

    if (password !== cnf_password) return res.status(500).send("Passwords do not match!")
    
    const existing_user = await User.findOne({"email": email})

    if (existing_user) return res.status(500).send("Account already exists!")

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    const savedUser = newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, "randomsecret");
    return res.status(200).json({
      user: newUser,
      token: token,
    });
}

const userLogin = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    const user = await User.findOne({"email": email})

    if (!user) return res.status(500).json({success: false, message: "User not found!"})

    const hashPassword = user.password

    const match = await bcrypt.compare(password, hashPassword)
    if (match) {
        const token = jwt.sign({ userId: user._id }, "randomsecret")
        return res.status(200).json({
        user: user,
        token: token,
        })
    } else {
        return res.status(400).json({success: false, message: 'passwords do not match'})
    }
    
}

module.exports = { userRegister, userLogin }