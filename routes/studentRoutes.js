const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController") 

router.post("/createStudent",studentController.createStudent);
router.get("/getAllStudents", studentController.getAllStudents);
router.put("/updateStudent/:id", studentController.updateStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;
