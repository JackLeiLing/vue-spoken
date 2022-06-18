<template>
    <v-card
        class="mx-auto elevation-20"
        color="blue darken-1"
        dark
        style="max-width: 400px"
    >
        <v-row justify="space-between">
            <v-col cols="8">
                <v-card-title>
                    <div>
                        <div class="caption">Native language</div>
                        <div class="h6">{{ item.nativeLanguage }}</div>
                        <div class="h4">
                            {{ item.firstName + ' ' + item.lastName }}
                        </div>
                        <div class="caption">{{ item.address.country }}</div>
                    </div>
                </v-card-title>
            </v-col>
            <v-col cols="4">
                <v-img
                    class="shrink ma-2"
                    cover
                    height="125px"
                    :src="item.image"
                    style="flex-basis: 125px"
                ></v-img>
            </v-col>
        </v-row>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-4">
            <v-rating
                v-if="$auth.isAuthenticated"
                :value="item.rating"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
            ></v-rating>
            <span class="grey--text text--lighten-2 caption mr-2">
                {{ item.rating }}
            </span>
            <v-spacer></v-spacer>
            <v-btn
                v-if="$auth.isAuthenticated"
                light
                fab
                small
                class="blue darken-4"
                @click="showTeacher(item.id)"
                ><v-icon size="20" color="white"
                    >mdi-message-video</v-icon
                ></v-btn
            >
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: {
        item: Object,
    },
    methods: {
        showTeacher(id) {
            this.$router.history.push(`/teacher/${id}`)
        },
    },
}
</script>
