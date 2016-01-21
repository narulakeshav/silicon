# Silicon
Silicon uses The New York Times API that shows you the Most Popular/Trending and Top News Stories from the NYT Website, as well as the Top News Stories in Technology, Business, Politics, World, Sports, and Travel.
<br><br>
To view Silicon, go to [Add URL here](http://github.com/narulakeshav/silicon)
<br><br>
![Screenshot](https://i.imgur.com/RFj8fS1.png)

# What can you do?
Silicon allows you to view the Most Popular News, Top News Stories, or Top Stories from specific sections such as Technology, Business, Politics, World, Sports, and Travel sections.
<br><br>
In addition, you can also search for articles by using the instant search bar with keyboards, headlines, or name of the person. You can see the results instantly and clicking the card will take you to the link of the article/post.

# What I used
To develop Silicon, I used:

* Jade (HTML Preprocessor)
* SCSS (CSS Preprocessor)
* JavaScript
* jQuery
* JSON
* Bootstrap
* The New York Times API

# The 3 APIs
I used 3 of The New York Times API:

* Most Popular API
    * Most Popular API allows you to view the most popular news stories for 1 day, 7 days, or 30 days on The New York Times.
    * To read more, refer to the [Most Popular API Documentation](http://developer.nytimes.com/docs/most_popular_api/) 
* Top Stories API
    * Top Stories API allows you to see the top articles and post from NYT website. You can also narrow down your search to individual section, such as Technology, Business, Politics, World, Sports, or Travel.
    * To read more, refer to the [Top Stories API Documentation](http://developer.nytimes.com/docs/top_stories_api/)
* Articles Search API
    * Articles Search API allows you to search for any articles on The New York Times and retrieves headlines, abstracts, lead paragraphs, links to associated multimedia and other article metadata. 
    * To read more, refer to the [Articles Search API Documentation](http://developer.nytimes.com/docs/read/article_search_api_v2)

# Design
Designing Silicon was pretty simple. I only used `Twitter Bootstrap`, `Animate.css`, `WOW.js`, `Material Icons`, and `Font Awesome`. I wanted to follow NYT black and white theme so it looks consistent. 
<br><br>
For larger screen such as for laptops and desktops, there is a sticky sidebar that lets you navigate through any sections. In smaller devices, such as phones and tablets, there's a fixed navbar which allows you to do the same thing.

# The New York Times
The content belong to The New York Times. In no way, am I affiliated with the content or The New York Times. This is just a project where I used and implemented the New York Times APIs.

# Why
I wanted to work on a News feed but I wasn't able to find lots of news websites that offered API to developers. Then I came across NYT and they had great API that allowed you to grab their content via `JSON` and search for the articles on their websites. A better documentation would've been very helpful, but their APIs are fantasic.

# What I learned
This was one of the hardest projects I worked on. I was new to `JSON` and grabbing data from `JSON` over a server and using that to display the data. I came across many complications, few of them being getting the images/thumbnail for each post, and iterating over the `JSON`. I learned many new techniques that helped me iterate over the `JSON` and grab the right results. 