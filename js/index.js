let regForm = document.querySelector(".register-form");
let allInput = regForm.querySelector("INPUT");
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
    closeBtn.click();
    regForm.reset('');
} 
