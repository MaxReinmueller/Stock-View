$(document).ready(function(){
    
    $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=business&api-key=DG0snt5ufAan5skXu03BuAbwu81bLsuA`,
        method: "GET"
      }).then(function(res) {
        console.log(res);
       
     var trendingData= res.response.docs;
     trending(trendingData);
    }); 
});
function trending(trendingData){
console.log("got here 2");
for (let i = 0; i < trendingData.length; i++) {
console.log(trendingData[i].headline.main)
var trendingContainer = $(".onLoad").append(`<div class="trendingContainer"></div>`);

$(trendingContainer).append(`<div class="headline"><a href="${trendingData[i].web_url}">${trendingData[i].headline.main}</a></div>`);
$(trendingContainer).append(`<div class="snippet">${trendingData[i].snippet} </div>`);
$(trendingContainer).append("<br/>")
$(trendingContainer).append(`<a href="${trendingData[i].web_url}">${trendingData[i].web_url}</a>`);
$(trendingContainer).append("<br/>")
$(trendingContainer).append(`<img src="https://static01.nyt.com/${trendingData[i].multimedia[0].url}" />`);
}
}


$(".searchButton").click(function(event){
    event.preventDefault();
    $(".article").empty();
    let search = $('.searchArea').val().trim()
    console.log(search)
    $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=DG0snt5ufAan5skXu03BuAbwu81bLsuA`,
        method: "GET"
      }).then(function(response) {


     var data= response.response.docs;
     displayArticle(data);
    });
});
function displayArticle(data){
console.log(data);
for (let i = 0; i < data.length; i++) {
console.log(data[i].headline.main)
var articleContainer = $(".article").append(`<div class="articleContainer"></div>`);

$(articleContainer).append(`<div class="headline"><a href="${data[i].web_url}">${data[i].headline.main}</a></div>`);
$(articleContainer).append(`<div class="snippet">${data[i].snippet} </div>`);
$(articleContainer).append("<br/>")
$(articleContainer).append(`<a href="${data[i].web_url}">${data[i].web_url}</a>`);
$(articleContainer).append("<br/>")
$(articleContainer).append(`<img src="https://static01.nyt.com/${data[i].multimedia[0].url}" />`);
}
}
