import teachersData from "../data/teachers";

const getTeachers = () =>
  new Promise(resolve => {
    setTimeout(function() {
      resolve(teachersData); // Yay! Everything went well!
    }, 250);
  });

export default { getTeachers };
