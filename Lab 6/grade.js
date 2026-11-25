//Comment Listing
// Error 1 (grade.html, Line 9): Add return before checkMark() to prevent the form from reloading and losing the result.
// Error 2 (grade.html, Line 17): Change showtable() to showTable() because JavaScript is case-sensitive.
// Error 3 (grade.html, Line 19): Change the script filename from grades.js to grade.js.
// Error 4 (grade.js, Line 5): Change = to === to compare the name with an empty string.
// Error 5 (grade.js, Line 9): Change isNan() to isNaN() because JavaScript is case-sensitive.
// Error 6 (grade.js, Line 14): Change && to || to check if the mark is below 0 or above 100.
// Error 7 (grade.js, Line 28): Change getElementByID() to getElementById().
// Error 8 (grade.js, Line 30): Change style.colour to style.color because JavaScript uses American spelling.
// Error 9 (grade.js, Line 31): Return false to prevent the form from submitting and reloading the page.
// Error 10 (grade.js, Line 38): Change i = 1 to i = 0 to include the first row (A) in the loop.
// Error 11 (grade.js, Line 42): Change innerHtml to innerHTML because JavaScript is case-sensitive.

function checkMark() {
    let name = document.forms["gradeForm"]["name"].value.trim();
    let mark = document.forms["gradeForm"]["mark"].value.trim();

    // Validate empty name
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Validate empty mark 
    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Validate numeric mark
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    // Validate range 0 to 100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;
    let resultEl = document.getElementById("result");

    // Determine grade and set text color accordingly
    if (mark >= 80) {
        grade = "A";
        resultEl.style.color = "green";
    } else if (mark >= 65) {
        grade = "B";
        resultEl.style.color = "green";
    } else if (mark >= 50) {
        grade = "C";
        resultEl.style.color = "orange";
    } else {
        grade = "F";
        resultEl.style.color = "red";
    }

    // Display grade result and timestamp 
    resultEl.innerHTML = name + " got grade " + grade;
    document.getElementById("checkedTime").innerHTML = "Checked on: " + new Date();

    // Return false so the form does not refresh the page
    return false;
}

// Generate a random whole number from 0 to 100 into the mark field
function generateRandomMark() {
    let randomNum = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomNum;
}

// Display the full grade reference table
function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    let tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}