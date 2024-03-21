<script setup>

const sponsor = [
    {
        name: 'btwoa',
        avatar: 'https://github.com/btwoa.png',
    },
    {
        name: '理随',
        avatar: 'https://github.com/lisuid.png',
    },
]

const sponsorLink = [
    {
        name: '爱发电',
        link: 'https://afdian.net/a/efu0u0',
        icon: 'i-simple-icons-githubsponsors',
    },
    {
        name: '微信',
        link: 'https://7.isyangs.cn/34/65f2e5814db1a-34.png',
        icon: 'i-simple-icons-wechat',
    },
    {
        name: '支付宝',
        link: 'https://7.isyangs.cn/34/65fc1e9fe9ea6-34.png',
        icon: 'i-simple-icons-alipay',
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
    <UAvatarGroup>
      <template v-for="item in sponsor">
        <UAvatar :src="item.avatar" :alt="item.name" />
      </template>
    </UAvatarGroup>

    <h3>感谢以上朋友的支持</h3>

    <p>如果你也想支持我的开源项目，可以通过以下方式：</p>

    <ULink v-for="item in sponsorLink" :key="item.name" :to="item.link" active-class="text-primary" target="_blank" rel="noopener noreferrer"
           inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center gap-1 m-2"
>
      <UIcon :name="item.icon" />
      {{ item.name }}
    </ULink>
  </div>
</template>
