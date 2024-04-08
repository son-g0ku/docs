<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      state: {
        star: 0,
        downloads: 0,
        contributors:[]
      },
    }
  },
  mounted() {
    this.fetchState()
  },
  methods: {
    set: function setWithExpiry(key, value, ttl) {
      if (ttl === 0)
        return
      const now = new Date()
      const expiryDay = ttl * 86400000
      const item = {
        value: value,
        expiry: now.getTime() + expiryDay,
      }
      localStorage.setItem(key, JSON.stringify(item))
    },

    get: function getWithExpiry(key) {
      const itemStr = localStorage.getItem(key)

      if (!itemStr) {
        return undefined
      }
      const item = JSON.parse(itemStr)
      const now = new Date()

      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return undefined
      }
      return item.value
    },
    async fetchState() {
      const {format} = Intl.NumberFormat('en', {notation: 'compact'})
      const cache = this.get('state')
      console.log('cache', cache)
      if (cache !== undefined && cache !== null) {
        this.state = cache
        return
      }
      try {
        await axios.get('https://api.github.com/repos/valor-x/hexo-theme-solitude/contributors')
          .then(res => {
            this.state.contributors = res.data.map(item => ({
              login: item.login,
              html_url: item.html_url,
              avatar_url: item.avatar_url,
            }))
          })
        await axios.get('https://api.github.com/repos/valor-x/hexo-theme-solitude')
          .then(res => {
            this.state.star = format(res.data.stargazers_count)
          })

        const today = new Date()
        const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
        const lastYear = new Date(new Date().setFullYear(today.getFullYear() - 1))
        const formattedLastYear = `${lastYear.getFullYear()}-${String(lastYear.getMonth() + 1).padStart(2, '0')}-${String(lastYear.getDate()).padStart(2, '0')}`
        const timeRange = `${formattedLastYear}:${formattedToday}`
        const downloads = await useFetch(`https://api.npmjs.org/downloads/point/${timeRange}/hexo-theme-solitude`)
        this.state.downloads = format(downloads.data.value?.downloads)
        this.set('state', this.state, 0.2)
      } catch (error) {
        console.error(error)
      }
    },
  },
}

</script>

<template>
  <div>
    <ULandingSection class="!pt-0 from-gray-950/50 to-gray-900">
      <ULandingCTA
        align="left"
        card
        :ui="{
          background: 'dark:bg-gradient-to-b from-gray-800 to-gray-900',
          shadow: 'dark:shadow-2xl',
          body: {
            background: 'bg-gray-50/50 dark:bg-gray-900/50'
          },
          title: 'text-center lg:text-left',
          links: 'justify-center lg:justify-start'
        }"
      >
        <template #title>
          <span>
            因为热爱，
            <br class="hidden lg:block">
            我们汇聚在一起。
          </span>
        </template>

        <template #links>
          <ClientOnly>
            <UAvatarGroup
              :max="16" size="md"
              class="flex-wrap-reverse [&_span:first-child]:text-xs justify-center"
            >
              <UTooltip
                v-for="(contributor, index) of state.contributors"
                :key="index"
                :text="contributor.login"
                class="rounded-full"
                :ui="{ background: 'bg-gray-50 dark:bg-gray-800/50' }"
                :popper="{ offsetDistance: 16 }"
              >
                <UAvatar
                  :alt="contributor.login"
                  :src="`https://ipx.nuxt.com/s_40x40/gh_avatar/${contributor.login}`"
                  :srcset="`https://ipx.nuxt.com/s_80x80/gh_avatar/${contributor.login} 2x`"
                  class="lg:hover:scale-125 lg:hover:ring-2 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform"
                  width="40"
                  height="40"
                  size="md"
                  loading="lazy"
                >
                  <NuxtLink
                    :to="`https://github.com/${contributor.login}`" :aria-label="contributor.login"
                    target="_blank" class="focus:outline-none" tabindex="-1"
                  >
                    <span class="absolute inset-0" aria-hidden="true"/>
                  </NuxtLink>
                </UAvatar>
              </UTooltip>
            </UAvatarGroup>
          </ClientOnly>
        </template>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          <NuxtLink class="text-center group" to="https://www.npmjs.com/package/hexo-theme-solitude" target="_blank">
            <p
              class="text-6xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400"
            >
              {{ state.downloads }}+
            </p>
            <p>最近一年下载量</p>
          </NuxtLink>

          <NuxtLink class="text-center group" to="https://github.com/valor-x/hexo-theme-solitude" target="_blank">
            <p
              class="text-6xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400"
            >
              {{ state.star }}+
            </p>
            <p>Star 数</p>
          </NuxtLink>
        </div>
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>
