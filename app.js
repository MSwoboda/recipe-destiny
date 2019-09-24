var queryURL = "https://api.edamam.com/search?q=chicken&app_id=60bec2ae&app_key=411a6ce9c56353f66bde23265db8f48d"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

})