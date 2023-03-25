const button = document.getElementById("former")
const user = document.getElementById("user");
const pass = document.getElementById("pass");

button.addEventListener('submit', function(e){
    e.preventDefault()

    localStorage.setItem("nama", user.value);
    
    const keys = Object.keys(localStorage);

    const arruser = keys.filter(key => key.startsWith('myArrayuser'));
    const arrpass = keys.filter(key => key.startsWith('myArraypass'));
    const loc_user = JSON.parse(localStorage.getItem(arruser));
    const loc_pass = JSON.parse(localStorage.getItem(arrpass));

    if(loc_user.indexOf(user.value) !== -1  && loc_pass.indexOf(pass.value) !== -1 )  
    {
        if(loc_user.indexOf(user.value) == loc_pass.indexOf(pass.value)){
            alert("BERHASIL LOGIN")
            window.location.href = 'Beranda.html'
        } else  
        {alert("GAGAL LOGIN, TIDAK SESUAI")} 
    }   
    else  
    {alert("GAGAL LOGIN")}    
});