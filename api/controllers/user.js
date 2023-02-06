import User from "../models/User.js";

//CREATE
export const createUser = async(req,res,next) => {
    const newUser = new User(req.body);

    try{

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    }catch(err){
        
      res.status(500).json(err);

    }
}


//GETONE
export const getUser = async(req,res,next) => {

    try{

        const user = await User.findById(
           req.params.id
        );
       res.status(200).json(user);

   }catch(err){
       
     res.status(500).json(err);

   }
}


//GETALL
export const getUsers = async(req,res,next) => {
    
    try{

        const users = await User.find();
        res.status(200).json(users);

    }catch(err){
        
     next(err);

    }
}



//UPDATEUser
export const updateUser = async(req,res,next) => {
    try{

        const updatedUser = await User.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true});
        res.status(200).json(updatedUser);

    }catch(err){
        
      res.status(500).json(err);

    }

}



//DELETEUser
export const deleteUser = async(req,res,next) => {

    
    try{

    await user.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfull");

   }catch(err){
       
     res.status(500).json(err);

   }

}