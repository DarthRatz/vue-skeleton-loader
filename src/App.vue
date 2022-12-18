<script setup>
import ProfileCard from './components/ProfileCard.vue'
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
</script>

<template>
  <Suspense>
    <ProfileCard />
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
</template>

<style scoped>

</style>
