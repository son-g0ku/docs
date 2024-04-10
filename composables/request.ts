import http from './http'


const request = {
  getContributors: () => {
    return http({
      url: 'https://api.github.com/repos/valor-x/hexo-theme-solitude/contributors',
      method: 'get'
    })
  },
  getStar: () => {
    return http({
      url: 'https://api.qjqq.cn/api/GitHubStar?username=valor-x&repo=hexo-theme-solitude',
      method: 'get'
    })
  },
  getDownloads: () => {
    return http({
      url: 'https://api.qjqq.cn/api/Npmdown??packageName=hexo-theme-solitude',
      method: 'get'
    })
  }
}

export default request
