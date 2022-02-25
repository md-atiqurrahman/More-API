function loadQuotes(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data));
}

function displayQuotes(quotes){
    const blockQuoteElement = document.getElementById('quotes');
    blockQuoteElement.innerText = quotes.quote;
}