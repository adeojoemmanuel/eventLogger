import { Router } from "express";

/**
 * Dependencies {controllers}
 */
 
import { postEvent, findAllEvent } from '../controllers'


const router = Router();

router.post("/", postEvent);
router.get("/", findAllEvent);

export default router;