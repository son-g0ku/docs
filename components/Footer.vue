<script setup lang="ts">
const {footer} = useAppConfig()

const footer_column = [{
  label: '社区',
  children: [{
    label: 'QQ 群',
    to: 'https://qm.qq.com/q/VlqOewI4Cu',
    target: '_blank'
  }, {
    label: 'Telegram',
    to: 'https://t.me/efuome',
    target: '_blank'
  }]
}, {
  label: '赞助',
  children: [{
    label: 'Github Sponsor',
    to: 'https://github.com/sponsors/efuo/',
    target: '_blank'
  }, {
    label: '爱发电',
    to: 'https://afdian.net/a/efu0u0/',
    target: '_blank'
  }]
}, {
  label: '友情链接',
  children: [{
    label: 'Efu',
    to: 'https://www.efu.me/',
    target: '_blank'
  }, {
    label: '亦封',
    to: 'https://meuicat.com/',
    target: '_blank'
  }, {
    label: 'isYangs',
    to: 'https://isyangs.cn/',
    target: '_blank'
  }, {
    label: 'btwoa',
    to: 'https://blog.btwoa.com/',
    target: '_blank'
  }]
}, {
  label: '特别赞助',
  children: [
    {
      label: '晞云云计算',
      to: 'https://lightxi.com/',
      target: '_blank'
    }
  ]
}]

</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="footer_column">
        <template #right>
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode"/>

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
