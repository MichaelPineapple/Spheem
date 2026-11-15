var seshUsername = null
var seshPassword = null

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

/*** Pay ***/
function onClick_pay()
{
    const recipient = document.getElementById("recipient").value
    const amount = document.getElementById("amount").value
    
    function callback_pay(result, payload)
    {
        if (result == RC_OK)
        {
            updateBalance()
            alert("Payment successful!")
        }
        else alert(payload)
    }

    const request = { username:seshUsername, password:seshPassword, recipient:recipient, amount:amount }
    callSpheem("pay", request, callback_pay)
}

/*** Delete Account ***/
function onClick_deleteAccount()
{
    function callback_delete(result, payload)
    {
        if (result == RC_OK)
        {
            exitSesh()
            alert("Account deleted!")
        }
        else alert(payload)
    }
    
    const request = { username:seshUsername, password:seshPassword }
    callSpheem("delete", request, callback_delete)
}

/** Sign Out **/
function onClick_signOut()
{
    localStorage.setItem(SESHKEY_USERNAME, null)
    localStorage.setItem(SESHKEY_PASSWORD, null)
    window.location.href = "index.html"
}

function onLoad() {
    seshUsername = localStorage.getItem(SESHKEY_USERNAME)
    seshPassword = localStorage.getItem(SESHKEY_PASSWORD)
    updateBalance()
}
