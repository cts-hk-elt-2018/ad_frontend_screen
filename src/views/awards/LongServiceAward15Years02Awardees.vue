<template>
  <div class="award2Awardee">
    <img class="logo" src="../../assets/cognizant_logo_white.png" />
    <h1>Long Service Award - 15 years</h1>
    <h2 class="awardee1">Anil Kumar Babu</h2>
    <h3 class="awardee1">110317 AVM</h3>
    <h2 class="awardee2">Yuvaraj Gnanam</h2>
    <h3 class="awardee2">112371 RCGTH</h3>
  </div>
</template>
<style scoped lang="scss">
.award2Awardee {
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
    top: 50vh;
    width: 44vw;
    font-size: 50pt;
    font-family: "TT Norms";
    font-weight: 300;
    font-style: normal;
    color: white;
  }
  h3 {
    position: fixed;
    top: 57vh;
    width: 25vw;
    font-size: 50pt;
    font-family: "TT Norms";
    font-weight: 100;
    font-style: normal;
    color: white;
  }
  .awardee1 {
    left: 30%;
    transform: translateX(-50%);
  }
  .awardee2 {
    right: 30%;
    transform: translateX(50%);
  }
}
</style>
