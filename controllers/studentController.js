const Student = require("../models/Student");

// Utility function to determine division
function calculateDivision(percentage) {
  if (percentage >= 75) return "Distinction";
  if (percentage >= 60) return "First Division";
  if (percentage >= 50) return "Second Division";
  return "Third Division";
}

// 👉 CREATE
exports.createStudent = async (req, res) => {
  try {
    const { name, age, m1, m2, m3, m4, m5 } = req.body;

    // Manual validation (in addition to Sequelize validations)
    if (age <= 0 || [m1, m2, m3, m4, m5].some(m => m < 0)) {
      return res.status(400).json({ error: "Invalid age or marks" });
    }

    const total = m1 + m2 + m3 + m4 + m5;
    const percentage = total / 5;
    const division = calculateDivision(percentage);

    const student = await Student.create({
      name,
      age,
      m1,
      m2,
      m3,
      m4,
      m5,
      percentage,
      division,
    });

    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 READ
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const { name, age, m1, m2, m3, m4, m5 } = req.body;

    if (age <= 0 || [m1, m2, m3, m4, m5].some(m => m < 0)) {
      return res.status(400).json({ error: "Invalid age or marks" });
    }

    const total = m1 + m2 + m3 + m4 + m5;
    const percentage = total / 5;
    const division = calculateDivision(percentage);

    const updated = await Student.update(
      { name, age, m1, m2, m3, m4, m5, percentage, division },
      { where: { id: req.params.id } }
    );

    res.status(200).json({ message: "Student updated successfully", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 DELETE
exports.deleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
