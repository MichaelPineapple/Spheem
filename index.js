function signIn(username, password)
{
    localStorage.setItem(SESHKEY_USERNAME, username)
    localStorage.setItem(SESHKEY_PASSWORD, password)
    window.location.href = "account.html"
}

/*** Create Account ***/
function onClick_createAccount()
{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    
    function callback_create(result, payload)
    {
        if (result == RC_OK)
        {
            alert("Account Created!")
            signIn(username, password)
        }
        else alert(payload)
    }

    const request = { username:username, password:password }
    callSpheem(VERB_CREATE, request, callback_create)
}

/*** Login ***/
function onClick_login()
{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    function callback_login(result, payload)
    {
        if (result == RC_OK) signIn(username, password)
        else alert(payload)
    }
    
    const request = { username:username, password:password }
    callSpheem(VERB_LOGIN, request, callback_login)
}
