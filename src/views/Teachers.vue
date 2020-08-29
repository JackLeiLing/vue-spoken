<template>
    <v-row>
        <CardTeacher v-for='t in teachers' :key='t.id' :teacher='t'/>
    </v-row>
</template>
<script>
import teachersAPI from 'api-client/teachers'
import CardTeacher from '../components/CardTeacher'
export default {
    components:{
        CardTeacher
    },
    data(){
        return{
            teachers:[]
        }
    },
    created(){
        teachersAPI.getTeachers().then((r)=>{
            this.teachers = r
        })
    }
}
</script>