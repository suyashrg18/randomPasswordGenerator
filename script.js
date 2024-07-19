const passwordInput = document.getElementById("pwd");
const generatePwdBtn = document.getElementById("generatePwdBtn");
const copyBtn = document.getElementById("copyBtn");
const pwdLength = 12;

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const specialChars = "~`!@#$%^&*()_-+=,<.>/?|\{[}]";

const allChars = upperCaseChars+lowerCaseChars+nums+specialChars;

function generateMyPassword(){
    console.log("generateMyPassword called")
    let password = ""
    password += upperCaseChars[Math.floor(Math.random()*upperCaseChars.length)];
    console.log("upperCaseChars added",password)
    password += lowerCaseChars[Math.floor(Math.random()*lowerCaseChars.length)];
    console.log("lowerCaseChars added",password)
    password += nums[Math.floor(Math.random()*nums.length)];
    console.log("nums added",password)
    password += specialChars[Math.floor(Math.random()*specialChars.length)];
    console.log("specialChars added",password)

    while(pwdLength > password.length){
        console.log("pwdLength ",pwdLength)
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }

    passwordInput.value = password;

}

function copyPwd() {
    passwordInput.select()
    document.execCommand("copy")
}

generatePwdBtn.addEventListener('click',generateMyPassword)
copyBtn.addEventListener('click',copyPwd)