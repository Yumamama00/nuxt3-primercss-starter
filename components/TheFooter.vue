<template>
  <footer class="Footer">
    <a href="https://v3.nuxtjs.org/">Nuxt3</a> +
    <a href="https://primer.style/css/">Primer CSS</a> starter project
    <br />
    &copy; {{ new Date().getFullYear() }} Yumamama00 All rights reserved.
  </footer>
</template>

<style lang="scss" scoped>
.Footer {
  font-size: smaller;
  background-color: var(--color-header-bg);
  width: 100%;
  text-align: center;
  color: var(--color-header-text);
  padding: 10px 0;
}
</style>
