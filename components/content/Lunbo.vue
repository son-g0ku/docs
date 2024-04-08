<script setup lang="ts">

defineProps(
  {
    images: {
      type: Array,
      default: () => []
    },
    pages: {
      type: Array,
      default: () => []
    }
  }
)

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})

</script>

<template>
  <UCarousel
    ref="carouselRef"
    :items="pages"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg',
      indicators: {
        wrapper: 'relative bottom-0 mt-4'
      }
    }"
    class="rounded-lg overflow-hidden"
    indicators
  >
    <template #default="{ item }">
      <div class="text-center mx-auto">
        <img :src="item.img" class="w-full" :alt="item.name" draggable="false">

        <p class="font-semibold">
          {{ item.name }}
        </p>
      </div>
    </template>

    <template #indicator="{ onClick, page, active }">
      <UButton
        :label="String(page)" :variant="active ? 'solid' : 'outline'" size="2xs"
        class="rounded-full min-w-6 justify-center" @click="onClick(page)"
      />
    </template>
  </UCarousel>
</template>
