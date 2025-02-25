const express = require("express");

import {
  createStudent,
  listStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller";

const router = express.Router();

router.post("/", createStudent);
router.get("/", listStudents);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
