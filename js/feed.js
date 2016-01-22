$(document).ready(function() {

    // WOW JS & TOOLTIP
    new WOW().init();

    // GETTING TOOLTIPS TO WORK
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // SEARCH API KEY & URL
    "use strict";
    var searchAPI = "4634ebb67ff1f2c505246874edd505ed%3A7%3A74061741";
    var searchURL = "";

    // MOST POPULAR ARTICLES API KEY & URL
    var popularAPI = "4cbdf26656996c15cd99d80fbcfe9b99%3A18%3A74061741";
    var popularURL = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=" + popularAPI;

    // TOP STORIES API KEY & URL
    var topStoriesAPI = "dbedf6c902da5f3bcd66b13a15d45689%3A2%3A74061741";
    var topStoriesURL = "http://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + topStoriesAPI;

    // GENERAL CARD COMPONENTS
    "use strict";
    var d = document;
    var mainDivToAppendTo = d.getElementById("feed");
    var cardTitle = d.getElementById("card-title");
    var postedBy = d.getElementById("post-by");
    var numberOfPosts = d.getElementById("result-num");
    var viewing = d.getElementById("view-type");
    var loadMessage = d.getElementById("load-message");
    var input = d.getElementById("input");
    var link = "";
    var imgSource = "";

    // GETTING THE BUTTON ELEMENTS
    var hotNews = d.getElementById("hot");
    var topNews = d.getElementById("top");
    var techNews = d.getElementById("tech");
    var businessNews = d.getElementById("business");
    var politicsNews = d.getElementById("politics");
    var worldNews = d.getElementById("world");
    var sportsNews = d.getElementById("sports");
    var fashionNews = d.getElementById("fashion");
    var travelNews = d.getElementById("travel");

    // NAVBAR BUTTON LINKS FOR SMALL DEVICES ONLY
    var liPopular = d.getElementById("li-popular");
    var liTop = d.getElementById("li-top");
    var liTech = d.getElementById("li-tech");
    var liBusiness = d.getElementById("li-business");
    var liPolitics = d.getElementById("li-politics");
    var liWorld = d.getElementById("li-world");
    var liSports = d.getElementById("li-sports");
    var liFashion = d.getElementById("li-fashion");
    var liTravel = d.getElementById("li-travel");

    // DISPLAYING RANDOM LOAD MESSAGE
    loadMessage.innerHTML = randomLoadMessage();

    // HIDING THE INTRO DIV IN 3.4 SECONDS
    var hideDiv = setTimeout(function() {
        $(".intro").addClass("hideDiv");
    }, 3400);

    // SHOWS THE TOP AND TRENDING NEWS ON CLICK
    function mainButtonClick(url, id, name) {
        extractData(url);
        $(".options").removeClass("top-select");
        $(".options").removeClass("select");
        $(id).addClass("top-select");
        viewing.innerHTML = name;
    }

    // SHOWS THE INDIVIDUAL CATEGORY RESULTS ON THE SIDBAR BUTTON CLICK
    function categoryButtonClick(category, id, name) {
        var link = storyByCategory(category);
        extractData(link);
        $(".options").removeClass("top-select");
        $(".options").removeClass("select");
        $(id).addClass("select");
        viewing.innerHTML = name;
    }

    // TOP STORIES FROM CATEGORIES
    function storyByCategory(category) {
        return "http://api.nytimes.com/svc/topstories/v2/" + category + ".json?api-key=" + topStoriesAPI;
    }

    // DISPLAYS MOST POPULAR NEWS
    hotNews.onclick = function() {
        mainButtonClick(popularURL, "#hot", "Most Popular");
    }

    // DISPLAYS TOP STORIES FROM NYT
    topNews.onclick = function() {
        mainButtonClick(topStoriesURL, "#top", "Top Stories");
    }

    // DISPLAYS TOP TECH NEWS
    techNews.onclick = function() {
        categoryButtonClick("technology", "#tech", "Techonology");
    }

    // DISPLAYS TOP BUSINESS NEWS
    businessNews.onclick = function() {
        categoryButtonClick("business", "#business", "Business");
    }

    // DISPLAYS TOP POLITICS NEWS
    politicsNews.onclick = function() {
        categoryButtonClick("politics", "#politics", "Politics");
    }

    // DISPLAYS TOP WORLD NEWS
    worldNews.onclick = function() {
        categoryButtonClick("world", "#world", "World");
    }

    // DISPLAYS TOP SPORTS NEWS
    sportsNews.onclick = function() {
        categoryButtonClick("sports", "#sports", "Sports");
    }

    // DISPLAYS TOP FASHION NEWS
    fashionNews.onclick = function() {
        categoryButtonClick("fashion", "#fashion", "Fashion");
    }

    // DISPLAYS TOP TRAVEL NEWS
    travelNews.onclick = function() {
        categoryButtonClick("travel", "#travel", "Travel");
    }

    function listItemMainClicked(url, name) {
        extractData(url);
        viewing.innerHTML = name;
    }

    // DISPLAYS BUTTON LINKS FOR SMALLER DEVICES
    function listItemClicked(category, id, name) {
        var link = storyByCategory(category);
        extractData(link);
        viewing.innerHTML = name;
    }

    // CLOSES THE NAVBAR WHEN A BUTTON IS CLICKED
    $('.navbar-collapse').click('a', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // DISPLAYS MOST POPULAR NEWS
    liPopular.onclick = function() {
        listItemMainClicked(popularURL, "Most Popular");
    }

    // DISPLAYS TOP STORIES
    liTop.onclick = function() {
        listItemMainClicked(topStoriesURL, "Top Stories");
    }

    // DISPLAYS TOP TECH NEWS
    liTech.onclick = function() {
        listItemClicked("technology", "#li-tech", "Techonology");
    }

    // DISPLAYS TOP BUSINESS NEWS
    liBusiness.onclick = function() {
        listItemClicked("business", "#li-business", "Business");
    }

    // DISPLAYS TOP POLITICS NEWS
    liPolitics.onclick = function() {
        listItemClicked("politics", "#li-politics", "Politics");
    }

    // DISPLAYS TOP WORLD NEWS
    liWorld.onclick = function() {
        listItemClicked("world", "#li-world", "World");
    }

    // DISPLAYS TOP SPORTS NEWS
    liSports.onclick = function() {
        listItemClicked("sports", "#li-sports", "Sports");
    }

    // DISPLAYS TOP SPORTS NEWS
    liFashion.onclick = function() {
        listItemClicked("fashion", "#li-fashion", "Fashion");
    }

    // DISPLAYS TOP TRAVEL NEWS
    liTravel.onclick = function() {
        listItemClicked("travel", "#li-travel", "Travel");
    }

    // CREATES BASIC CARD STUCTURE TO SHOW THE NEWS
    function createCardElements() {
        "use strict";
        var outerDiv = d.createElement("div"); //give this class col-md-3
        var innerDiv = d.createElement("div"); //give this class col-md-12 card
        var postLink = d.createElement("a"); //link to post, get target _blank
        var image = d.createElement("img"); // give id of #img-card
        var title = d.createElement("p"); //give id of #card-title
        var author = d.createElement("p"); //give id of #post-by
        setAttributes(outerDiv, innerDiv, postLink, image, title, author);
        generateCard(outerDiv, innerDiv, postLink, image, title, author);
    }

    // SETS THE APPROPRIATE ATTRIBUTES TO THE HTML ELEMENTS
    function setAttributes(outerDiv, innerDiv, postLink, image, title, author) {

        // SETS CLASS NAMES TO DIVS
        outerDiv.className = "col-md-4 wow fadeIn";
        innerDiv.className = "col-md-12 card";
        innerDiv.setAttribute("data-wow-delay", "0.2s");

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

    // FIRST TIME CALL
    var first = true;
    firstTime(popularURL);

    // DOESN'T CHANGE THE MAIN DIV TO NULL IF IT'S FIRST TIME
    function firstTime(url) {
        if (first) {
            first = false;
            extractData(url);
        }
    }

    //MOST POPULAR IS SELECTED AND TOGGLED DEFAULTLY
    function extractData(url) {
        if (!first) {
            // CLEARS ALL THE CARD FROM THE HTML DOC
            mainDivToAppendTo.innerHTML = null;
            $.getJSON(url, function(api) {
                //GETS THE NUMBER OF POSTS VIA THE API
                numberOfPosts.innerHTML = api["num_results"] + " Results";
                var popResults = 0;
                api.results.forEach(function(data) {
                    // GETS THE URL OF THE POST, TITLE OF POST, AND AUTHOR NAME (WHICH IS SHORTENED DOWN)
                    link = data.url;
                    cardTitle = data.title.length > 43 ? data.title.substring(0, 43) + ".." : data.title;
                    postedBy = (data.byline == "") ? data.source : (data.byline.length > 46) ? data.byline.substring(0, 46) + " .." : data.byline;
                    popResults++;
                    // IF SEARCHING FOR MOST POPULAR, CHECK IF MEDIA IF UNDEFINED. IF NOT, GET THE URL
                    if (url == popularURL) {
                        var source = data.media[0];
                        if (!source || source == undefined) { imgSource = "img/img-nyt.png"; } 
                        else {
                            var s = data.media[0]["media-metadata"][0];
                            if (!s || s == undefined) { imgSource = "img/img-nyt.png"; }
                            else { imgSource = s.url; }
                        }
                    }
                    // OTHERWISE, IF SEARCHING FOR TOP STORIES (IN CATEGORIES), DO THE SAME WITH DIFF FORMAT
                    else {
                        var src = data.multimedia[1];
                        if (!src || src == undefined) { imgSource = "img/img-nyt.png"; } 
                        else { imgSource = data.multimedia[1].url; }
                    }
                    if(url == popularURL) { numberOfPosts.innerHTML = popResults + " Results"; }
                    // CREATES THE NECESSARY CARD ELEMENTS
                    createCardElements();
                });
            });
        }
    }

    // SHOWS SEARCH RESULTS WHEN THE USER PRESSES ENTER
    $("#input").keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $(".options").removeClass("top-select");
            $(".options").removeClass("select");
            searchArticles(this.value);
            $("#input").val("");
        }
    });

    // MAKES THE REQUEST AND DISPLAYS THE NEWS BASED ON RESULTS
    function searchArticles(term) {
        viewing.innerHTML = term;
        // REPLACES ALL THE SPACES IN SEARCH CONTENT WITH +
        term = term.replace(/ /g, "+");
        searchURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + searchAPI;
        var prefix = "http://static01.nyt.com/";
        mainDivToAppendTo.innerHTML = null;
        $.getJSON(searchURL, function(api) {
            var i = 0;
            api.response.docs.forEach(function(data) {
                // GETS THE LINK OF POST, AND CHECKS FOR THE MEDIA (WHETHER IT'S UNDEFINED OR NOT)
                link = data.web_url;
                var src = data.multimedia[2];
                if (!src || src == undefined) { src = "img/img-nyt.png"; }
                else { imgSource = prefix + data.multimedia[2].url; }
                // GETS THE CARD TITLE, THE SECTION IT'S POSTED IN, NUMBER OF POSTS, AND CREATES CARD ELEMENTS
                cardTitle = (data.headline.main.length > 43) ? data.headline.main.substring(0, 43) + " .." : data.headline.main;
                postedBy = "In " + data["section_name"];
                i++;
                createCardElements();
            });
            numberOfPosts.innerHTML = i + " results";
        });
    }

    // DISPLAYS FUNNY/RANDOM MESSAGES IN LOAD
    function randomLoadMessage() {
        var arr = ["Shovelling coal into the server ..", 
                "At least you're not on hold ..", 
                "I'm testing your patience ..", 
                "A few bits tried to escape, but we caught them ..", 
                "The bits are flowing slowly today ..", 
                "The architects are still drafting ..", 
                "The bits are still breeding ..", 
                "Would you like fries with that? ..", 
                "The server is powered by a lemon and two electrodes ..", 
                "Waiting for satellite moves into position .."];
        return arr[Math.floor(Math.random() * arr.length)];
    }
});