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
    callSpheem(VERB_LOGIN, request, callback_update)
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
    callSpheem(VERB_PAY, request, callback_pay)
}

function onClick_signOut()
{
    signOut()
}

function onClick_settings()
{
    window.location.href = "settings.html"
}

function onLoad() {
    seshUsername = localStorage.getItem(SESHKEY_USERNAME)
    seshPassword = localStorage.getItem(SESHKEY_PASSWORD)
    document.getElementById("lbl_username").innerHTML = seshUsername
    updateBalance()
}
