var news = $(this).attr('data-name');
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + news + '&api-key=DG0snt5ufAan5skXu03BuAbwu81bLsuA';
                $.ajax({url: queryURL, method: 'GET'})
                .done(function(response) {
                    var results = response.data;
                });