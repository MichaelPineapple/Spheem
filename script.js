//const RC_SUCCESS = "SUCCESS"
//const RC_INVALID_PARAMS = "INVALID_PARAMS"
//const RC_USERNAME_TAKEN = "USERNAME_TAKEN"
//const RC_UNKNOWN_ERR = "UNKNOWN_ERR"
//const RC_ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND"
//const RC_INCORRECT_PASSWORD = "INCORRECT_PASSWORD"
//const RC_RECIPIENT_NOT_FOUND = "RECIPIENT_NOT_FOUND"
//const RC_INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"
//
//var seshUsername = null;
//var seshPassword = null;

function post(url, request, callback)
{
    console.log(request);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: request,
    //mode: "cors"
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      callback(data.resultCode, data.payload);
    })
    .catch((error) => {
      console.error('Error:', error);
      callback("LOCAL_ERR", null);
    });
}

//function updateBalance()
//{
//    function callback_update(_resultCode, _payload)
//    {
//        if (_resultCode == RC_SUCCESS) document.getElementById("lbl_balance").innerHTML = _payload;
//        else alert("An error occurred while updating balance");
//    }
//    const URL = 'https://us-central1-spheem-2a540.cloudfunctions.net/login';
//    requestObj = { username:seshUsername, password:seshPassword };
//    mclHttPost(URL,requestObj, callback_update);
//}
//
//
//function enterSesh(_username, _password, _balance)
//{
//    document.getElementById("lbl_balance").innerHTML = _balance;
//    document.getElementById("lbl_username").innerHTML = _username;
//    document.getElementById("seshDiv").hidden = false;
//    document.getElementById("loginDiv").hidden = true;
//    seshUsername = _username;
//    seshPassword = _password;
//}
//
//
//
///*** CREATE ACCOUNT ***/
//function onClick_createAccount()
//{
//    const username = document.getElementById("username").value;
//    const password = document.getElementById("password").value;
//    
//    function callback_create(_resultCode, _payload)
//    {
//        if (_resultCode == RC_SUCCESS)
//        {
//            enterSesh(username, password, 0);
//            alert("Account Created!");
//        }
//        else
//        {
//            alert(_resultCode);
//        }
//    }
//
//    const URL = 'https://us-central1-spheem-2a540.cloudfunctions.net/createAccount';
//    requestObj = { username:username, password:password };
//    mclHttPost(URL,requestObj, callback_create);
//}
//
/*** LOGIN ***/
function onClick_login()
{
    //const username = document.getElementById("username").value;
    //const password = document.getElementById("password").value;
    
    function callback_login(_resultCode, _payload)
    {
//        if (_resultCode == RC_SUCCESS)
//        {
//            enterSesh(username, password, _payload);
//        }
//        else
//        {
//            alert(_resultCode);
//        }
        alert("Callback!");
    }

    const URL = 'http://localhost:8080/hello';
    request = "login";
    post(URL, request, callback_login);
}
//
///*** PAY ***/
//function onClick_pay()
//{
//    if (seshUsername == null) { alert("ERROR: seshUsername = null"); return; }
//    if (seshPassword == null) { alert("ERROR: seshPassword = null"); return; }
//    
//    const recipient = document.getElementById("recipient").value;
//    const amount = document.getElementById("amount").value;
//    
//    function callback_pay(_resultCode, _payload)
//    {
//        if (_resultCode == RC_SUCCESS)
//        {
//            updateBalance();
//            alert("Payment successful!");
//        }
//        else
//        {
//            alert(_resultCode);
//        }
//    }
//
//    const URL = 'https://us-central1-spheem-2a540.cloudfunctions.net/pay';
//    requestObj = { username:seshUsername, password:seshPassword, recipient:recipient, amount:amount };
//    mclHttPost(URL,requestObj, callback_pay);
//}

function onClick_pay0()
 {
 
 }

 
 function _main()
 {

 }
