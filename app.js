function forexPairProvider() {
    const url = `https://www.freeforexapi.com/api/live`
    const forexElement = document.getElementById(`#content-div`)

    console.log(`the function has been invoked`)
}

function onUserLogin() {
      let usernameElement = document.querySelector("#username")
      let passwordElement = document.querySelector("#password")

      auth.signInWithEmailAndPassword(usernameElement.value, passwordElement.value)
        .then(res => {
          console.log('Looged in succsessfuly')
          document.querySelector("#welcome-message").innerHTML = `Welcome ${res.user.email}`
          document.querySelector("body > div > div.navbar > div > button").parentElement.removeChild(document.querySelector("body > div > div.navbar > div > button"))
        })
    }