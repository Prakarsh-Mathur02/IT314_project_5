const express = require("express");
const router = express.Router();

const {
    getCouriers,
    createCouriers,
    deleteCouriers,
} = require("../controllers/couriers");

router.get("/", getCouriers);
router.post("/", createCouriers);
router.delete("/:id", deleteCouriers);

module.exports = router;