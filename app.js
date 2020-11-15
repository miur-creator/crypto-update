var trendingCoins = []
var cryptoCoins = []

async function forexPairProvider() {
    // console.log(`the forexPair function has been called`)
    let url = `https://api.coingecko.com/api/v3/search/trending.json`
    let res = await fetch(url)

    let data = (await res.json()).coins.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]]))
    // data = data.coins.map(x => trendingCoins.push([x.item.name, x.item.symbol, x.item.thumb, x.item[`market_cap_rank`]]))

    trendingCoinsTemplate()

}

function trendingCoinsTemplate() {
    let tableParentElement = document.querySelector("#trending-div")
    newTableRows = []

    trendingCoins.forEach(element => {
        newTableRows.push(`<tr><td class="trending-td">${element[0]}</td><td class="trending-td">${element[1]}</td><td class="trending-td">${element[3]}</td><td class="trending-td"><img src=${element[2]}></td></tr>`)
    });

    let tableElement = `        
    <table class="trending-table">
        <th class="trending-coins">Trending coins</th>
        <tr>
            <th id="coin-trending-tag" class="trending-th">Coin</th>
            <th class="trending-th"></th>
            <th class="trending-th">Market placement</th>
            <th class="trending-th"></th>
        </tr>
        <tbody>
            ${newTableRows.join(``)}
        </tbody>
    </table>`



    tableParentElement.innerHTML += tableElement
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

async function topCoins() {
    let res = await fetch("https://coinranking1.p.rapidapi.com/coins", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c66e96d239msh3a7b72acc8ad80bp1f5c77jsna83f1e7778a7",
                "x-rapidapi-host": "coinranking1.p.rapidapi.com"
            }
        })
        // $iconUrl marketCap $symbol allTimeHigh history
        .then(res => res.json())
        .then(res => res.data.coins.map(coin => cryptoCoins.push([coin.iconUrl, coin.marketCap, coin.symbol, coin.allTimeHigh, coin.history, coin.rank])))
        .then(response => {
            console.log(`topCoins function response`)
        })
        .catch(err => {
            console.error(err);
        });

    allCoinsTemplate()
}

function allCoinsTemplate() {
    let tableParentDiv = document.querySelector("#coins-table")

    newTableRows = []

    cryptoCoins.forEach(element => {
        newTableRows.push(`<tr><td class="trending-td">${element[5]}</td><td class="trending-td">${element[2]}</td><td class="trending-td"><img width="30" height="30" src=${element[0]}></td><td class="trending-td">${Number(element[4][0]).toFixed(2)}</td><td class="trending-td">${Number(element[3].price).toFixed(2)}</td><td class="trending-td">$ ${new Intl.NumberFormat().format(Math.round(Number(element[1])))}</td></tr>`)
    });

    let tableElement = `      
    <table class="trending-table">
        <tr>
            <th class="trending-th"></th>
            <th id="coin-trending-tag" class="trending-th">Coin</th>
            <th class="trending-th"></th>
            <th class="trending-th">Curent Price</th>
            <th class="trending-th">All Time High</th>
            <th class="trending-th">Market Cap</th>
        </tr>
        <tbody>
            ${newTableRows.join(``)}
        </tbody>
  </table>`
  tableParentDiv.innerHTML += tableElement
}

// function allCoinsTemplate() {
//     let tableParentDiv = document.querySelector("#coins-table")
//     let tableParentElement = document.querySelector("#coins-table > table > tbody")
//     newTableRows = []

//     cryptoCoins.forEach(element => {
//         newTableRows.push(`<tr><td class="trending-td">${element[2]}</td><td class="trending-td"><img width="30" height="30" src=${element[0]}></td><td class="trending-td">${Math.round(element[4][0])}</td><td class="trending-td">${Math.round(element[3].price)}</td><td class="trending-td">${Math.round(Number(element[1])/1000000)}</td></tr>`)
//     });

//     tableParentElement.innerHTML += newTableRows.join(``)
//     // //console.log(tableParentElement.innerHTML)
// }

// function goofing() {
//     fetch("https://coinranking1.p.rapidapi.com/coins", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "c66e96d239msh3a7b72acc8ad80bp1f5c77jsna83f1e7778a7",
//                 "x-rapidapi-host": "coinranking1.p.rapidapi.com"
//             }
//         })
//         // iconUrl marketCap symbol allTimeHigh history
//         .then(res => res.json())
//         .then(res => res.data.coins)
//         .then(res => res.map(coin => ))
//         .then(response => {
//             console.log(response);
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }

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