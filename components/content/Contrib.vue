<template>
    <div>
        <UAvatarGroup :size="sm" :max="12">
            <template v-for="contributor in contributors">
                <UAvatar :src="contributor.avatar_url" :alt="contributor.login"></UAvatar>
            </template>
        </UAvatarGroup>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            contributors: [],
        };
    },
    mounted() {
        this.fetchContributors();
    },
    methods: {
        async fetchContributors() {
            try {
                const response = await axios.get('https://api.github.com/repos/valor-x/hexo-theme-solitude/contributors');
                this.contributors = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>