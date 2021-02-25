<template>
  <div>
    <vue-particles
      color="#ffffff"
      :particleOpacity=".9"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#ffffff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="1"
      :linesDistance="120"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
#particles-js {
  background: url('../../assets/images/bg.jpg') center center no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
