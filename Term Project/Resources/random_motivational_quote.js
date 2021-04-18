/* JavaScript file for index.html */
/* Displays a random motivational quote each time on page load  */

$(document).ready(function() {
    var quotes = [];

    //list of quotes
    quotes.push('<p><em>"Don\'t let yesterday take up too much of today."</em> – Will Rogers</p>');
    quotes.push('<p><em>"People who are crazy enough to think they can change the world, are the ones who do."</em> – Rob Siltanen</p>');
    quotes.push('<p><em>"With the new day comes new strength and new thoughts."</em> – Eleanor Roosevelt</p>');
    quotes.push('<p><em>"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."</em> – Helen Keller</p>');
    quotes.push('<p><em>"Whenever you find yourself doubting how far you can go, just remember how far you have come."</em> – Unknown</p>');
    quotes.push('<p><em>"No one can tell you what you can or cannot do"</em> – Unknown</p>');
    quotes.push('<p><em>"Don\'t put off until tomorrow what you can do today"</em> – Benjamin Franklin</p>');
    quotes.push('<p><em>"The best preperation for tomorrow is doing your best today."</em> – H. Jackson Brown, Jr.</p>');
    quotes.push('<p><em>"The only one who can tell you \"you can\'t win\" is you and you don\'t have to listen."</em> – Jessica Ennis</p>');
    quotes.push('<p><em>"Slow down. Life is long, you can take it easy, and enjoy the journey. You can still make it interesting, even if you are taking the slower path."</em> – Kurt J. Mac</p>');


    var i = Math.floor(Math.random() * 10);
    
    $('#quoteBlock').html(quotes[i]);
});