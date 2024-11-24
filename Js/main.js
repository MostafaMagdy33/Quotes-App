var quoteP =  document.getElementById("Quote");
var authorp =  document.getElementById("author");

var arryOfQuotes =[
{
    quote:'“Be yourself; everyone else is already taken.” ', 
    
    author:'― Oscar Wilde '
}
,
{
    quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ", 
    
    author:"― Marilyn Monroe"
 
}
,
{
    quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", 
    
    author:"― Albert Einstein"
 
}
,
{
    quote:"“A room without books is like a body without a soul.”", 
    
    author:"― Marcus Tullius Cicero"
 
}
,
{
    quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", 
    
    author:"― Dr. Seuss"
 
}
,
{
    quote:"“Dont walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”", 
    
    author:"― Dr. Seuss"
 
}
,
{
    quote:"“Always forgive your enemies; nothing annoys them so much.”", 
    
    author:"― Oscar Wilde"
 
}
,
{
    quote:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”", 
    
    author:"― Ralph Waldo Emerson"
 
}

,
{
    quote:"“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”", 
    
    author:"― Marilyn Monroe"
 
}

,
{
    quote:"“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”", 
    
    author:"― Marilyn Monroe"
 
}
,
{
    quote:"“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”", 
    
    author:"― Albert Einstein"
 
}
]



function showData(){
    var showQuote =arryOfQuotes[Math.round(Math.random()*arryOfQuotes.length)] ;

    quoteP.innerHTML = showQuote.quote ;
   authorp.innerHTML = showQuote.author ;  
}


