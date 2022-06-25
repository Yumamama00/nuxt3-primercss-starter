<template>
  <div class="mt-12 text-center">
    <p class="f00-light text-bold">404</p>
    <p class="f2">Page not found</p>
    <button class="btn btn-primary mt-4 mb-12" type="button" @click="toHome">
      Go to home
    </button>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Page not found',
})

const router = useRouter()

const toHome = () => {
  router.push('/')
}
</script>
