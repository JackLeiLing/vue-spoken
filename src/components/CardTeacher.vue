<template>
    <v-card :loading="loading">
        <v-img height="250" :src="teacher.image"></v-img>

        <v-card-title
            >{{ teacher.firstName }} {{ teacher.lastName }}</v-card-title
        >

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating
                    :value="teacher.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ml-4">{{ teacher.rating }}</div>
            </v-row>

            <div class="my-4 subtitle-1">
                {{ teacher.nativeLanguage }}
            </div>

            <div>{{ teacher.summary }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Availability</v-card-title>

        <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
                BOOK
            </v-btn>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="showTeacher(teacher.id)"
            >
                Chat NOW
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        teacher: Object,
    },
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
        showTeacher(id) {
            this.$router.history.push(`/teacher/${id}`)
        },
    },
}
</script>
