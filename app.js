
const myForm = document.getElementById("ffrom");

// Step 1: Create a Student constructor function
function Student(fullName, dateOfBirth, gender, major, imageURL, phoneNumber) {
  this.fullName = fullName;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.major = major;
  this.imageURL = imageURL;
  this.phoneNumber = phoneNumber;
}

// Step 2: Update form submit event listener to create new Student object and add it to an array
let studentList = JSON.parse(localStorage.getItem("students")) || [];



myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Create new Student object from form data
  const formData = new FormData(myForm);

  let newStudent = new Student(
    formData.get("FullName"),
    formData.get("date"),
    formData.get("gender"),
    formData.get("major"),
    formData.get("image"),
    formData.get("Phone")
  );

  // Add new Student object to studentList array
  studentList.push(newStudent);
  localStorage.setItem("students", JSON.stringify(studentList));
  renderStudents();
});

//Step 3: Render the array of students on the home page
 function renderStudents() {
    for (const student of studentList) {
        const cont = document.createElement("div");
        const card = document.getElementById("card");
        
        card.appendChild(cont)
       
       
        const img = document.createElement("img");
        img.src = student.imageURL;
        cont.appendChild(img);
        
        const ul = document.createElement("ul");
        cont.appendChild(ul);

        const fullName = document.createElement("li");
        fullName.innerHTML =`Name: ${student.fullName}`;
        ul.appendChild(fullName);

        const dateOfBirth = document.createElement("li");
        dateOfBirth.innerHTML =`Date of birth: ${student.dateOfBirth}`;
        ul.appendChild(dateOfBirth);

        const gender = document.createElement("li");
        gender.innerHTML = `Gender: ${student.gender}`;
        ul.appendChild(gender);

        const major = document.createElement("li");
        major.innerHTML = `Major: ${student.major}`;
        ul.appendChild(major);

        const Phone = document.createElement("li");
        Phone.innerHTML = `Phone: ${student.Phone}`;
        ul.appendChild(Phone);
    }
    
  }


  window.onload = renderStudents;