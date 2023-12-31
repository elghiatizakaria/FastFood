import {sample_foods, sample_tags} from "../data";
import { Router} from "express";
import asyncHandler from "express-async-handler";
import {Food, FoodModel} from "../models/food.model";
import {User, UserModel} from "../models/user.model";
import {HTTP_BAD_REQUEST} from "../constants/http_status";
import bcrypt from "bcryptjs";
const router = Router();


router.get("/seed", asyncHandler(
    async (req,res)=>{
        const foodsCount= await FoodModel.countDocuments();
        if (foodsCount>0){
            res.send("Seed is already done!");
            return;
        }
        await FoodModel.create(sample_foods);
        res.send("Seed Is Done!");

    }
));

router.get("/",asyncHandler(
    async (req,res)=>{
        const foods= await FoodModel.find();
        res.send(foods);
    }
));

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const foods = await FoodModel.find({name: {$regex:searchRegex}})
        res.send(foods);
    }
))
router.get("/tags", asyncHandler(
    async (req, res) => {
        const tags = await FoodModel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name:'$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        const all = {
            name : 'All',
            count: await FoodModel.countDocuments()
        }

        if (tags) {
           tags.unshift(all);
        }
        res.send(tags);
    }
))

router.get("/tag/:tagName",asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find({tags: req.params.tagName})
        res.send(foods);
    }
))

router.get("/:foodId", asyncHandler(
    async (req, res) => {
        const food = await FoodModel.findById(req.params.foodId);
        console.log(food)
        res.send(food);
    }
))

router.post('/addFood', asyncHandler(
    async (req, res) => {
        const {name, price, tags, favorite, stars, imageUrl, origins, cookTime}=req.body;
        const food = await FoodModel.findOne({name});
        if(food){
            res.status(HTTP_BAD_REQUEST)
                .send('Food is already exist, please try with another food!');
            return;
        }

        const newFood:Food = {
            id:'',
            name:name.toLowerCase(),
            price,
            tags,
            favorite,
            stars,
            imageUrl,
            origins,
            cookTime
        }


        const dbFood = await FoodModel.create(newFood);
        res.send(dbFood);
    }
))

router.get("/:foodId", asyncHandler(
    async (req, res) => {
        const food = await FoodModel.findById(req.params.foodId);
        console.log(food)
        res.send(food);
    }
))
router.delete("/:foodId", asyncHandler(
    async (req, res) => {
        await FoodModel.deleteOne({ _id: req.params.foodId });
        res.sendStatus(204);
    }
))
export default router;
