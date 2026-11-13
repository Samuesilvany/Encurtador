import { urlsController } from "../controllers/urlsController.js";
import { Router } from "express";

const router = Router();

router.post("/", urlsController.create);
router.get("/:id", urlsController.findById);
router.get("/", urlsController.findAll);

export default router;
