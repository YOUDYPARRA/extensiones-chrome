'use strict';

chrome.alarms.onAlarm.addListener(function() {
  chrome.browserAction.setBadgeText({text: 'off'});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'img/calzon.png',
      title:    'Hora de beber agua!!!',
      message:  'Siempre hidratado',
      buttons: [
        {title: 'No olvides fluir como el agua'}
      ],
      priority: 0});
});

chrome.notifications.onButtonClicked.addListener(function() {
  console.log("BOTON DE POPUP");
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.alarms.create({delayInMinutes: item.minutes});
  });
});
chrome.browserAction.onClicked.addListener(function(tabs) {
  alert("clic");
})
