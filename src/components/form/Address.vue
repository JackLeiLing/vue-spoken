<template>
    <div>
        <v-row>
            <v-col>
                <v-text-field 
                label="Street" 
                v-model="value.street" 
                :error-messages="streetErrors"
                @input="$v.value.street.$touch()"
                @blur="$v.value.street.$touch()"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-text-field label="City" v-model="value.city" />
            </v-col>
            <v-col cols="3">
                <v-text-field label="State" v-model="value.state" />
            </v-col>
            <v-col cols="3">
                <v-text-field label="Country" v-model="value.country" />
            </v-col>
            <v-col cols="3">
                <v-text-field label="Post code" v-model="value.postCode" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
    name: 'Address',
    props: {
        value: {
            type: Object,
        },
        rules: {
            type: Object,
        },
    },
    validations: {
        value: {
            street: { required },
        },
    },
    computed: {
        streetErrors(){
            const errors = []
            console.log(this.$v.value)
            if (!this.$v.value.street.$dirty) return errors
            !this.$v.value.street.required && errors.push('Street is required.')
            return errors
        }
    }
}
</script>
