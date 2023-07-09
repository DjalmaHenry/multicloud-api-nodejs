import express from "express";
import servicesRouter from "./services.js";
import partiesRouter from "./parties.js";

const router = express.Router();

router.use("/", servicesRouter);

router.use("/", partiesRouter);

export default router;