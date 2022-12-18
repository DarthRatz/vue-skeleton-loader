<script setup>
import ProfileCard from './components/ProfileCard.vue'
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <ProfileCard />
    </template>
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
</template>

<style scoped>

</style>
