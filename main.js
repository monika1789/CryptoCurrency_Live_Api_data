async function getData(img_index, display_index) {
    let track = document.getElementsByTagName('img')[img_index].attributes[2].value;
    let result = await fetch(`http://api.coinlayer.com/api/live?access_key=f39078501181b90abbb516e482d5c8bb&target=GBP&symbols=${track}`)
    let response = await result.json();
    console.log(response)
    let display = response.rates[`${track}`]
    let displayData = document.getElementsByTagName('h2')[display_index].attributes[0].value;
    document.getElementById(`${displayData}`).innerHTML = display 
}

