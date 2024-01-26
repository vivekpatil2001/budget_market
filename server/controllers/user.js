import User from "../models/User.js";

const signUpUser = async (req, res) => {

    const { name, email, password, mobile, gender, address } = req.body;
    try {

        const user = new User({
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            gender: gender,
            address: address

        })

        const savedUser = await user.save();

        res.json({
            success: true,
            message: "User SignUp Succesfully",
            data: savedUser
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
}


//-------------------------------------------------------------------------------------------------------//

const loginUser = async (req, res) => {

    const { email, password } = req.body;


    if (!email || !password) {
        return res.json({
            success: false,
            message: "invalid credential"
        });
    };

    const user = await User.findOne({
        email: email,
        password: password
    }).select("name email mobile");



    if (user) {
        return res.json({
            success: true,
            data: user,
            message: "successfully login user"
       
        });
    } else {
        return res.json({
            success: false,
            message: "invalid credential"
        });
    }
}

export {signUpUser, loginUser}