const RC_OK = "OK"
const RC_FAIL = "FAIL"

const SESHKEY_USERNAME = "username"
const SESHKEY_PASSWORD = "password"

function post(url, request, callback)
{
    fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(request),
    })
    .then(response => response.json())
    .then(data => {
      callback(data.result, data.payload)
    })
    .catch((error) => {
      callback(RC_FAIL, error)
    });
}

function callSpheem(verb, request, callback)
{
    const url = "https://meowcle.net/cgi-bin/Spheem/endpoints/" + verb + ".js"
    post(url, request, callback)
}
