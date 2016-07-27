'use strict';

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    var cards = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="cards">';
    for (var i=0; i<cards.length; i++) {
      if(cards[i].set !== "GVG" || "TGT") {
        statusHTML += '<li>' + cards[i].name + '</li>';
      }
    }
    statusHTML += '</ul>';
    document.getElementById('ajax').innerHTML = statusHTML;
    console.log(cards);
  } else {
    console.log(xhr.readyState);
  }
};

xhr.open('GET', 'https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json');
xhr.send();