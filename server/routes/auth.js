import express from "express"
import db from "../db/index.js"
import jwt from "jsonwebtoken"

//who can login to the app

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        console.log(req.body)

        //parametrized querycd
        const newUser = await db.query("INSERT INTO hotels.user (username, email, password, isEmployee) VALUES ($1,$2,$3,$4) returning *", 
        [req.body.username, req.body.email, req.body.password, req.body.is_employee]);

        res.status(201).json({
            status : "success",
            newUser : newUser.rows.length,
            data : {
                user : newUser.rows[0] 
            }
        })
    } catch (error) {
        console.log(error)
    }

});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        // console.log(req.body)

        //parametrized querycd
        const user = await db.query("Select * from hotels.user where username = $1 and password = $2 LIMIT 1", 
        [req.body.username, req.body.password]);

        if(user == null){
            console.log("User not found")
        }
        
        const token = jwt.sign({
            id: user.rows[0].id,
            isAdmin: user.rows[0].is_employee
        }, "debs")

        res.cookie("access_token", token,{
            httpOnly: true
        }).status(201).json({
            status : "success",
            user : user.rows.length,
            data : {
                user : user.rows[0] 
            }
        })
    } catch (error) {
        console.log(error)
    }

});

export default router
