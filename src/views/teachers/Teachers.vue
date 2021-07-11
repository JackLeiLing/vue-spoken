<template>
    <v-container>
        <v-row>
            <v-col sm="4" v-for="t in teachers" :key="t.id">
                <CardTeacher :teacher="t" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <router-link
                    to="/teachers/registration"
                    v-slot="{ href }"
                >
                    <v-btn :href="href" color="primary" class="float-right">
                      Teacher registration
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import CardTeacher from '@/components/CardTeacher'

export default {
    components: {
        CardTeacher,
    },
    data() {
        return {}
    },
    computed: {
        teachers() {
            return this.$store.state.teachers
        },
    },
}
</script>
