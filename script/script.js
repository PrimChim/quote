console.log("Hello there")
var category = 'happiness';
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'e7F75bFf3pBXpPb9F497lA==2nkbvjNPRFfEcqbS' },
    success: function(result) {
        const { quote, author } = result[0];
        document.getElementById('quote').innerHTML = quote;
        document.getElementById('author').innerHTML = author;
        var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + "galaxy" + "')";
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


