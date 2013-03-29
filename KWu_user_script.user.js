// ==UserScript==
// @name        KWu user script
// @namespace   http://www.kwugirl.com
// @description Testing greasemonkey user scripts
// @include     http://www.amazon.com/*
// @version     1
// ==/UserScript==
// Amazon linker exercise from http://www.teaching-materials.org/javascript/exercises/greasemonkey.html


section = document.getElementsByClassName("nav-subnav-item nav-category-button")[0].textContent; // grabbing the highlighted bar for indicating which section we're in
section = section.replace(/^\s+|\s+$/g, ''); // strip out whitespace in the category name to make comparison work

if (section == "Movies & TV") {
    document.body.style.background = "#f0f0f0"; // just changing bg to make sure we're getting into this if statement, so that this only applies to Movies & TV pages
    
    title = document.getElementById("btAsinTitle").textContent; //getting title
    title = title.replace(/\s\(.+$/, ''); // strip ending space + parentheses at the end, though might strip out legit parts of titles
    title = title.replace(/ /g, '+'); // replace spaces with + signs for URL
    
    var url = "<br><a href='http://www.rottentomatoes.com/search/?search=" + title + "'>Search Rotten Tomatoes for this title!</a>"

    document.getElementsByClassName("subtitle")[0].innerHTML += url; // adding it to the end of the actor info, above the star ratings
    
}

else {
    document.body.style.background = "#red"; // turns bg red on any non-Movie/TV page
}