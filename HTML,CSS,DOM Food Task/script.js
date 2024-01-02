function saveUserData() {
    var userData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        pincode: document.getElementById("pincode").value,
        gender: document.getElementById("male").checked ? "Male" : (document.getElementById("female").checked ? "Female" : ""),
        cuisine: [
            document.getElementById("american").checked ? "American" : "",
            document.getElementById("indian").checked ? "Indian" : "",
            document.getElementById("italian").checked ? "Italian" : "",
            document.getElementById("mexican").checked ? "Mexican" : "",
            document.getElementById("japanese").checked ? "Japanese" : "",
            document.getElementById("thai").checked ? "Thai" : "",
            document.getElementById("other").checked ? "Other" : ""
        ].filter(Boolean).join(", "),
        state: document.getElementById("state").value,
        country: document.getElementById("country").value
    };

    var tableBody = document.getElementById("userDataBody");
    var newRow = tableBody.insertRow(tableBody.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = userData.firstName;
    cell2.innerHTML = userData.lastName;
    cell3.innerHTML = userData.address;
    cell4.innerHTML = userData.pincode;
    cell5.innerHTML = userData.gender;
    cell6.innerHTML = userData.cuisine;
    cell7.innerHTML = userData.state;
    cell8.innerHTML = userData.country;

    // Clear the form after saving
    document.getElementById("userForm").reset();
}