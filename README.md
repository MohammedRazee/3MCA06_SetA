# CA Lab Exam - Section 3MCA06 - Set A

**College Student Records**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** college
- **Collection:** students
- **Fields:** name (text), dept (text), city (text), marks (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use college
db.students.insertMany([
  { name: "Aarav", dept: "CSE", city: "Bengaluru", marks: 88 },
  { name: "Diya", dept: "ECE", city: "Mysuru", marks: 76 },
  { name: "Rohan", dept: "MECH", city: "Hubballi", marks: 64 },
  { name: "Kavya", dept: "CSE", city: "Mangaluru", marks: 95 },
  { name: "Ishaan", dept: "ECE", city: "Bengaluru", marks: 82 },
  { name: "Meera", dept: "MECH", city: "Mysuru", marks: 71 },
  { name: "Arjun", dept: "CSE", city: "Hubballi", marks: 79 },
  { name: "Sneha", dept: "ECE", city: "Mangaluru", marks: 91 },
  { name: "Vikram", dept: "MECH", city: "Bengaluru", marks: 58 },
  { name: "Ananya", dept: "CSE", city: "Mysuru", marks: 86 },
  { name: "Rahul", dept: "ECE", city: "Hubballi", marks: 69 },
  { name: "Priya", dept: "MECH", city: "Mangaluru", marks: 93 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Students".  
   Expected: 12 students.
3. **Search.** Choose CSE and click Search.  
   Expected: 4 students: Aarav, Kavya, Arjun, Ananya.
4. **Filter.** Type 85 in "Marks at least" and click Filter.  
   Expected: 5 students: Aarav, Kavya, Sneha, Ananya, Priya.
5. **Top 3 Students.** Click "Top 3 Students".  
   Expected: Kavya (95), Priya (93), Sneha (91), in this order.
6. **Add Student.** Fill the form with Name: your own name, Department: CSE, City: Bengaluru, Marks: 80. Click "Add Student".  
   Expected: The message "Student saved" appears and the list shows 13 students, including your name.
