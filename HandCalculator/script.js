var txtResultBottom, txtResultTop;
var btnAc, btnDel, btnDiv, btnMul, btnPlus, btnMinus, btnEquals, btnDot;
var btnNumber = [];

var buffer="";
var tmpBuffer="";
const SECOND_NUM = 3;
const OPERATOR = 2;
const FIRST_NUM = 1;
const IDLE = 0;
var state = IDLE;
var calculated = false;

function addElements()
{
    txtResultTop = document.getElementById('result-top');
    txtResultBottom = document.getElementById('result-bottom');

    btnAc = document.getElementById('btnAc');
    btnDel = document.getElementById('btnDel');
    btnDiv = document.getElementById('btnDiv');
    btnPlus = document.getElementById('btnPlus');
    btnMul = document.getElementById('btnMul');
    btnPlus = document.getElementById('btnPlus');
    btnMinus = document.getElementById('btnMinus');
    btnEquals = document.getElementById('btnEquals');
    btnDot = document.getElementById('btnDot');

    for(let i = 0; i < 10; i++)
    {
        let name = "btn"+i.toString();
        btnNumber[i] = document.getElementById(name)
    }
    console.log("Add element completed!");
}


function addEvents()
{
    btnDiv.addEventListener('click', ()=>{
        let ops = '/';
        console.log('Div');
        if(state == IDLE)
            return
        if(state == FIRST_NUM)
        {
            buffer += ops;
            state = OPERATOR;
        }
        else if(state == OPERATOR)
        {
            console.log(buffer);
            if(buffer[buffer.length - 1] != ops)
            {
                buffer = buffer.slice(0, buffer.length -1) + ops;
            }
            console.log(buffer)
            // txtResultTop.innerHTML = buffer;
        }
        else if(state == SECOND_NUM)
        {
            btnEquals.click();
            buffer+=ops;
            state = OPERATOR;
        }
        else{
            //do nothing
        }
        resultTop = buffer.split(ops)[0]+ops;
        resultBottom = buffer.split(ops)[1];
        if(resultBottom == "")
            resultBottom = "0"
        txtResultTop.innerHTML = resultTop;
        txtResultBottom.innerHTML = resultBottom
    });
    btnMul.addEventListener("click", ()=>{
        let ops = '*';
        console.log('Div');
        if(state == IDLE)
            return
        if(state == FIRST_NUM)
        {
            buffer += ops;
            state = OPERATOR;
        }
        else if(state == OPERATOR)
        {
            if(buffer[buffer.length - 1] != ops)
            {
                buffer = buffer.slice(0, buffer.length -1) + ops;
            }
            // txtResultTop.innerHTML = buffer;
        }
        else if(state == SECOND_NUM)
        {
            btnEquals.click();
            buffer+=ops;
            state = OPERATOR;
        }
        else{
            //do nothing
        }
        resultTop = buffer.split(ops)[0]+ops;
        resultBottom = buffer.split(ops)[1];
        if(resultBottom == "")
            resultBottom = "0"
        txtResultTop.innerHTML = resultTop;
        txtResultBottom.innerHTML = resultBottom
    });

    btnPlus.addEventListener("click", ()=>{
        let ops = '+';
        console.log('Div');
        if(state == IDLE)
            return
        if(state == FIRST_NUM)
        {
            buffer += ops;
            state = OPERATOR;
        }
        else if(state == OPERATOR)
        {
            console.log(buffer);
            if(buffer[buffer.length - 1] != ops)
            {
                buffer = buffer.slice(0, buffer.length -1) + ops;
            }
            console.log(buffer)
            // txtResultTop.innerHTML = buffer;
        }
        else if(state == SECOND_NUM)
        {
            btnEquals.click();
            buffer+=ops;
            state = OPERATOR;
        }
        else{
            //do nothing
        }
        resultTop = buffer.split(ops)[0]+ops;
        resultBottom = buffer.split(ops)[1];
        if(resultBottom == "")
            resultBottom = "0"
        txtResultTop.innerHTML = resultTop;
        txtResultBottom.innerHTML = resultBottom
    });

    btnMinus.addEventListener("click", ()=>{
        let ops = '-';
        console.log('Div');
        if(state == IDLE)
            return
        if(state == FIRST_NUM)
        {
            buffer += ops;
            state = OPERATOR;
        }
        else if(state == OPERATOR)
        {
            console.log(buffer);
            if(buffer[buffer.length - 1] != ops)
            {
                buffer = buffer.slice(0, buffer.length -1) + ops;
            }
            console.log(buffer)
            // txtResultTop.innerHTML = buffer;
        }
        else if(state == SECOND_NUM)
        {
            btnEquals.click();
            buffer+=ops;
            state = OPERATOR;
        }
        else{
            //do nothing
        }
        resultTop = buffer.split(ops)[0]+ops;
        resultBottom = buffer.split(ops)[1];
        if(resultBottom == "")
            resultBottom = "0"
        txtResultTop.innerHTML = resultTop;
        txtResultBottom.innerHTML = resultBottom
    });

    btnDot.addEventListener("click", ()=>{
        if(state == OPERATOR || state == IDLE)
        {
            state++;
        }
        // console.log(btnNumber[i])
        buffer+=btnDot.innerHTML;
        if(state == FIRST_NUM)
        {
            txtResultBottom.innerHTML = buffer;
        }
        else if(state == SECOND_NUM)
        {
            let opsIndex = Math.max(buffer.indexOf('/'), buffer.indexOf('*'),
                            buffer.indexOf('+'), buffer.indexOf('-'))
        // console.log(opsIndex);
            let ops = buffer[opsIndex];
            // console.log(ops);
            let secondNum = buffer.split(ops)[1];
            txtResultTop.innerHTML = buffer;
            txtResultBottom.innerHTML = secondNum;
        }
    });
    btnAc.addEventListener('click',()=>{
        state = IDLE;
        txtResultTop.innerHTML = "0";
        txtResultBottom.innerHTML = "0";
        buffer ="";
    });
    btnEquals.addEventListener('click', ()=>{
        console.log("Equals");
        console.log(state)
        if(state == IDLE)
        {
            txtResultTop.innerHTML = "";
            txtResultBottom.innerHTML = "0";
            return;
        }
        else if(state == FIRST_NUM)
        {
            txtResultBottom.innerHTML = buffer;
        }
        else if(state == OPERATOR)
        {
            txtResultTop.innerHTML = buffer;
            txtResultBottom.innerHTML = "Error";
        }
        else if(state == SECOND_NUM)
        {
            let opsIndex = Math.max(buffer.indexOf('/'), buffer.indexOf('*'),
                                buffer.indexOf('+'), buffer.indexOf('-'))
            // console.log(opsIndex);
            let ops = buffer[opsIndex];
            // console.log(ops);
            let firstNum = parseFloat(buffer.split(ops)[0]);
            let secondNum = parseFloat(buffer.split(ops)[1]);
            let res;
            if(ops == '/')
            {   
                res = firstNum / secondNum;                
            }
            else if(ops == '*')
            {
                res = firstNum * secondNum;
            }
            else if(ops == '+')
            {
                res = firstNum + secondNum;
            }
            else if(ops == '-')
            {
                res = firstNum - secondNum;
            }
            else{
                //do nothing
            }
            //round the result:
            res = Math.round((res*1000))/1000

            buffer = res.toString();
            txtResultBottom.innerHTML = buffer;
            // tmpBuffer = buffer;
            // buffer ="";
            
            state = FIRST_NUM;
        }
        else{
            //do nothing
        }
        calculated = true;
    });
    btnDel.addEventListener("click", ()=>{
        if(state == FIRST_NUM)
        {
            console.log("Del");
            if(buffer.length > 1)
            {
                buffer=buffer.slice(0,buffer.length-1);
                txtResultBottom.innerHTML = buffer;
            }
            else{
                txtResultBottom.innerHTML="0";
            }
            
        }
        else if(state == SECOND_NUM)
        {
            let opsIndex = Math.max(buffer.indexOf('/'), buffer.indexOf('*'),
                                buffer.indexOf('+'), buffer.indexOf('-'));
            if(buffer.length > opsIndex + 1)
            {
                buffer=buffer.slice(0, buffer.length-1)
            }
            let ops = buffer[opsIndex];
                // console.log(ops);
            let secondNum = buffer.split(ops)[1];
            txtResultTop.innerHTML = buffer;
            if(secondNum == "")
                secondNum="0";
            txtResultBottom.innerHTML = secondNum;
        }
    });
    for(let i = 0; i < 10; i++)
    {
        btnNumber[i].addEventListener('click', ()=>{
            if(state == OPERATOR || state == IDLE)
            {
                state++;
            }
            // console.log(btnNumber[i])
            if(state == FIRST_NUM && calculated == true)
            {
                calculated = false;
                buffer = "";
            }
            buffer+=btnNumber[i].innerHTML;
            if(state == FIRST_NUM)
            {
                txtResultBottom.innerHTML = buffer;
            }
            else if(state == SECOND_NUM)
            {
                let opsIndex = Math.max(buffer.indexOf('/'), buffer.indexOf('*'),
                                buffer.indexOf('+'), buffer.indexOf('-'))
            // console.log(opsIndex);
                let ops = buffer[opsIndex];
                // console.log(ops);
                let secondNum = buffer.split(ops)[1];
                txtResultTop.innerHTML = buffer;
                txtResultBottom.innerHTML = secondNum;
            }
        });
    }
}

function main()
{
    addElements();
    addEvents();

}
main();