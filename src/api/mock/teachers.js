export default new Promise(resolve => {
  setTimeout(function() {
    resolve("Success from teachers mock"); // Yay! Everything went well!
  }, 250);
});
