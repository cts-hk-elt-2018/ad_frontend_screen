<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.watch(
      () => {
        return this.$store.state.main.currentPage; // could also put a Getter here
      },
      newValue => {
        this.$router.push({ name: newValue });
      }
    );
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-BoldItalic.eot");
  src: local("TT Norms Bold Italic"), local("TTNorms-BoldItalic"),
    url("./assets/fonts/hinted-TTNorms-BoldItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-BoldItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-BoldItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-BoldItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-BoldItalic.svg#TTNorms-BoldItalic")
      format("svg");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Italic.eot");
  src: local("TT Norms Italic"), local("TTNorms-Italic"),
    url("./assets/fonts/hinted-TTNorms-Italic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Italic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Italic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Italic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Italic.svg#TTNorms-Italic") format("svg");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-ExtraLightItalic.eot");
  src: local("TT Norms ExtraLight Italic"), local("TTNorms-ExtraLightItalic"),
    url("./assets/fonts/hinted-TTNorms-ExtraLightItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-ExtraLightItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-ExtraLightItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-ExtraLightItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-ExtraLightItalic.svg#TTNorms-ExtraLightItalic")
      format("svg");
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-ExtraLight.eot");
  src: local("TT Norms ExtraLight"), local("TTNorms-ExtraLight"),
    url("./assets/fonts/hinted-TTNorms-ExtraLight.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-ExtraLight.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-ExtraLight.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-ExtraLight.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-ExtraLight.svg#TTNorms-ExtraLight")
      format("svg");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-LightItalic.eot");
  src: local("TT Norms Light Italic"), local("TTNorms-LightItalic"),
    url("./assets/fonts/hinted-TTNorms-LightItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-LightItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-LightItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-LightItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-LightItalic.svg#TTNorms-LightItalic")
      format("svg");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Regular.eot");
  src: local("TT Norms Regular"), local("TTNorms-Regular"),
    url("./assets/fonts/hinted-TTNorms-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Regular.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Regular.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Regular.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Regular.svg#TTNorms-Regular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-ThinItalic.eot");
  src: local("TT Norms Thin Italic"), local("TTNorms-ThinItalic"),
    url("./assets/fonts/hinted-TTNorms-ThinItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-ThinItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-ThinItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-ThinItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-ThinItalic.svg#TTNorms-ThinItalic")
      format("svg");
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-ExtraBoldItalic.eot");
  src: local("TT Norms ExtraBold Italic"), local("TTNorms-ExtraBoldItalic"),
    url("./assets/fonts/hinted-TTNorms-ExtraBoldItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-ExtraBoldItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-ExtraBoldItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-ExtraBoldItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-ExtraBoldItalic.svg#TTNorms-ExtraBoldItalic")
      format("svg");
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-ExtraBold.eot");
  src: local("TT Norms ExtraBold"), local("TTNorms-ExtraBold"),
    url("./assets/fonts/hinted-TTNorms-ExtraBold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-ExtraBold.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-ExtraBold.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-ExtraBold.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-ExtraBold.svg#TTNorms-ExtraBold")
      format("svg");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-BlackItalic.eot");
  src: local("TT Norms Black Italic"), local("TTNorms-BlackItalic"),
    url("./assets/fonts/hinted-TTNorms-BlackItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-BlackItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-BlackItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-BlackItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-BlackItalic.svg#TTNorms-BlackItalic")
      format("svg");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Black.eot");
  src: local("TT Norms Black"), local("TTNorms-Black"),
    url("./assets/fonts/hinted-TTNorms-Black.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Black.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Black.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Black.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Black.svg#TTNorms-Black") format("svg");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-MediumItalic.eot");
  src: local("TT Norms Medium Italic"), local("TTNorms-MediumItalic"),
    url("./assets/fonts/hinted-TTNorms-MediumItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-MediumItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-MediumItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-MediumItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-MediumItalic.svg#TTNorms-MediumItalic")
      format("svg");
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Light.eot");
  src: local("TT Norms Light"), local("TTNorms-Light"),
    url("./assets/fonts/hinted-TTNorms-Light.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Light.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Light.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Light.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Light.svg#TTNorms-Light") format("svg");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-HeavyItalic.eot");
  src: local("TT Norms Heavy Italic"), local("TTNorms-HeavyItalic"),
    url("./assets/fonts/hinted-TTNorms-HeavyItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-HeavyItalic.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-HeavyItalic.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-HeavyItalic.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-HeavyItalic.svg#TTNorms-HeavyItalic")
      format("svg");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Bold.eot");
  src: local("TT Norms Bold"), local("TTNorms-Bold"),
    url("./assets/fonts/hinted-TTNorms-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Bold.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Bold.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Bold.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Bold.svg#TTNorms-Bold") format("svg");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Thin.eot");
  src: local("TT Norms Thin"), local("TTNorms-Thin"),
    url("./assets/fonts/hinted-TTNorms-Thin.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Thin.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Thin.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Thin.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Thin.svg#TTNorms-Thin") format("svg");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Heavy.eot");
  src: local("TT Norms Heavy"), local("TTNorms-Heavy"),
    url("./assets/fonts/hinted-TTNorms-Heavy.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Heavy.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Heavy.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Heavy.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Heavy.svg#TTNorms-Heavy") format("svg");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Medium.eot");
  src: local("TT Norms Medium"), local("TTNorms-Medium"),
    url("./assets/fonts/hinted-TTNorms-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Medium.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Medium.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Medium.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Medium.svg#TTNorms-Medium") format("svg");
  font-weight: 500;
  font-style: normal;
}
</style>
