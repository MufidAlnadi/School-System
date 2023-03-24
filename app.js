const myForm = document.getElementById('ffrom');
const table = document.getElementById('table');

myForm.addEventListener("submit", function(event) {
        event.preventDefault();
    const formData = new FormData(myForm);

    const tr = document.createElement("tr");
    table.appendChild(tr);


    const FullName = document.createElement("td");
    FullName.innerHTML = formData.get('FullName');
    table.appendChild(FullName);

    const date = document.createElement("td");
    date.innerHTML = formData.get('date');
    table.appendChild(date);

    const gender = document.createElement("td");
    gender.innerHTML = formData.get('gender');
    table.appendChild(gender);

    const Phone = document.createElement("td");
    Phone.innerHTML = formData.get('Phone');
    table.appendChild(Phone);

    const grade = document.createElement("td");
    grade.innerHTML = formData.get('grade');
    table.appendChild(grade);

   


 
});