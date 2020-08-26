export default new Promise(resolve => {
  setTimeout(function() {
    resolve("Success from teachers server"); // Yay! Everything went well!
  }, 250);
});
