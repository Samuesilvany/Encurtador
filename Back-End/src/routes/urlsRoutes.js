import { urlsController } from "../controllers/urlsController.js";
import { Router } from "express";

const router = Router();

router.post("/", urlsController.create);
router.get("/", urlsController.findAll);
router.get("/:id", urlsController.findById);

export default router;
