import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next) => {

    res.send("Hello user, You are Logged In");
})

//User
router.get("/checkuser/:id",verifyUser,(req,res,next) => {

    res.send("Hello user, You logged In, You can delete account");
})


//Admin
router.get("/checkadmin/:id",verifyAdmin,(req,res,next) => {

    res.send("Hello admin, You logged In, You can delete all account");
})


router.get("/:id",verifyUser,getUser);
router.post("/",createUser);
router.put("/:id",verifyUser,updateUser);
router.get("/",verifyAdmin,getUsers);
router.delete("/:id",verifyUser,deleteUser);


export default router;