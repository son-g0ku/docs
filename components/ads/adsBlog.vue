<template>
  <div class="relative group/ad border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 p-2 w-full transition-colors">
    <NuxtLink to="https://lightxi.com/" class="focus:outline-none" tabindex="-1" target="_blank">
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLink>

    <UColorModeImage
      light="https://7.isyangs.cn/1/65eb26fbe43b4-1.png"
      dark="https://7.isyangs.cn/1/65eb26fbe43b4-1.png"
      alt="晞云云计算"
      loading="lazy"
      class="w-full"
    />

    <div class="flex flex-col items-center mt-2 text-center">
      <div class="inline-flex gap-1.5">
        <img src="https://lightxi.com/assets/images/logo.png" alt="Logo" class="h-5 w-auto" />

        <UBadge variant="subtle" size="xs" label="晞云云计算" class="font-semibold rounded" />
      </div>

      <p class="text-sm text-gray-500 dark:text-gray-400 group-hover/ad:text-gray-700 dark:group-hover/ad:text-gray-200 mt-1 transition-colors">
        新一代云计算平台
      </p>
    </div>
  </div>
</template>
