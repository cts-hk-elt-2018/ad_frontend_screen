<template>
  <div class="award1Awardee">
    <img class="logo" src="../../assets/cognizant_logo_white.png" />
    <h2>and the award<br>goes to...</h2>
  </div>
</template>
<style scoped lang="scss">
.award1Awardee {
  width: 100vw;
  background-image: url("../../assets/bg_award2.png");
  background-size: cover;
  height: 100vh;
  .logo {
    position: fixed;
    top: 3vh;
    right: 3vw;
    width: 30vw;
  }
  h1 {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 19vh;
    width: 44vw;
    font-size: 55pt;
    font-family: "TT Norms";
    font-weight: 900;
    font-style: normal;
    text-shadow: 1px 1px 8px #ffb04b, 1px 1px 8px #ffb04b;
    color: white;
  }
  h2 {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 55vh;
    width: 44vw;
    font-size: 55pt;
    font-family: "TT Norms";
    font-weight: 300;
    font-style: normal;
    color: white;
  }
  h3 {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 65vh;
    width: 25vw;
    font-size: 55pt;
    font-family: "TT Norms";
    font-weight: 100;
    font-style: normal;
    color: white;
  }
}
</style>
