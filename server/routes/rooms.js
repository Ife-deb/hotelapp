import express from "express"
import expressPR from "express-promise-router"
import db from "../db/index.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


// const db = require('../db')
const router = express.Router();

//Get all rooms
router.get("/", async (req, res) => {
    try {
        const results = await db.query("select * from hotels.room");
        console.log(results);
        res.status(200).json({
            status : "success",
            results : results.rows.length,
            data : {
                rooms : results.rows  
            }
        })
    } catch (error) {
        console.log(error)
    }
    
});

//Get a specific rooms
router.get("/:id", async (req, res) => {
    try {
        //parametrized query
        const results = await db.query("select * from hotels.room where id = $1", [req.params.id]);
        console.log(results.rows[0]);

        res.status(200).json({
            status : "success",
            results : results.rows.length,
            data : {
                room : results.rows [0] 
            }
        })
    } catch (error) {
        console.log(error)
    }
    
});

//CREATE a room
router.post("/", async (req, res) => {
    try {
        console.log(req.body)

        //parametrized query
        const results = await db.query(" INSERT INTO hotels.room (hotel_id, price, isOceanView, isAddable, isDammaged, isAvailable, capacity, commodities) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) returning *", 
        [req.body.hotel_id, req.body.price, req.body.isOceanView, req.body.isAddable, req.body.isDammaged, req.body.isAvailable, req.body.capacity, req.body.commodities]);
        
        res.status(201).json({
            status : "success",
            results : results.rows.length,
            data : {
                room : results.rows[0] 
            }
        })
    } catch (error) {
        console.log(error)
    } 

});

//UPDATE a room
router.put("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);

        //parametrized query
        // you can't change the chainId, and number of rooms
        const results = await db.query(" UPDATE hotels.romms SET hotel_id = $1, price = $2, isOceanView = $3, isAddable = $4, isDammaged = $5, isAvailable = $6, capacity = $7, commodities = $8 where id = $9 returning *", 
        [req.body.hotel_id, req.body.price, req.body.isOceanView, req.body.isAddable, req.body.isDammaged, req.body.isAvailable, req.body.capacity, req.body.commodities, req.params.id]);
        
        res.status(201).json({
            status : "success",
            results : results.rows.length,
            data : {
                room : results.rows[0] 
            }
        })
    } catch (error) {
        console.log(error)
    }
});

//DELETE a room
router.delete("/:id", async (req, res) => {

    console.log(req.params.id);
    
    try {
        const results = await db.query("DELETE FROM hotels.room where id = $1", [req.params.id]);
        console.log(results);
        res.status(204).json({
            status : "success"
        })
    } catch (error) {
        console.log(error)
    }

   
});


export default router
