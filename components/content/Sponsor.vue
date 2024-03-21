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

</script>

<template>
    <div>
        <UAvatarGroup>
            <template v-for="item in sponsor">
                <UAvatar :src="item.avatar" :alt="item.name"></UAvatar>
            </template>
        </UAvatarGroup>

        <h3>感谢以上朋友的支持</h3>

        <p>如果你也想支持我的开源项目，可以通过以下方式：</p>

        <ULink href="https://afdian.net/a/efu0u0" class="text-blue-500 hover:underline">爱发电</ULink>

        丨

        <ULink href="https://7.isyangs.cn/34/65f2e5814db1a-34.png" class="text-blue-500 hover:underline">微信</ULink>

        丨

        <ULink href="https://7.isyangs.cn/34/65fc1e9fe9ea6-34.png" class="text-blue-500 hover:underline">支付宝</ULink>


        丨

        <ULink href="https://github.com/valor-x/hexo-theme-solitude" class="text-blue-500 hover:underline">给项目点个 star</ULink>  


        <p>感谢你的支持！</p>
    </div>
</template>