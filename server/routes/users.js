import express from "express"
import expressPR from "express-promise-router"
import db from "../db/index.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// const db = require('../db')
const router = express.Router();

//Get all users
router.get("/", verifyAdmin, async (req, res) => {
    try {
        const users = await db.query("select * from hotels.user");
        console.log(users);
        res.status(200).json({
            status : "success",
            results : users.rows.length,
            data : {
                users : users.rows  
            }
        })
    } catch (error) {
        console.log(error)
    }
    
});

// //check authentication
// router.get("/checkauthentication", verifyToken, async (req, res, next) => {
//     res.send("You are logged in")
// });

// router.get("/checkuser/:id", verifyUser, async (req, res, next) => {
//     res.send("You are logged in and you can delete your account")
// });

// router.get("/checkadmin/:id", verifyAdmin, async (req, res, next) => {
//     res.send("You are an admin, you can delete all accounts")
// });

//Get a specific user
router.get("/:id", async (req, res) => {
    try {
        //parametrized query
        const user = await db.query("select * from hotels.user where id = $1", [req.params.id]);
        console.log(user.rows[0]);

        res.status(200).json({
            status : "success",
            results : user.rows.length,
            user : {
                user : user.rows [0] 
            }
        })
    } catch (error) {
        console.log(error)
    }
    
});

//UPDATE a user
router.put("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);

        //parametrized query
        // you can't change the chainId, and number of rooms
        const user = await db.query(" UPDATE hotels.user SET username = $1, email = $2, password = $3, isemployee = $4 where id = $5 returning *", 
        [req.body.username, req.body.email, req.body.password, req.body.isemployee, req.params.id]);
     
        if(user.rows.length == 0 ){
            console.log("user not found")
        }

        res.status(201).json({
            status : "success",
            results : user.rows.length,
            data : {
                user : user.rows[0] 
            }
        })
    } catch (error) {
        console.log(error)
    }
});

//DELETE a user
router.delete("/:id",  async (req, res) => {

    console.log(req.params.id);
    
    try {
        const user = await db.query("DELETE FROM hotels.user where id = $1", [req.params.id]);
        console.log(user);
        res.status(204).json({
            status : "success"
        })
    } catch (error) {
        console.log(error)
    }

   
});


export default router
