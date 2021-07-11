<template>
        <v-form class="teacher-form" ref="teacherForm">
            <v-stepper v-model="currentTab">
                <v-stepper-header>
                    <v-stepper-step step="1">
                        Personal Info
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="2">
                        Address
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3">
                        Expertises
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-text-field
                            v-model="teacherInternal.firstName"
                            label="First name"
                            :error-messages="firstNameErrors"
                            @input="$v.teacherInternal.firstName.$touch()"
                            @blur="$v.teacherInternal.firstName.$touch()"
                        />
                        <v-text-field
                            v-model="teacherInternal.lastName"
                            label="Last name"
                            :error-messages="lastNameErrors"
                            @input="$v.teacherInternal.lastName.$touch()"
                            @blur="$v.teacherInternal.lastName.$touch()"
                        />
                        <v-btn color="primary" @click="currentTab = 2">
                            Continue
                        </v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <mail-address
                            v-model="teacherInternal.address"
                            ref="teacherAddress"
                        />
                        <v-btn color="primary" @click="currentTab = 3">
                            Continue
                        </v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <expertises v-model="teacherInternal.expertises" />

                        <v-btn color="primary" @click="currentTab = 1">
                            Continue
                        </v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>

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
</template>
<script>
import { required, maxLength } from 'vuelidate/lib/validators'
import mailAddress from './Address.vue'
import Expertises from './Expertises.vue'
export default {
    components: { Expertises, mailAddress },
    data() {
        return {
            teacherInternal: this.teacher,
            currentTab: 1,
        }
    },
    validations: {
        teacherInternal: {
            firstName: { maxLength: maxLength(5), required },
            lastName: { maxLength: maxLength(5), required },
        },
    },
    props: {
        teacher: Object,
    },
    computed: {
        firstNameErrors() {
            const errors = []
            if (!this.$v.teacherInternal.firstName.$dirty) return errors
            !this.$v.teacherInternal.firstName.maxLength &&
                errors.push('Name must be at most 10 characters long')
            !this.$v.teacherInternal.firstName.required &&
                errors.push('Name is required.')
            return errors
        },
        lastNameErrors() {
            const errors = []
            if (!this.$v.teacherInternal.lastName.$dirty) return errors
            !this.$v.teacherInternal.lastName.maxLength &&
                errors.push('Name must be at most 10 characters long')
            !this.$v.teacherInternal.lastName.required &&
                errors.push('Name is required.')
            return errors
        },
    },
    methods: {
        submit() {
            console.log(this.$refs.teacherAddress.$v)
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
