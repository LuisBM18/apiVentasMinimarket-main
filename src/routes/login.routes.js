import { Router } from "express";
import {postLoginUser} from '../controllers/login.controller'

const router = Router()


router.post('/login',postLoginUser)

export default router