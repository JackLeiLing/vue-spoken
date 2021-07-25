<template>
    <div>
        <v-row>
            <v-col>
                <v-text-field 
                label="Street" 
                v-model="value.street" 
                :error-messages="streetErrors"
            
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-text-field label="City" />
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

export default {
    name: 'Address',
   
    props: {
        value: {
            type: Object,
        },
        errors: {
            type: Array
        }
       
    },
    computed: {
        streetErrors(){
           return this.errors.filter(e=>e.$property==='street').map(e=>e.$message)
        }
    }
}
</script>
