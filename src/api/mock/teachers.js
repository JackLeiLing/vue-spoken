import teachersData from '../data/teachers'

const getTeachers = () =>
    new Promise(resolve => {
        resolve(teachersData) // Yay! Everything went well!
    })

export default { getTeachers }
