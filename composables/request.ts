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
      url: 'https://api.github.com/repos/valor-x/hexo-theme-solitude',
      method: 'get'
    })
  },
  getDownloads: (timeRange: string) => {
    return http({
      url: `https://api.npmjs.org/downloads/point/${timeRange}/hexo-theme-solitude`,
      method: 'get'
    })
  }
}

export default request
