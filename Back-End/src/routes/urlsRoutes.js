import { urlsController } from "../controllers/urlsController.js";
import { Router } from "express";


const router = Router();

router.post("/urls", urlsController.create)
router.get("/:id", urlsController.findById);
router.get("/urls", urlsController.findAll);

export default router;
