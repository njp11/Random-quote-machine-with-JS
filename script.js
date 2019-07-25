$(document).ready(function(){
  getQuote();
  
var randomQuote;
var author;
function getQuote(){
  
 let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
     randomQuote = data.quoteText;
    author = data.quoteAuthor;
    $("#text").html(data.quoteText);
    $("#author").html('- ' + data.quoteAuthor);
  });

};
$("#tweet-quote").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + randomQuote + '-' + author);
});
$("#new-quote").on("click", function(){
  getQuote();
});
  
});