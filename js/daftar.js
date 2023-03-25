function showInput() {
    var inputContainer = document.getElementById("container");
    var inputContainer2 = document.getElementById("container2");
    var radios = document.getElementsByName("stat");
    var selectedOption;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedOption = radios[i].value;
            break;
        }
    }

    if (selectedOption === "Mahasiswa SI") {
        inputContainer.style.display = "block";
        inputContainer2.style.display = "block";
    } else {
        inputContainer.style.display = "none";
        inputContainer2.style.display = "block";
    }
}

// Check if localStorage is available
if (typeof(Storage) !== "undefined") {
    // If localStorage is available, check if the array exists
    if (localStorage.myArrayuser || localStorage.myArrayupass || localStorage.myArrayemail) {
    // If the array exists, parse and display it
    var myArrayuser = JSON.parse(localStorage.myArrayuser);
    var myArraypass = JSON.parse(localStorage.myArraypass);
    var myArrayemail = JSON.parse(localStorage.myArrayemail);
    // displayList(myArray);
    } else {
    // If the array does not exist, create it
    var myArrayuser = [];
    var myArraypass = [];
    var myArrayemail = [];
    }
} else {
    alert("Maaf, browser Anda tidak mendukung web storage.");
}

// Function to add a new item to the array and update the display
function addItem() {
    // var newItem = prompt("Enter a new item:");
    var userBaru = document.getElementById("username").value;
    var passBaru = document.getElementById("password").value;
    var emailBaru = document.getElementById("email").value;

    if (userBaru != null && userBaru != "" || passBaru != null && passBaru != "" || emailBaru != null && emailBaru != "") {
    myArrayuser.push(userBaru);
    myArraypass.push(passBaru);
    myArrayemail.push(emailBaru);
    localStorage.myArrayuser = JSON.stringify(myArrayuser);
    localStorage.myArraypass = JSON.stringify(myArraypass);
    localStorage.myArrayemail = JSON.stringify(myArrayemail);
    // displayList(myArray);
    }
    const button = document.getElementById("daftarform");
    button.addEventListener('submit', function(e){
        e.preventDefault()
        alert ('berhasil daftar');
        window.location.href = 'index.html';
      });
}

// Function to update the display of the array
// function displayList(array) {
// 	var list = document.getElementById("list");
// 	list.innerHTML = "";
// 	for (var i = 0; i < array.length; i++) {
// 	var item = document.createElement("li");
// 	item.appendChild(document.createTextNode(array[i]));
// 	list.appendChild(item);
// 	}
// }