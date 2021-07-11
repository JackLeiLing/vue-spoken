<template>
    <v-container>
        <v-row>
            <v-col>
                <h2 class="white--text">
                    Teacher Registration
                </h2>
                <form-teacher :teacher="teacher" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import FormTeacher from '@/components/form/FormTeacher'

export default {
    components: {
        FormTeacher,
    },
    data() {
        return {}
    },
    computed: {
        teacher() {
            return {
                firstName: 'John',
                lastName: 'Smith',
                expertises: ['English', 'IT', 'fdsafds'],
                address: {
                    street: '',
                    city: '',
                    state: '',
                    country: '',
                    postCode: '',
                },
            }
        },
    },
    methods: {
        toggleTeacherForm() {
            this.showTeacherForm = !this.showTeacherForm
        },
    },
}
</script>
