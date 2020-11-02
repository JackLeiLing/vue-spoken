<template>
  <div class="full-width">
    <section id="about-us-section" class="full-vh" ref="aboutUs">
      <h2 ref="aboutUsTitle" class="text-h1">who we are</h2>
      <p>we are an online teaching platform</p>
    </section>
    <section id="teachers-section" class="full-vh">
      <h2>Teachers</h2>
    </section>
    <section id="students-section" class="full-vh">
      <h2>Students</h2>
    </section>
  </div>
</template>

<script>
export default {
  mounted(){
    document.addEventListener('scroll',()=>{
      let windowScrollYDistance = window.scrollY
      if(windowScrollYDistance>(this.$refs.aboutUs.getBoundingClientRect().height+65)){
        this.$refs.aboutUsTitle.style.opacity=0
      }else{
        this.$refs.aboutUsTitle.style.opacity=1-windowScrollYDistance/(this.$refs.aboutUs.getBoundingClientRect().height)
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.full-vh {
  height: calc(100vh - 66px);
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  border: 1px solid white;
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:first-child {
    margin-top: 65px;
  }
  &:last-child {
    border-bottom: 1px solid white;
  }
}
#about-us-section {
  background-image: radial-gradient(
      circle,
      rgba(2, 0, 36, 0.116) 0%,
      rgb(25, 25, 173) 100%
    ),
    url(https://www.smartertravel.com/uploads/2020/03/ST_ZoomBackground_Beach02.jpg);
}

#teachers-section {
  background-image: radial-gradient(
      circle,
      rgba(2, 0, 36, 0.116) 0%,
      rgb(25, 25, 173) 100%
    ),
    url(https://static.parade.com/wp-content/uploads/2020/04/zoom.jpg);
}

#students-section {

  background-image: radial-gradient(
      circle,
      rgba(2, 0, 36, 0.116) 0%,
      rgb(25, 25, 173) 100%
    ),
    url(https://www.smartertravel.com/uploads/2020/03/ST_ZoomBackground_Beach03.jpg);
}
</style>
