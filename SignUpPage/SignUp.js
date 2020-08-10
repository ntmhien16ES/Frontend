const mthArr = ["January", "February", "March", "April", "May",
                        "June", "July", "August", "September", "October",
                        "November", "December"];
const genderList = [...document.getElementsByName("ckbGender")];
// console.log(genderList[0].checked);
let gender = genderList.reduce((prev, cur) =>{
    return prev.checked == true ? prev : cur;
});
gender = gender.value;
function radioButtonHandler(value)
{
    gender = value;
}
let date = new Date();
var txtFirstName, txtFamilyName;
var txtEmail, txtPass, txtRetypePass;
var sltDate, sltMonth, sltYear;
var btnSignUp;

function addElements()
{
    //Add textbox:
    txtFirstName = document.getElementById("txtFirstName");
    // console.log(txtFirstName);
    txtFamilyName = document.getElementById("txtFamilyName");
    txtEmail = document.getElementById("txtEmail");
    txtPass = document.getElementById("txtPass");
    txtRetypePass = document.getElementById("txtRetypePass");
    //Add slt and add option:
    sltDate = document.getElementById("sltDate");
    let optDefault = document.createElement("option");
    optDefault.value = "Day";
    optDefault.innerHTML = "Day";
    sltDate.appendChild(optDefault)
    for(let i = 1; i <= 31; i ++)
    {
        let opt = document.createElement("option");
        opt.value = i+"";
        opt.innerHTML = i+"";
        sltDate.appendChild(opt);
    }

    sltMonth = document.getElementById("sltMonth");
    optDefault = document.createElement("option");
    optDefault.value = "Month";
    optDefault.innerHTML ="Month";
    sltMonth.appendChild(optDefault);
    for(let i = 1; i <= 12; i++)
    {
        let opt = document.createElement("option");
        opt.value = i+"";
        opt.innerHTML = mthArr[i - 1];
        sltMonth.appendChild(opt);
    }
    sltYear = document.getElementById("sltYear");
    optDefault = document.createElement("option");
    optDefault.value = "Year";
    optDefault.innerHTML ="Year";
    sltYear.appendChild(optDefault)
    for(let i = date.getFullYear(); i >= date.getFullYear() - 115; i--)
    {
        let opt = document.createElement("option");
        opt.value = i+"";
        opt.innerHTML = i+"";
        sltYear.appendChild(opt);
    }

    //Add button:
    btnSignUp = document.getElementById("btnSignUp");
}

function addEvents()
{
    //Add Events on Focus for textboxes:
    txtFirstName.addEventListener("focus", ()=>{
        //Popup for Firstname
        // console.log("Focus first name");
        const popup = document.getElementById("popupFirstName");
        popup.classList.add("show");
        
    });
    txtFirstName.addEventListener("focusout", ()=>{
        // console.log("Out first name");
        const popup = document.getElementById("popupFirstName");
        popup.classList.remove("show");
    });

    txtFamilyName.addEventListener("focus", ()=>{
        //Popup for Family name
        // console.log("Focus family name");
        const popup = document.getElementById("popupFamilyName");
        popup.classList.add("show");
    });
    txtFamilyName.addEventListener("focusout", ()=>{
        // console.log("Out Family name");
        const popup = document.getElementById("popupFamilyName");
        popup.classList.remove("show");
    });

    txtEmail.addEventListener("focus", ()=>{
        // console.log("Focus email");
        const popup = document.getElementById("popupEmail");
        popup.classList.add("show");
        txtEmail.classList.remove("text-error");
        const popupError = document.getElementById("popupEmailError");
        popupError.classList.remove("show");
    });
    txtEmail.addEventListener("focusout", ()=>{
        // console.log("Out Email");
        const popup = document.getElementById("popupEmail");
        popup.classList.remove("show");
    });

    txtPass.addEventListener("focus", ()=>{
        //Popup for password
        // console.log("Focus password");
        const popup = document.getElementById("popupPass");
        popup.classList.add("show");
        txtPass.classList.remove("text-error");
        const popupError = document.getElementById("popupPassError");
        popupError.classList.remove("show");

    });
    
    txtPass.addEventListener("focusout", ()=>{
        // console.log("Out password");
        const popup = document.getElementById("popupPass");
        popup.classList.remove("show");
    });


    txtRetypePass.addEventListener("focus", ()=>{
        //Popup for retype password
        // console.log("Focus retype password");
        const popup = document.getElementById("popupRetype");
        popup.classList.add("show");
        txtRetypePass.classList.remove("text-error");
        const popupError = document.getElementById("popupRetypeError");
        popupError.classList.remove("show");
    });
    txtRetypePass.addEventListener("focusout", ()=>{
        // console.log("Out Retype pass");
        const popup = document.getElementById("popupRetype");
        popup.classList.remove("show");
    });


    //Add Events when Sign In:
    btnSignUp.addEventListener("click", ()=>{
        console.log("Sign in...");
        const infoStat = InforHandler();
        const dateStat = DateHandler();
        if(infoStat == true && dateStat == true)
            window.alert("Sign up successed!!!");
        // txtEmail.classList.toggle("text-error");
    });
}
function InforHandler()
{
    let stat = true;
    let emailCheck = validEmail_Full(txtEmail.value);
    if(emailCheck == false)
    {
        txtEmail.classList.add("text-error");
        const popupError = document.getElementById("popupEmailError");
        popupError.classList.add("show");
        stat = false;
    }
    let passCheck = validPass(txtPass.value);
    if(passCheck == false)
    {
        txtPass.classList.add("text-error");
        const popupError = document.getElementById("popupPassError");
        popupError.classList.add("show");
        stat = false;
    }
    if(pass != txtRetypePass.value)
    {
        txtRetypePass.classList.add("text-error");
        const popupError = document.getElementById("popupRetypeError");
        popupError.classList.add("show");
        stat = false;
    }
    return stat;
}
function DateHandler()
{
    let d=undefined, m=undefined, y=undefined, g;
    console.log(sltDate.value)
    console.log(sltMonth.value)
    console.log(sltYear.value)
    if(sltDate.value != "Day" && sltMonth != "Month" && sltYear != "Year")
    {
        d = parseInt(sltDate.value);
        m = parseInt(sltMonth.value);
        y = parseInt(sltYear.value);
    }
    g = gender;
    let dateStat = false;
    console.log(d+m+y)
    if(d != undefined && m != undefined & y != undefined)
    {
        dateStat = true;
    }
    else{
        dateStat = false;
    }
    return dateStat;
}
function main()
{
    addElements();
    addEvents();
}

main();

