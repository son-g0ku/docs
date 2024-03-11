<template>
    <div ref="customAds" class="custom-ads">
        <div class="custom-ads-img">
            <img src="https://example.com/custom-ad-image.jpg" alt="Custom Ad" />
        </div>
        <div class="custom-ads-text">
            <p>Custom Ad Text</p>
        </div>
        <div class="custom-ads-poweredby">
            <p>Powered by Custom Ad Provider</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const customAds = ref(null)

onMounted(() => {
    if (customAds.value) {
        // Custom ad provider script
        const script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('src', 'https://example.com/custom-ad-provider.js')
        script.setAttribute('id', '_customads_js')
        customAds.value.appendChild(script)
    }
})
</script>

<style lang="postcss">
.custom-ads {
    @apply relative border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 w-full transition-colors min-h-[220px];

    &:hover {
        .custom-ads-text {
            @apply text-gray-700 dark:text-gray-200;
        }
    }

    .custom-ads-img {
        @apply flex justify-center p-2 w-full;

        & > img {
            @apply !max-w-full w-full rounded;
        }
    }

    .custom-ads-text {
        @apply flex px-2 text-sm text-gray-500 dark:text-gray-400 transition-colors text-center w-full;
    }

    .custom-ads-poweredby {
        @apply block text-xs text-center text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 pt-1 pb-2 px-2 transition-colors;
    }
}
</style>
