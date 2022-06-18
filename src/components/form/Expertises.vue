<template>
    <div>
        <v-row v-for="(v, i) in value" :key="i">
            <v-col cols="10">
                <v-text-field v-model="value[i]" :label="`expertise ${i}`" />
            </v-col>
            <v-col cols="2" class="d-flex justify-space-around align-center">
                <v-btn
                    color="primary"
                    type="button"
                    class=""
                    fab
                    small
                    @click="removeExpertise(i)"
                >
                    <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn @click="addExpertise" color="primary" class="float-right"
                    >Add expertise</v-btn
                >
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Expertises',
    props: {
        value: {
            type: Array,
        },
    },
    methods: {
        removeExpertise(i) {
            this.value.splice(i, 1)
        },
        addExpertise() {
            this.value.push('')
        },
    },
}
</script>
