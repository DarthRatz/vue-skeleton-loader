<script setup>
import ProfileCard from './components/ProfileCard.vue'
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
import QuoteCard from './components/QuoteCard.vue'
</script>

<template>
  <Suspense>
    <QuoteCard />
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
  <Suspense>
    <ProfileCard />
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
</template>

<style scoped>

</style>
