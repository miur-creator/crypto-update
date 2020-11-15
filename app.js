var trendingCoins = []

function forexPairProvider() {
    const url = `https://api.coingecko.com/api/v3/search/trending.json`
    const forexElement = document.getElementById(`#content-div`)

    console.log(`the fetch function has been invoked`)
    fetch(url)
        .then(res => res.json())
        .then(res => res.coins)
        .then(res => res.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]])))
        console.log(trendingCoins)
}

function trendingCoinsTemplate(params) {

}

function onUserLogin() {
    console.log(`the login function has been invoked`)
      let usernameElement = document.querySelector("#username")
      let passwordElement = document.querySelector("#password")

      auth.signInWithEmailAndPassword(usernameElement.value, passwordElement.value)
        .then(res => {
          console.log('Looged in succsessfuly')
          document.querySelector("#welcome-message").innerHTML = `Welcome ${res.user.email}`
          document.querySelector("body > div > div.navbar > div > button").parentElement.removeChild(document.querySelector("body > div > div.navbar > div > button"))
        })
        .catch(err => console.log(err))
    }