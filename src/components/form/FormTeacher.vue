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
                            v-model="v$.teacherInternal.firstName.$model"
                            label="First name"
                            :error-messages="firstNameErrors"
                       
                        />
                        <v-text-field
                            v-model="v$.teacherInternal.lastName.$model"
                            label="Last name"
                            :error-messages="lastNameErrors"
                          
                        />
                        <v-btn color="primary" @click="currentTab = 2">
                            Continue
                        </v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <mail-address
                            v-model="teacherInternal.address"
                            ref="teacherAddress"
                            :errors="v$.teacherInternal.address.$silentErrors"
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
                <pre>
                    {{ this.v$}}
                </pre> 
            </v-row>
        </v-form>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'
import mailAddress from './Address.vue'
import Expertises from './Expertises.vue'
export default {
    components: { Expertises, mailAddress },
     setup () {
        return { v$: useVuelidate() }
    },
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
            address: {
                street: {required}
            }
        },
    },
    props: {
        teacher: Object,
    },
    computed: {
        firstNameErrors() {
            return this.v$.teacherInternal.firstName.$errors.map(e=>e.$message)
        },
        lastNameErrors() {
            const errors = []
           
            return errors
        },
    },
    methods: {
        submit() {
         
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
