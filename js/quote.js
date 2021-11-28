const quotes = [
    {
    quote: "When you go through hardships and decide not to surrender that is strength",
    anthor: "Arnold Schwarzenegger"
},
{
    quote: "It is kind of fun to do the impossible",
    anthor: "Walt Disney"
},
{
    quote: "There are better starters than me but I’m a strong finisher",
    anthor: "Usain Bolt"
},
{
    quote: "Tough times never last, but tough people do",
    anthor: "Robert H. Schuller"
},
{
    quote: "I’ve failed over and over and over again in my life and that is why I succeed",
    anthor: "Michael Jordan"
},
{
    quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is. – Angelina Jolie",
    anthor: "Angelina Jolie"
},
{
    quote: "I never dreamed about success, i worked for it.",
    anthor: "Estee Lauder"
},
{
    quote: "Do not try to be original,just try to be good",
    anthor: "Paul Rand"
},
{
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time",
    anthor: "Thmas Edison"
},
];

const byQuote = document.querySelector(".quote span:first-child");
const byAnthor = document.querySelector(".quote span:last-child");

const RanQuo = quotes[Math.floor(Math.random() * quotes.length)];


function handleQuote(){
	byQuote.innerText = RanQuo.quote;
	byAnthor.innerText = RanQuo.anthor;
}


handleQuote();
