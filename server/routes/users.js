import  express  from "express";

import {login,signup} from '../controllers/auth.js'
import {getAllUsers,updateProfile} from '../controllers/users.js'
import auth from '../middlewares/auth.js'

const router =express.Router();

router.post('/signup',signup)  //here we will be writing functions but those very huge so we are writing those func in controllers
router.post('/login',login)

router.get('/getAllUsers',getAllUsers) //importing users controller
router.patch("/update/:id", auth, updateProfile);

export default router