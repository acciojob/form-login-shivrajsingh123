
function getFormvalue() {
    event.preventDefault(); // Prevent form submission
    
    const firstName = document.querySelector("input[name='fname']").value.trim();
    const lastName = document.querySelector("input[name='lname']").value.trim();
    
    if (firstName === "" || lastName === "") {
        alert("Please enter both First Name and Last Name.");
        return;
    }
    
    alert(`${firstName} ${lastName}`);
}



