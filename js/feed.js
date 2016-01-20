$(document).ready(function() {

    // WOW JS
    new WOW().init();

    /* API KEYS*/
    // SEARCH API KEY & URL
    "use strict";
    var searchAPI = "4634ebb67ff1f2c505246874edd505ed:7:74061741";
    var searchURL = ""; 

    // MOST POPULAR ARTICLES API KEY & URL
    var popularAPI = "4cbdf26656996c15cd99d80fbcfe9b99%3A18%3A74061741";
    var popularURL = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=" + popularAPI;

    // TOP STORIES API KEY & URL
    var topStoriesAPI = "dbedf6c902da5f3bcd66b13a15d45689%3A2%3A74061741";
    var topStoriesURL = "http://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + topStoriesAPI;

    // HIDING THE INTRO DIV IN 4.6 SECONDS
    var hideDiv = setTimeout(hideIntro, 3200);
    function hideIntro() {
        $(".intro").addClass("hideDiv");
    }
    

    "use strict";
    var d = document;
    var mainDivToAppendTo = d.getElementById("feed");
    var cardTitle = d.getElementById("card-title");
    var postedBy = d.getElementById("post-by");
    var numberOfPosts = d.getElementById("result-num");
    var category = d.getElementById("view-type");
    var imgSource  = "";
    var link = "";

    // GETTING THE BUTTON ELEMENTS
    var hotNews = d.getElementById("hot");
    var topNews = d.getElementById("top");
    var techNews = d.getElementById("tech");
    var businessNews = d.getElementById("business");
    var politicsNews = d.getElementById("politics");
    var worldNews = d.getElementById("world");
    var sportsNews = d.getElementById("sports");

    // DISPLAYS MOST POPULAR NEWS
    hotNews.onclick = function() {
        extractData(popularURL);
    }

    // DISPLAYS TOP STORIES FROM NYT
    topNews.onclick = function() {
        extractData(topStoriesURL);
    }

    // DISPLAYS TOP TECH NEWS
    techNews.onclick = function() {
        var link = storyByCategory("technology");
        extractData(link);
        $("#tech").toggleClass("select");
    }

    // DISPLAYS TOP BUSINESS NEWS
    businessNews.onclick = function() {
        var link = storyByCategory("business");
        extractData(link);
        $("#business").toggleClass("select");
    }

    // DISPLAYS TOP POLITICS NEWS
    politicsNews.onclick = function() {
        var link = storyByCategory("politics");
        extractData(link);
        $("#politics").toggleClass("select");
    }

    // DISPLAYS TOP WORLD NEWS
    worldNews.onclick = function() {
        var link = storyByCategory("world");
        extractData(link);
        $("#world").toggleClass("select");
    }

    // DISPLAYS TOP SPORTS NEWS
    sportsNews.onclick = function() {
        var link = storyByCategory("sports");
        extractData(link);
        $("#sports").toggleClass("select");
    }

    function storyByCategory(category) {
        // TOP STORIES FROM CATEGORIES
        return "http://api.nytimes.com/svc/topstories/v2/" + category + ".json?api-key=" + topStoriesAPI;
    }

    // CREATES BASIC CARD STUCTURE TO SHOW THE NEWS
    function createCardElements() {
        "use strict";
        var outerDiv = d.createElement("div"); //give this class col-md-3
        var innerDiv = d.createElement("div"); //give this class col-md-12 card
        var postLink = d.createElement("a"); //link to post, get target _blank
        var image = d.createElement("img");
        var title = d.createElement("p"); //give id of #card-title
        var author = d.createElement("p"); //give id of #post-by
        setAttributes(outerDiv, innerDiv, postLink, image, title, author);
        generateCard(outerDiv, innerDiv, postLink, image, title, author);
    }

    // SETS THE APPROPRIATE ATTRIBUTES TO THE HTML ELEMENTS
    function setAttributes(outerDiv, innerDiv, postLink, image, title, author) {
        
        // SETS CLASS NAMES TO DIVS
        outerDiv.className = "col-md-4";
        innerDiv.className = "col-md-12 card";  

        // SETS ATTRIBUTES TO LINK
        postLink.setAttribute("href", link);
        postLink.setAttribute("target", "_blank");

        // TO THUMBNAIL, TITLE, AND AUTHOR
        image.className = "img-responsive";
        image.setAttribute("id", "img-card");
        image.setAttribute("src", imgSource);

        title.setAttribute("id", "card-title");
        title.innerHTML = cardTitle;

        author.setAttribute("id", "post-by");
        author.innerHTML = postedBy;
    }

    // GENERATE THE ENTIRE CARD WITH ORDER
    function generateCard(outerDiv, innerDiv, postLink, image, title, author) {

        // APPENDS IMAGE, TITLE, AUTHOR TO LINK
        postLink.appendChild(image);
        postLink.appendChild(title);
        postLink.appendChild(author);

        // APPENDS THE LINK TO THE CARD
        innerDiv.appendChild(postLink);

        // APPENDS THE MAIN CARD TO OUTER DIV
        outerDiv.appendChild(innerDiv);

        // APPENDS THE CARD TO MAIN DIV
        mainDivToAppendTo.appendChild(outerDiv);
    }

    //MOST POPULAR IS SELECTED AND TOGGLED DEFAULTLY
    function extractData(url) {
        mainDivToAppendTo.innerHTML = null;
        $.getJSON(url, function(api) {
            api.results.forEach(function(data) {
                link = data.url;
                cardTitle = data.title.length > 48 ? data.title.substring(0, 48) + ".." : data.title;
                postedBy = data.byline == "" ? data.source : data.byline;
                if(url == popularURL) { imgSource = data.media[0]["media-metadata"][0].url; }
                // else { imgSource = data.multimedia[1]["url"]; }
                createCardElements();
            });
        });
    }
});