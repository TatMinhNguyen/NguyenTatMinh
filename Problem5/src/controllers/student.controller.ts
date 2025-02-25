import { Request, Response } from "express";
import { Student } from "../models/Student";

// Create a new student
export const createStudent = async (req: Request, res: Response) => {
    try {
        const { name, age, gpa } = req.body;
        const student = new Student({ name, age, gpa: parseFloat(gpa.toFixed(2)) });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};
  
// Get list of students with optional filters
export const listStudents = async (req: Request, res: Response) => {
    try {
        const { name } = req.query;
        const filter = name ? { name: { $regex: name, $options: "i" } } : {};
        const students = await Student.find(filter);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

// Get details of a student
export const getStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) {
            return res.status(404).json({ error: "Student not found!" });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

// Update a student
export const updateStudent = async (req: Request, res: Response) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedStudent) return res.status(404).json({ error: "Student not found" });

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// Delete a student
export const deleteStudent = async (req: Request, res: Response) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) return res.status(404).json({ error: "Student not found" });

        res.status(200).json({ message: "Student deleted" });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
  };