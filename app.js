var trendingCoins = []

async function forexPairProvider() {
    console.log(`the forexPair function has been called`)
    let url = `https://api.coingecko.com/api/v3/search/trending.json`
    let res = await fetch(url)

    let data = (await res.json()).coins.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]]))
    // data = data.coins.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]]))

    trendingCoinsTemplate()

}



function trendingCoinsTemplate() {
    let tableParentElement = document.querySelector("#trending-div > table > tbody")
    newTableRows = []

    console.log(`the template function has been called`)
    console.log(trendingCoins)

    trendingCoins.forEach(element => {
        newTableRows.push(`<tr><td class="trending-td">${element[0]}</td><td class="trending-td">${element[1]}</td><td class="trending-td">${element[3]}</td><td class="trending-td"><img src=${element[2]}></td></tr>`)
    });

    tableParentElement.innerHTML += newTableRows.join(``)
    // //console.log(tableParentElement.innerHTML)
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

function goofing() {
    console.log(`the forexPair function has been called`)
    let url = `https://api.coingecko.com/api/v3/search/trending.json`
    fetch(url)
        .then(res => res.json())
        .then(res => res.coins)

    // let data = (await res.json()).coins.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]]))
    // data = data.coins.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]]))


}


//Mistakes were made
// function forexPairProvider() {
//     const url = `https://api.coingecko.com/api/v3/search/trending.json`

//     console.log(`the fetch function has been invoked`)
//     fetch(url)
//         .then(res => res.json())
//         .then(res => res.coins)
//         .then(res => res.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]])))
//     // .then(res =>
//     //     res.map(x => trendingCoins += `<tr><td class="trending-td">${x.item.name}</td><td class="trending-td">${x.item.symbol}</td><td class="trending-td">${x.item.thumb}</td><td class="trending-td">${x.item[`market_cap_rank`]}</td></tr>`)
//     // )
//     //.then(res => res.map(x => trendingCoins = (`hello idiot ${x.item.name}`)))
//     //.then(res => res.map(x => trendingCoins.push(Object.values(x.item))))

// }