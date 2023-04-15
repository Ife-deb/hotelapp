import express from "express"
import expressPR from "express-promise-router"
import db from "../db/index.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


// const db = require('../db')
const router = express.Router();

//Get all hotels
router.get("/", async (req, res) => {
    try {
        const results = await db.query("select * from hotels.hotel");
        console.log(results);
        res.status(200).json({
            status : "success",
            results : results.rows.length,
            data : {
                hotels : results.rows  
            }
        })
    } catch (error) {
        console.log(error)
    }
    
});

//Get a specific hotel
router.get("/:id", async (req, res) => {
    try {
        //parametrized query
        const results = await db.query("select * from hotels.hotel where id = $1", [req.params.id]);
        console.log(results.rows[0]);

        res.status(200).json({
            status : "success",
            results : results.rows.length,
            data : {
                hotels : results.rows [0] 
            }
        })
    } catch (error) {
        console.log(error)
    }
    
});

//CREATE a hotel
router.post("/", async (req, res) => {
    try {
        console.log(req.body)

        //parametrized query
        const results = await db.query(" INSERT INTO hotels.hotel (name, address, email, phone_number, rating, chain_id, number_of_rooms, cheapest_room, rooms) VALUES ($1,$2,$3,$4,$5,$6,$7,$8, $9) returning *", 
        [req.body.name, req.body.address, req.body.email, req.body.phone_number, req.body.rating, req.body.chain_id, 5, req.body.cheapest_room, []]);
        
        res.status(201).json({
            status : "success",
            results : results.rows.length,
            data : {
                hotel : results.rows[0] 
            }
        })
    } catch (error) {
        console.log(error)
    }

});

//UPDATE a hotel
router.put("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);

        //parametrized query
        // you can't change the chainId, and number of rooms
        const results = await db.query(" UPDATE hotels.hotel SET name = $1, address = $2, email = $3, phone_number = $4, rating = $5, cheapest_room = $6 , rooms = $7 where id = $8 returning *", 
        [req.body.name, req.body.address, req.body.email, req.body.phone_number, req.body.rating, req.body.cheapest_room, req.body.rooms, req.params.id]);
        
        res.status(201).json({
            status : "success",
            results : results.rows.length,
            data : {
                hotel : results.rows[0] 
            }
        })
    } catch (error) {
        console.log(error)
    }
});

//DELETE a hotel
router.delete("/:id", async (req, res) => {

    console.log(req.params.id);
    
    try {
        const results = await db.query("DELETE FROM hotels.hotel where id = $1", [req.params.id]);
        console.log(results);
        res.status(204).json({
            status : "success"
        })
    } catch (error) {
        console.log(error)
    }

   
});


export default router
