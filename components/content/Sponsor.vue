<script setup>
const sponsorLink = [
  {
    name: '爱发电',
    link: 'https://afdian.net/a/efu0u0',
    icon: 'i-simple-icons-githubsponsors',
  },
  {
    name: 'Github Sponsor',
    link: 'https://github.com/sponsors/efuo',
    icon: 'i-simple-icons-githubsponsors',
  },
  {
    name: '给项目点个 star',
    link: 'https://github.com/valor-x/hexo-theme-solitude',
    icon: 'i-simple-icons-github',
  },
]

</script>

<template>
  <div>
    <ULink v-for="item in sponsorLink" :key="item.name" :to="item.link" active-class="text-primary" target="_blank"
           inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center gap-1 m-2"
    >
      <UIcon :name="item.icon"/>
      {{ item.name }}
    </ULink>
  </div>
</template>
