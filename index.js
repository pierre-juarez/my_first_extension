let btnscrap = document.querySelector("#btnScrap");

btnscrap.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });


//   if (tab !== null) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: scrapingProfile,
//     });
//   }

});

// const scrapingProfile = () => {
//   const wait = function (milliseconds) {
//     return new Promise(function (resolve) {        
//       setTimeout(function () {      
//         resolve();
//       }, milliseconds);
//     });
//   };
// }
