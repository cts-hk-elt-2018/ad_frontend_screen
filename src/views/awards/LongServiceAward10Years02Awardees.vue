<template>
  <div class="award5Awardee">
    <img class="logo" src="../../assets/cognizant_logo_white.png" />
    <h1>Long Service Award - 10 years</h1>
    <h2 class="row1_h1 awardee1">Aparna Kettinagathu Pothodi</h2>
    <h3 class="row1_h2 awardee1">178863<br>AVM</h3>
    <h2 class="row1_h1 awardee2">Pritamkumar R Shinde</h2>
    <h3 class="row1_h2 awardee2">182435<br>QE&A</h3>
    <h2 class="row2_h1 awardee3">Biswajit Kundu</h2>
    <h3 class="row2_h2 awardee3">179584<br>AVM</h3>
    <h2 class="row2_h1 awardee4">Arvind Kumar Tripathi</h2>
    <h3 class="row2_h2 awardee4">193683<br>QE&A</h3>
    <h2 class="row3_h1 awardee5">Sachin Narnaware</h2>
    <h3 class="row3_h2 awardee5">182101<br>QE&A</h3>
  </div>
</template>
<style scoped lang="scss">
.award5Awardee {
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
    left: 3%;
    top: 5vh;
    font-size: 40pt;
    font-family: "TT Norms";
    font-weight: 900;
    font-style: normal;
    text-shadow: 1px 1px 8px #ffb04b, 1px 1px 8px #ffb04b;
    color: white;
  }
  h2 {
    position: fixed;
    width: 44vw;
    font-size: 35pt;
    font-family: "TT Norms";
    font-weight: 300;
    font-style: normal;
    color: white;
  }
  h3 {
    position: fixed;
    width: 25vw;
    font-size: 35pt;
    font-family: "TT Norms";
    font-weight: 100;
    font-style: normal;
    color: white;
  }
  .row1_h1 {
    top: 20vh;
  }
  .row1_h2 {
    top: 25vh;
  }
  .row2_h1 {
    top: 45vh;
  }
  .row2_h2 {
    top: 50vh;
  }
  .row3_h1 {
    top: 70vh;
  }
  .row3_h2 {
    top: 75vh;
  }
  .awardee1 {
    left: 25%;
    transform: translateX(-50%);
  }
  .awardee2 {
    left: 75%;
    transform: translateX(-50%);
  }
  .awardee3 {
    left: 35%;
    transform: translateX(-50%);
  }
  .awardee4 {
    left: 65%;
    transform: translateX(-50%);
  }
  .awardee5 {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
