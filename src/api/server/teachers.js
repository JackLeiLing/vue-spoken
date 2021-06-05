const getTeachers = () =>
  new Promise(resolve => {
    setTimeout(function() {
      resolve("Success from teachers server"); // Yay! Everything went well!
    }, 250);
  });

export default { getTeachers };
