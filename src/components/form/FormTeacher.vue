<template>
    <v-card class="white--text">
        <v-form class="teacher-form" ref="teacherForm">
            <v-text-field
                v-model="teacherInternal.firstName"
                label="First name"
                :rules="[validateName(teacherInternal)]"
                @change="submit"
            />

            <mail-address
                v-model="teacherInternal.address"
                :rules="addressRules"
            />
            <v-text-field
                v-model="teacherInternal.lastName"
                label="Last name"
                :rules="[validateLastName(teacherInternal)]"
                @change="submit"
            />
            <expertises v-model="teacherInternal.expertises" />
            <v-row>
                <v-col>
                    <v-btn @click="submit">
                        Submit
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="primary--text">
                {{ this.teacherInternal }}
            </v-row>
        </v-form>
    </v-card>
</template>
<script>
import mailAddress from './Address.vue'
import Expertises from './Expertises.vue'
export default {
    components: { Expertises, mailAddress },
    data() {
        return {
            teacherInternal: this.teacher,

            nameRules: [
                v => !!v || 'Name is required',
                v =>
                    (v && v.length <= 10) ||
                    'Name must be less than 10 characters',
            ],
            addressRules: {
                street: [
                    v =>
                        (v && v.length <= 20) ||
                        'Street must be less than 20 characters',
                ],
                city: [
                    v =>
                        (v && v.length <= 20) ||
                        'City must be less than 20 characters',
                ],
            },
        }
    },
    props: {
        teacher: Object,
    },
    methods: {
        submit() {
            console.log('submit')
            this.$refs.teacherForm.validate()
        },
        validateName(teacher) {
            return v => {
                return (
                    !(
                        v &&
                        v === 'jack' &&
                        teacher.address.city === 'zhengzhou'
                    ) || 'Jack is not in zhengzhou'
                )
            }
        },
        validateLastName(teacher) {
            return v =>
                (v && v !== teacher.firstName) ||
                'Last Name can not be the same as first name.'
        },
    },
    watch: {
        teacherInternal: {
            handler(newVal) {
                // console.log(newVal)
            },
            deep: true,
        },
    },
}
</script>

<style scoped>
.teacher-form {
    background: #fff;
    padding: 1rem;
}
</style>
