<template>
    <div class="full-width">
        <section id="about-us-section" class="full-vh" ref="aboutUs">
            <h2 ref="aboutUsTitle" class="text-h1">
                <img src="../assets/whoKnowsLogo.svg" width="60px" />
                who knows
            </h2>
            <p>we are an online teaching platform</p>
        </section>
        <section id="teachers-section" class="full-vh">
            <h2>Teachers</h2>
            <List :items="teachers">
                <template v-slot:item="{ item }">
                    <card-brief
                        :item="item"
                        v-animate-onscroll="{
                            down: 'animated rotateIn',
                            up: 'animated rotateOut',
                        }"
                    />
                </template>
            </List>
        </section>
        <section id="students-section" class="full-vh">
            <h2>Students</h2>
            <div v-animate-onscroll="'animated flip'">
                Animate me once upon scroll
            </div>
        </section>
    </div>
</template>

<script>
import List from '@/components/List'
import CardBrief from '@/components/CardBrief'
import CardTeacher from '@/components/CardTeacher'
export default {
    components: { List, CardBrief, CardTeacher },
    computed: {
        teachers() {
            return this.$store.state.teachers
        },
    },
}
</script>

<style lang="scss" scoped>
.full-vh {
    height: calc(100vh - 64px);
    background-size: cover;
    background-attachment: fixed;
    color: #fff;
    border-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#about-us-section {
    background-image: radial-gradient(
            circle,
            rgba(2, 0, 36, 0.116) 0%,
            rgb(25, 25, 173) 100%
        ),
        url(../assets/beach.jpg);
    background-size: cover;
    background-position: center;
}

#teachers-section {
    background-image: radial-gradient(
            circle,
            rgba(2, 0, 36, 0.116) 0%,
            rgb(25, 25, 173) 100%
        ),
        url(../assets/teacher.jpg);
    background-size: cover;
    background-position: center;
}

#students-section {
    background-image: radial-gradient(
            circle,
            rgba(2, 0, 36, 0.116) 0%,
            rgb(25, 25, 173) 100%
        ),
        url(../assets/beach-people.jpg);
    background-size: cover;
    background-position: center;
}
</style>
