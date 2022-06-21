<template>
  <nav class="menu animated overlay-navigation" aria-label="navigation">
    <div style="position: relative">
      <div
        class="menu-item d-flex flex-items-center"
        @click="router.push('/account')"
      >
        <i-ic-round-account-circle class="mr-2" />
        Account
      </div>
      <div
        class="menu-item d-flex flex-items-center flex-justify-between"
        @click="subMenu = !subMenu"
      >
        <div class="d-flex flex-items-center">
          <i-ic-round-settings class="mr-2" />
          Setting
        </div>
        <i-ic-sharp-arrow-drop-down
          v-show="!subMenu"
          class="mr-2"
          style="width: 18px; height: 18px"
        />
        <i-ic-sharp-arrow-drop-up
          v-show="subMenu"
          class="mr-2"
          style="width: 18px; height: 18px"
        />
      </div>
      <nav
        v-show="subMenu"
        class="SideNav color-bg-default border-top py-2 pl-6 animated"
      >
        <div class="SideNav-subItem" href="#url">Sub item 1</div>
        <div class="SideNav-subItem" href="#url">Sub item 2</div>
        <div class="SideNav-subItem" href="#url">Sub item 3</div>
      </nav>
      <div
        class="menu-item d-flex flex-items-center"
        @click="router.push('/emails')"
      >
        <i-ic-round-email class="mr-2" />
        Emails
      </div>
      <div
        class="menu-item d-flex flex-items-center"
        @click="router.push('/notifications')"
      >
        <i-ic-round-notifications class="mr-2" />
        Notifications
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const router = useRouter()

const subMenu = ref<boolean>(false)
</script>

<style scoped>
.animated {
  animation-name: fade-in;
  animation-duration: 0.15s;
  animation-timing-function: ease-in-out;
}

.overlay-navigation {
  z-index: 30;
  height: 100%;
  width: 100%;
  padding-bottom: 65px;
  position: fixed;
  overflow-y: auto;
}
</style>
