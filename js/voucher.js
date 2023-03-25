var select = document.getElementById("thl");
for (var i = 2020; i >= 1960; --i) {
var option = document.createElement("option");
option.text = i;
option.value = i;
select.add(option);}

const button2 = document.getElementById('form1');
button2.addEventListener('submit', function(e){
    e.preventDefault() 
    const name = document.getElementById('na');
    const tahun = document.getElementById('thl');
    const mail = document.getElementById('em');
    const alas = document.getElementById('nw');
    const suk = document.getElementsByName('ya');
    let sukak;

    for (const radio of suk) {
    if (radio.checked) {
        sukak = radio.value;
        break;
    }
    }

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    const values = [];
    checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
        values.push(checkbox.value);
    }
    });
    // Menambahkan data pada session storage
    sessionStorage.setItem('NAMA', name.value);
    sessionStorage.setItem('USIA', tahun.value);
    sessionStorage.setItem('EMAIL', mail.value);
    sessionStorage.setItem('ALASAN', alas.value);
    sessionStorage.setItem('MENU', JSON.stringify(values));
    sessionStorage.setItem('SUKA', sukak);

    if(name.validity.valid || tahun.validity.valid || alas.validity.valid  || suk.validity.valid)  
    {
        var nama = sessionStorage.getItem("NAMA");
        var email = sessionStorage.getItem("EMAIL");
        var usi = sessionStorage.getItem("USIA");
        var usianya = 2023-usi;
        var alasanaja = sessionStorage.getItem("ALASAN");
        alert('Apakah benar ' + nama + ' dengan usia '+ usianya +' tahun ingin mendapatkan voucher?\nJika iya, akan kami beritahukan melalui email ' + email + 
        '\nTerima kasih atas alasan anda yaitu \'' + alasanaja + '\' yang akan kami pertimbangkan\nSelamat menunggu:)')
        window.location.href = 'Beranda.html'
    }else  
    {alert("GAGAL LOGIN")}    
});