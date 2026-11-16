var seshUsername = null
var seshPassword = null

/*** Delete Account ***/
function onClick_deleteAccount()
{
    if (!confirm("Are you sure?")) return
    
    function callback_delete(result, payload)
    {
        if (result == RC_OK)
        {
            alert("Account deleted!")
            signOut()
        }
        else alert(payload)
    }
    
    const request = { username:seshUsername, password:seshPassword }
    callSpheem(VERB_DELETE, request, callback_delete)
}

/*** Update Password ***/
function onClick_updatePassword()
{
    const newPassword = document.getElementById("newPassword").value
    
    function callback_update(result, payload)
    {
        if (result == RC_OK) 
        {
            localStorage.setItem(SESHKEY_PASSWORD, newPassword)
            seshPassword = newPassword
            alert("Update successful!")
        }
        else alert(payload)
    }

    const request = { username:seshUsername, password:seshPassword, new_password:newPassword }
    callSpheem(VERB_UPDATE, request, callback_update)
}

function onLoad() {
    seshUsername = localStorage.getItem(SESHKEY_USERNAME)
    seshPassword = localStorage.getItem(SESHKEY_PASSWORD)
}
