'use strict';
function setAlarm(e){
	console.log('ALARMA');
	let minutos = parseFloat(e.target.value);
	chrome.browserAction.setBadgeText({text:'0n'});
	chrome.alarms.create({delayInMinutes:minutos});
	chrome.storage.sync.set({minutes:minutos});
	window.close();
}

function clearAlarm(){
	chrome.browserAction.setBadgeText({text:'Cnc'});
	chrome.alarms.clearAll();
	window.close();
}

document.getElementById('sampleSecond').addEventListener('click',setAlarm);
document.getElementById('15min').addEventListener('click',setAlarm);
document.getElementById('30min').addEventListener('click',setAlarm);
document.getElementById('cancelAlarm').addEventListener('click',clearAlarm);