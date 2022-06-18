<template>
    <v-form class="teacher-form" ref="teacherForm">
        <v-row>
            <v-col cols="12" sm="3">
                <ul>
                    <li>Errors</li>
                </ul>
            </v-col>
            <v-col>
                <v-stepper v-model="currentTab">
                    <v-stepper-header>
                        <v-stepper-step step="1">
                            Personal Info
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2"> Address </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3"> Expertises </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-text-field
                                :value="getModel('firstName')"
                                label="First name"
                                :error-messages="
                                    getErrors('teacherInternal','firstName')
                                "
                                @input="
                                    setValue(
                                        teacherInternal,
                                        'firstName',
                                        $event
                                    )
                                "
                            />
                            <v-text-field
                                :value="getModel('lastName')"
                                label="Last name"
                                :error-messages="
                                    getErrors('teacherInternal','lastName')
                                "
                                @input="
                                    setValue(
                                        teacherInternal,
                                        'lastName',
                                        $event
                                    )
                                "
                            />
                            <v-btn color="primary" @click="currentTab = 2">
                                Continue
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <mail-address
                                v-model="teacherInternal.address"
                                ref="teacherAddress"
                                :errors="
                                    v$.teacherInternal.address.$silentErrors
                                "
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
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn @click="submit"> Submit </v-btn>
            </v-col>
        </v-row>
        <v-row class="primary--text">
            <!-- {{ this.teacherInternal }} -->
            <pre>
                    {{ this.v$ }}
                </pre
            >
        </v-row>
    </v-form>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'
import mailAddress from './Address.vue'
import Expertises from './Expertises.vue'
import { deepFind } from '@/utils/general'

export default {
    components: { Expertises, mailAddress },
    setup() {
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
                street: { required },
            },
        },
    },
    props: {
        teacher: Object,
    },
    computed: {
        lastNameErrors() {
            const errors = []
            return errors
        },
        valicationModel() {
            return this.v$
        },
        tabs() {
            return [
                {
                    title: 'Basic info',
                    fields: [
                        {
                            label: 'First Name',
                            path: 'teacherInternal.firstName',
                        },
                        {
                            label: 'Last Name',
                            path: 'teacherInternal.lastName',
                        },
                    ],
                },
            ]
        },
    },
    methods: {
        submit() {},
        getErrors(objectKey, path) {
            console.log(objectKey, path)
            return deepFind(this.v$.teacherInternal, path).$silentErrors.map((e) => e.$message)
        },
        getModel(path) {
            return deepFind(this.teacherInternal, path).$model
        },
        setValue(obj, path, value) {
            var a = path.split('.')
            var o = obj
            while (a.length - 1) {
                var n = a.shift()
                if (!(n in o)) o[n] = {}
                o = o[n]
            }
            o[a[0]] = value
        },
    },
    watch: {
        teacherInternal: {
            handler() {},
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
