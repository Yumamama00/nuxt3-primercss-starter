<template>
  <div class="Header-item">
    <template v-if="mobile">
      <i-ic-menu
        v-if="!drawer"
        class="mr-3 Header-icon"
        @click="$emit('click:navigation')"
      />
      <i-ic-close
        v-else-if="drawer"
        class="mr-3 Header-icon"
        @click="$emit('click:navigation')"
      />
    </template>

    <div
      class="Header-link f3 d-flex flex-items-center"
      @click="router.push('/')"
    >
      <img
        src="nuxt-logo.png"
        alt="Logo"
        width="25px"
        height="25px"
        class="mr-2 mr-md-3"
      />
      <span class="text-bold">Nuxt3 + PrimerCSS</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { mobile } = useDisplay()
const router = useRouter()

defineProps<{ drawer: boolean }>()

defineEmits<{
  (e: 'click:navigation'): void
}>()
</script>
