/* JavaScript file for index.html */
/* Displays a random motivational quote each time on page load  */

$(document).ready(function() {
    var quotes = [];
    quotes.push("a");
    quotes.push("b");
    quotes.push("c");
    quotes.push("d");
    quotes.push('<p><em>"Whenever you find yourself doubting how far you can go, just remember how far you have come."</em> - Unknown</p>');
    
    var i = Math.floor(Math.random() * 5);
    
    $('#quoteBlock').html(quotes[i]);
});