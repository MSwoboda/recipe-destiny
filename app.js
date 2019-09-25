const APP_ID = "60bec2ae";
const APP_KEY = "411a6ce9c56353f66bde23265db8f48d";


var queryURL = "https://api.edamam.com/search?";

$.ajax({
    url: queryURL,
    method: "GET",
    data: {
        q: "chicken",
        app_id: APP_ID,
        app_key: APP_KEY,
        // health: ("alcohol-free", "gluten"),
        calories: "591-722",

    },
    success: function(response) {
        console.log(response);
    for (let index = 0; index < response.hits.length; index++) {
        const element = response[index];
        console.log(response.hits[index].recipe.label);
        var recipeDiv = ("<div>");
        
        $("#search-results").append(recipeDiv);
    
    }
    },
    error: function(xhr) {
        console.log("error")
    }
});








// $("#submit").on("click", function(event){
//     event.preventDefault();

//     var search = $("#recipeSearch").val().trim();


// });