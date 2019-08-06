// code to work with html
function buildQueryURL() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var queryParams = { "api-key": "DG0snt5ufAan5skXu03BuAbwu81bLsuA"};
   
    // queryParams.q = $(".addNews")
    // .val()
    // .trim();
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams)
}

$(document).on('click', function() {
const queryUrl = buildQueryURL()
$.ajax({
        url: queryUrl,
        method: "GET" 
    })
    // After data comes back from the request
    .then(res => console.log(res))

});


