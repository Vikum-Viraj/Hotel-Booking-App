import express from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/:hotelid",verifyAdmin,createRoom);

//UPDATE
router.put("/:id",verifyAdmin,updateRoom);

//DELETE
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//DELETE
router.get("/",getRooms)

//GET One
router.get("/:id",getRoom);


export default router;