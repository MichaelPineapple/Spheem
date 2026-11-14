const RC_OK = "OK"
const RC_FAIL = "FAIL"

var seshUsername = null
var seshPassword = null

function post(url, request, callback)
{
    fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(request),
    })
    .then(response => response.json())
    .then(data => {
      callback(data.resultCode, data.payload)
    })
    .catch((error) => {
      callback(RC_FAIL, error)
    });
}

function callSpheem(verb, request, callback)
{
    const url = "https://meowcle.net/cgi-bin/Spheem-API/endpoints/" + verb + ".js"
    post(url, request, callback)
}

function updateBalance()
{
    function callback_update(result, payload)
    {
        if (result == RC_OK) document.getElementById("lbl_balance").innerHTML = payload
        else alert(payload)
    }
    const request = { username:seshUsername, password:seshPassword }
    callSpheem("login", request, callback_update)
}


function enterSesh(username, password, balance)
{
    document.getElementById("lbl_balance").innerHTML = balance
    document.getElementById("lbl_username").innerHTML = username
    document.getElementById("seshDiv").hidden = false
    document.getElementById("loginDiv").hidden = true
    seshUsername = username
    seshPassword = password
}

/*** CREATE ACCOUNT ***/
function onClick_createAccount()
{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    
    function callback_create(result, payload)
    {
        if (result == RC_OK)
        {
            enterSesh(username, password, 0)
            alert("Account Created!")
        }
        else alert(payload)
    }

    const request = { username:username, password:password }
    callSpheem("createaccount", request, callback_create)
}

/*** LOGIN ***/
function onClick_login()
{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    function callback_login(result, payload)
    {
        if (result == RC_OK) enterSesh(username, password, payload);
        else alert(payload);
    }
    
    const request = { username:username, password:password }
    callSpheem("login", request, callback_login);
}

/*** PAY ***/
function onClick_pay()
{
    if (seshUsername == null) { alert("ERROR: seshUsername = null"); return; }
    if (seshPassword == null) { alert("ERROR: seshPassword = null"); return; }
    
    const recipient = document.getElementById("recipient").value;
    const amount = document.getElementById("amount").value;
    
    function callback_pay(result, payload)
    {
        if (result == RC_OK)
        {
            updateBalance();
            alert("Payment successful!");
        }
        else alert(payload);
    }

    const request = { username:seshUsername, password:seshPassword, recipient:recipient, amount:amount }
    callSpheem("pay", request, callback_pay)
}

function onClick_pay0() { }
function _main() { }
