<template>
    <div class="video">
        <h1>My Video</h1>
        <button @click="getPermissions()">Do it</button>
        <video playsinline autoplay ref="myVideo"></video>
    </div>
</template>

<script>
export default {
    name: 'Video',
    methods: {
        getPermissions() {
            this.status = 'FETCHING'
            navigator.mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true,
                })
                .then(
                    stream => {
                        this.status = 'DONE FETCHING'
                        this.handleSuccess(stream)
                    },
                    err => {
                        console.error(err)
                    }
                )
        },
        handleSuccess(stream) {
            const video = this.$refs.myVideo
            video.srcObject = stream
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
video {
    border: 1px solid green;
}
</style>
