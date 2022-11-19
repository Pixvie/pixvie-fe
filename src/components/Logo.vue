<template>
  <div class="logo-container">
    <img src="../assets/logo.gif" class="logo-img" alt="Logo" />
    <span class="logo-text">Pixvie</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
.logo-container {
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  align-items: flex-end;
  z-index: 99;
  cursor: pointer;

  .logo-img {
    width: 80px;
  }

  .logo-text {
    font-family: "Press Start 2P", cursive;
    font-size: 24px;
    letter-spacing: -2.5px;
    color: #1d1e22;
    padding-bottom: 20px;
  }
}
</style>
