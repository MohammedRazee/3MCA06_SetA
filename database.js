// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: college



// Step 3: Create the schema and the model here.
//         Model name: Student   (Mongoose saves it in the "students" collection)
//         Fields: name (String), dept (String), city (String), marks (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the students in the collection.
export async function getAllStudents() {

}


// dept comes from the "Search by department" box on the page, for example "CSE".
// Return the students whose dept matches it.
export async function findStudentsByDept(dept) {

}


// minMarks is a number typed on the page, for example 85.
// Return the students whose marks are greater than or equal to minMarks.
export async function findStudentsByMinMarks(minMarks) {

}


// Return the 3 students with the highest marks, highest first.
export async function getTopThreeStudents() {

}


// student comes from the "Add Student" form, for example:
//   { name: "Riya", dept: "CSE", city: "Bengaluru", marks: 80 }
// Save it in the database and return the saved student.
export async function addStudent(student) {

}
