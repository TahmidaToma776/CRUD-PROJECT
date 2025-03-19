let regForm = document.querySelector(".register-form");
let allInput = regForm.querySelector("INPUT");
let closeBtn = document.querySelector("btn-close");
let allRegData = [];

if (allInput.length >= 5) {
    allRegData.push({
        name: allInput[0].value,
        email: allInput[1].value,
        mobile: allInput[2].value,
        dob: allInput[3].value,
        password: allInput[4].value
    });
    localStorage.setItem("allRegData", JSON.stringify(allRegData));
    swal("Data Inserted","successfully !","success");
    closeBtn.click();
    regForm.reset('');

} 
else{
    swal("Email already exist","failed","warning");
}
 
