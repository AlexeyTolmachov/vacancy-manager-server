import express from 'express';
import { ctrlWrapper } from '../middlewares/ctrl_wrapper';
import { getUsers } from '../controllers/users';

const router = express.Router();

// router.get("/", ctrlWrapper(getUsers));
router.get('/', () => console.log("usersRouter-get"))
// router.post("/", )

export default router;