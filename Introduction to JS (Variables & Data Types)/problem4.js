//Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
//Print the report card of the student (You can make it look nice by using some keyboard symbols )
//Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration
                   
                   
const name = "Pavan";
let school = "Masai School";
let section = 'B';
let rollNo = 1234
let age = 25;
let grade = 'A'
let marksS1 = 80;
let marksS2 = 84;
let marksS3 = 78;
console.log("------------------------------------");
console.log("Name:",name,"  " ,"School:", school);
console.log("Age:",age, "Roll No:", rollNo,  "Section:",section);
console.log("------------------------------------");
// console.log("\n");
console.log("Marks (out of 100)");
console.log("Subject 1:",marksS1);
console.log("Subject 2:",marksS2);
console.log("Subject 3:",marksS3);
console.log("Total Marks:", marksS1 + marksS2 + marksS3, "Maximum Total Marks:",300);
console.log("Percentage (%):", (marksS1 + marksS2 + marksS3)/3)
console.log("------------------------------------");
