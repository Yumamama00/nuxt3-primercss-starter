<template>
  <header class="Header px-2 px-md-6 flex-justify-between">
    <HeaderTitle :drawer="drawer" @click:navigation="drawer = !drawer" />

    <div class="d-flex">
      <HeaderNavigation v-if="!mobile" />

      <div v-if="!mobile" class="Divider" />

      <HeaderAction />
    </div>
  </header>

  <MobileNavigation v-show="mobile && drawer" @click:item="drawer = false" />
</template>

<script setup lang="ts">
const { mobile } = useDisplay()

const drawer = ref<boolean>(false)
</script>

<style lang="scss">
.Header-icon {
  color: white;
  width: 25px;
  height: 25px;
}

.Divider {
  width: 1px;
  height: 25px;
  margin-left: 16px;
  margin-right: 36px;
  background-color: var(--color-header-text);
}
</style>
