const express = require('express')
const helloc = require("../controllers/hellocc")
// const brand = require("../controllers/brand")
const brand = require("../controllers/brand")
const router = express.Router()


router.get("/hello",helloc.hello)
router.post("/hellop",helloc.hello)

router.get("/about",helloc.about)
router.post("/about",helloc.about)

router.get("/brand",brand.brand)


module.exports=router;