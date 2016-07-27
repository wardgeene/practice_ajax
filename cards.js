'use strict';

var xhr = new XMLHttpRequest();

var standard = ["CORE", "EXPERT1", "BRM", "TGT", "LOE", "OG"]
var cardsInStandard = 0;
var cardsNotInStandard = 0;

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    var cards = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="cards">';
    for (var i=0; i<cards.length; i++) {
      if(standard.includes(cards[i].set)) {
        statusHTML += '<li>' + cards[i].name + ' ' + cards[i].set + '</li>';
        cardsInStandard++;
      } else {
        cardsNotInStandard++;
      }
    }
    statusHTML += '</ul>';
    document.getElementById('ajax').innerHTML = statusHTML;
    console.log(cards, cardsNotInStandard, cardsInStandard);
  } else {
    console.log(xhr.readyState);
  }
};

xhr.open('GET', 'https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json');
xhr.send();
