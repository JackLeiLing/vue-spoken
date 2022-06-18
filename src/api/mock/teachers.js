import teachersData from '../data/teachers'

const getTeachers = () =>
    new Promise(resolve => {
        resolve(teachersData)
    })

export default { getTeachers }
