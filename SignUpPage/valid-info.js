//Normal email must start with aphabet
//end with an domain name such as @gmail.com or dut.edu.vn
//This is not check the invalid domain name that have more than
//3 dot in the domain, which is only can be ipv6
const emailRegex = /^[A-Za-z][\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/;
const emailRegex_check_ipv6 = /(\d{1,4}\.){5}(\d{1,4})$/;
const domainRegex = /@.*/;
const passRegex = /^[\w@*\s]{6,}/;

function validEmail(email)
{
    return emailRegex.test(email);
}

function validEmailv6(email)
{
    let domain = email.match(domainRegex);
    if(domain == null)
        return false;
    let numDot = domain[0].match(/\./g).length;
    if(numDot > 3)
    {
        if(numDot == 5)
            return emailRegex_check_ipv6.test(domain[0]);
        else
            return false
    }
    return true;
}

function validEmail_Full(email)
{
    return validEmail(email) && validEmailv6(email);
}

function validPass(pass)
{
    return passRegex.test(pass);
}

function validInfo_Login(email, pass, full=false)
{
    if(full == false)
        return validEmail(email) && validPass(pass);
    return validEmail_Full(email) && validPass(pass); 
}

function validInfo_Signup(email, pass, retype, full=false)
{
    if(pass != retype)
        return false;
    if(full == false)
    {

        return validEmail(email) && validPass(pass);
    }
    return validEmail_Full(email) && validPass(pass);
}

function serverResponseBuiler(options)
{
    var message ={};
    if(options.length > 0)
    {
        for(let i = 0; i < options.length; i++)
        {
            message[options[i]] = 0;
        }
    }
    return message;
}