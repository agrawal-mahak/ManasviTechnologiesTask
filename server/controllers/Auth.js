const User = require("../models/User");


//signup
exports.signUp = async(req,res) => {
     try{
        //fetch data
        const{ 
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
        } = req.body;
        //validation
        if(!firstName || !lastName || !email || !password)
        {
        
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            })
        }

        //check pswd and cnfrm pswd
        if(password!== confirmPassword){
            return res.status(400).json({
                success: false,
                message:"Passwords do not match",
            });
        }

        //check user alredy exist
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:'User is already',
            });
        }
            //hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            //entry in db
            const user = await User.create({
                firstName,
                lastName,
                email,
                password,
                accountType,
            })
           //return res
           return res.status(200).json({
            success: true,
            message:"User is registered successfully",
            user,
           }) ;
        
     }
     catch(error){
        console.log(error);
      return  res.status(500).json({
            success:false,
            message:"User cannot be registered. Please try again",
        })

     }
}


//Log in

exports.login = async(req, res) => {
    try{
        //get data from body
        const {email, password} = req.body;
        //validation data
        if(!email || !password) {
            return res.status(403).json({
                success:false,
                message:"All fiels are required",
            });
        }
        //check user exist or not
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success: false,
                message:"User not registered please signup",
            });
        }
         
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login failure , please try again'
        })
    }
}

