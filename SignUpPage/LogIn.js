// var txtEmail, txtPass;
// var btnLogIn;
// var popupEmail, popupPass;

const usernameSrv = "khoanguyen1507dn@gmail.com"
const passwordSrv = "khoanguyen1511dn.."


class LoginModel
{
    constructor(email, password)
    {
        if(validEmail(email) == true)
            this.email = email;
        if(validPass(password) == true)
            this.password = password;
    }
}

class LoginView
{
    constructor(presenter)
    {
        this.addViews();
        this.presenter = presenter;
        this.addEvents();
    }
    addViews()
    {
        this.txtEmail = document.getElementById("txtEmail");
        this.txtPass = document.getElementById("txtPass");
        this.btnLogIn = document.getElementById("btnLogIn");
        this.popupEmail = document.getElementById("popupEmailError");
        this.popupPass = document.getElementById("popupPassError");
    }
    addEvents()
    {
        //Handling the problem with handler using bind(this)
        var btnLogInHandler = this.btnLogIn_OnClick.bind(this);
        this.btnLogIn.addEventListener("click", btnLogInHandler);//(this.presenter, this.validAccount);
        this.btnLogIn.prototype = this;
        // console.log("btnLogIn", this.btnLogIn);
        this.txtEmail.addEventListener("focus",() =>{
            this.txtEmail.classList.remove("text-error");
            this.popupEmail.classList.remove("show");
        });
        this.txtPass.addEventListener("focus", ()=>{
            this.txtPass.classList.remove("text-error");
            this.popupPass.classList.remove("show");
        });
    }
    get email()
    {
        return this.txtEmail.value;
    }
    get password()
    {
        return this.txtPassword.value;
    }
    btnLogIn_OnClick(){
        console.log("Log in");
        // console.log(this);
        var txtEmail = document.getElementById("txtEmail");
        var txtPass = document.getElementById("txtPass");
        var popupEmail = document.getElementById("popupEmailError");
        var popupPass = document.getElementById("popupPassError");
        const email = txtEmail.value;
        const pass = txtPass.value;
        if(validEmail_Full(email) == false)
        {
            popupEmail.innerHTML = "Please enter a valid email address.";
            txtEmail.classList.add("text-error");
            popupEmail.classList.add("show");
            return;
        }
        if(validPass(pass) == false)
        {
            popupPass.innerHTML = "Please enter a valid password.";
            txtPass.classList.add("text-error");
            popupPass.classList.add("show");
            return;
        }
        var data = {
            email:email,
            password:pass
        }
        // console.log(data)
        // this.prototype.validAccount(this.prototype.presenter,data);  
        this.validAccount(data);     
    }
    // validAccount(presenter, data)
    // {
    //     presenter.validAccount(data);
    // }
    validAccount(data) {
        this.presenter.validAccount(data);
    }
    //Take the response from the presenter and
    //display the result. If there is an error, 
    //popup the error, if not, just pass
    responseHandler(res)
    {
        if(res["email"] != 0)
        {
            this.txtEmail.classList.add("text-error");
            this.popupEmail.innerHTML = "We cannot find you email. Try again!";
            this.popupEmail.classList.add("show");
            return;
        }
        if(res["password"] != 0)
        {
            this.txtPass.classList.add("text-error");
            this.popupPass.innerHTML = "Wrong password. Try again!";
            this.popupPass.classList.add("show");
            return;
        }
        window.alert("Login successful");
    }
}

class LoginPresenter
{
    initialize(model, view)
    {
        this.model = model;
        this.view = view;
    }
    //Valid account is the simulation the process
    //that involke the server to check the valid of the model.

    validAccount(data)
    {
        //Here is the function that send the data after
        //checking several error by regex,
        //now send to the server to check if this account is valid
        if(data.email && data.password)
        {
            this.model.email = data.email;
            this.model.password = data.password;
        }
        else{
            console.log("Wrong data input!");
        }
        //get the response from server
        var res = getServerValid(this.model);
        //update the result on the view.
        this.view.responseHandler(res);
    }

}

function getServerValid(data)
{
    var res = serverResponseBuiler(["email", "password"]);
    if(data.email !== usernameSrv)
        res.email = 1;
    if(data.password != passwordSrv)
        res.password = 1;
    return res;
}

window.onload = function(){
    var model = new LoginModel();
    var presenter = new LoginPresenter();
    var view = new LoginView(presenter);
    presenter.initialize(model, view);
    // console.log(view);
};