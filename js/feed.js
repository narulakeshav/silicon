$(document).ready(function() {

    /* API KEYS*/
    // SEARCH API KEY & URL
    "use strict";
    var searchAPI = "4634ebb67ff1f2c505246874edd505ed:7:74061741";
    var searchURL = ""; 

    // MOST POPULAR ARTICLES API KEY & URL
    var popularAPI = "4cbdf26656996c15cd99d80fbcfe9b99\:18\:74061741";
    var popularURL = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=" + popularAPI;
    console.log(popularURL);
    // CALLING THE MAIN FUNCTION
    mostPopular(popularURL);

    // TOP STORIES API KEY & URL
    var topStoriesAPI = "dbedf6c902da5f3bcd66b13a15d45689:2:74061741";
    var topStoriesURL = "";

    "use strict";
    var d = document;
    var mainDivToAppendTo = d.getElementById("feed");
    var cardTitle = d.getElementById("card-title");
    var postedBy = d.getElementById("post-by");
    var imgSource  = "";
    var link = "";


    // MOST POPULAR ARTICLES API KEY & URL
    var popularAPI = "4cbdf26656996c15cd99d80fbcfe9b99\:18\:74061741";
    var popularURL = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=" + popularAPI;
    
    // MOST POPULAR IS SELECTED AND TOGGLED DEFAULTLY
    function mostPopular(popularURL) {
        $.getJSON(popularURL, function(popular) {
            popular.forEach(function(data) {
                link = data.results.url;
                cardTitle = data.results.title;
                if(data.results.byline == "") { postedBy = data.results.source; }
                else { postedBy = data.results.byline; }
                imgSource = data.results.media[0].media-metadata[10].url;
                createCardElements();
            });
        });
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
        outerDiv.className = "col-md-3";
        innerDiv.className = "col-md-12 card";  

        // SETS ATTRIBUTES TO LINK
        postLink.setAttribute("href", link);
        postLink.setAttribute("target", "_blank");

        // TO THUMBNAIL, TITLE, AND AUTHOR
        image.className = "img-responsive";
        image.setAttribute("id", "img-card");
        image.setAttribute("src", imgSource);

        title.setAttribute("id", "cardTitle");
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

});