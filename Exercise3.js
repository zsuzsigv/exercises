// Exercise No. 3

values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
colors = ['Clubs','Diamonds','Hearts','Spades'];

class Card {
  constructor(color, value) {
    this.color = color;
    this.value = value;
  }
  }
  
 class Deck {
   constructor(amount) {
   this.amount = amount;
   this.cards = this.getSomeCards();
  }
  
  draw() {
  var card = this.deck.splice(0,1).toString();
  this.amount = this.amount - 1;
  var c = card.split(' ')[1];
  switch (c) {
  case 'Clubs': this.clubs -=1;
  break;
  case 'Diamonds': this.diamonds -=1;
  break;
  case 'Hearts': this.hearts -=1;
  break;
  case 'Spades': this.spades -=1;
  break;
  }
  return card;
  }
  
  lookup() {
  var message = this.amount.toString() + " cards - " + this.clubs.toString() + " Clubs, " + this.diamonds.toString() + " Diamonds, " + this.hearts.toString() +  " Hearts, " + this.spades.toString() + " Spades.";
  return message;
  }
  
  getSomeCards() {
  var initDeck = [];
  colors.forEach( function(color){
  	values.forEach(function(value) {
    var card = new Card(color,value);
    initDeck.push(card);
    });
  });
  this.deck = initDeck;
  
  var cards = [];
  var result = [];
  var count = (this.amount - Math.floor(this.amount/4))/3;
  var extra = this.amount - count*3;
  var clubs = this.shuffle(this.deck.slice(0,11));
  var diamonds = this.shuffle(this.deck.slice(12,23));
  var hearts = this.shuffle(this.deck.slice(24,35));
	var spades = this.shuffle(this.deck.slice(36,47));
  this.clubs = this.diamonds = this.hearts = count;
  this.spades = extra;
  
  for (var i = 0; i < count; i++) {
  	cards.push(clubs[i]);
    cards.push(diamonds[i]);
    cards.push(hearts[i]);
  }
  
  for (var i = 0; i < extra; i++) {
  	cards.push(spades[i]);
  }
  
  cards.forEach(function(card) {
  var res = card.value + " " + card.color;
  result.push(res);
  });
  result = this.shuffle(result);
  count = count.toString();
  extra = extra.toString();
  
  var message = this.amount.toString() + " cards - " + count + " Clubs, " + count + " Diamonds, " + count +  " Hearts, " + extra + " Spades.";
  this.deck = result;
  return message;
  }
  
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
 }
 
 var deck = new Deck(15);
 console.log(deck.draw());
 console.log(deck.lookup());
 console.log(deck.draw());
 console.log(deck.lookup());
