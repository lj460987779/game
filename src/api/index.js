import {
  baseUrl
} from '../config/index'

const wxRequest = (options = {}) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data,
      header: options.header,
      success: res => {
        if (res.statusCode > 400) {
          reject(res)
          wx.showToast({
            title: '请求出错',
            icon: 'loading'
          })
          wx.hideLoading()
          return
        }
        wx.hideLoading()
        resolve(res)
      },
      fail: err => {
        wx.showToast({
          title: '请求出错',
          icon: 'loading'
        })
        wx.hideLoading()
        reject(err)
      }
    })
  })
}

const wxGetdata = (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data,
      header: options.header,
      success: res => {
        if (res.statusCode > 400) {
          reject(res)
          wx.showToast({
            title: '请求出错',
            icon: 'loading'
          })
          wx.hideLoading()
          return
        }
        wx.hideLoading()
        resolve(res)
      },
      fail: err => {
        wx.showToast({
          title: '请求出错',
          icon: 'loading'
        })
        wx.hideLoading()
        reject(err)
      }
    })
  })
}

/*
 * 用户相关  auth
 */

export const auth_encryptedUserData = async(params) => await wxRequest({ //解密用户信息并登录
  url: `/auth/login`,
  method: 'POST',
  data: params,
  header: {
    'Accept': 'application/json'
  }
})

export const auth_findUserInfo = async(accessToken) => await wxRequest({ //验证用户token有效
  url: `/user/findUser`,
  method: 'POST',
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

/*
 * 家谱相关 tree
 */

export const tree_getTreeList = async(accessToken) => await wxRequest({ //获取家谱列表
  url: `/activity/getTreeList`,
  method: 'POST',
  data: {},
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tree_getJoinTreeList = async(accessToken) => await wxRequest({ //获取我参与的家谱列表
  url: `/activity/getByUserId`,
  method: 'POST',
  data: {},
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tree_getTreeListNoloading = async(accessToken) => await wxGetdata({ //获取家谱列表  不加载
  url: `/activity/getTreeList`,
  method: 'POST',
  data: {},
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tree_getJoinTreeListNoloading = async(accessToken) => await wxGetdata({ //获取我参与的家谱列表 不加载
  url: `/activity/getByUserId`,
  method: 'POST',
  data: {},
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tree_addTree = async(data, accessToken) => await wxRequest({ //种树
  url: `/activity/addTree`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tree_shareTree = async(data, accessToken) => await wxRequest({ //分享树
  url: `/tree/shareTree`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tree_getTreeName = async(data, accessToken) => await wxRequest({ //分享树
  url: `/tree/getTreeName`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tree_joinTreeUpdate = async(data, accessToken) => await wxRequest({ //已参与家谱,中间表新增修改数据用接口
  url: `/activity/updateJoinTree`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})


export const tree_getDataCount = async(data, accessToken) => await wxGetdata({ //家人印象统计列表
  url: `/tree/getDataCount`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

/*
 * pk问答相关 pk
 */
export const pk_getQAAPkList = async(data, accessToken) => await wxRequest({ // 获取某家谱的pk问题列表
  url: `/person/getQAAPkList`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const pk_resultSave = async(data, accessToken) => await wxGetdata({ // PK结果保存上传
  url: `/questionResult/addQuestionResult`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

/*
 * 家人印象相关 tag
 */
export const tag_findMemoirList = async(Id, accessToken) => await wxRequest({ // 家人印象统计列表
  url: `/activity/findMemoirList`,
  method: 'POST',
  data: {
    treeId: Id,
    pageSize: 0
  },
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tag_updatePersonInfo = async (personId, appellation, gender, zodiac, constellatory, bloodType, accessToken) => await wxRequest({ // 家人印象统计列表
  url: `/activity/updatePersonInfo`,
  method: 'POST',
  data: {
    personId: personId,
    appellation: appellation,
    gender: gender,
    zodiac: zodiac,
    constellatory: constellatory,
    bloodType: bloodType
  },
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tag_getPersonTags = async(personId, accessToken, seniority) => await wxRequest({ // 获取人物标签列表
  url: `/person/getPersonTags`,
  method: 'POST',
  data: {
    personId: personId,
    seniority: seniority
  },
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tag_addPersonTag = async (personId, atag, special, accessToken) => await wxRequest({ // 添加标签
  url: `/person/addPersonTag`,
  method: 'POST',
  data: {
    personId: personId,
    tag: atag,
    special: special
  },
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tag_getTagsOfLib = async(personId, accessToken) => await wxRequest({ // 标签库标签列表
  url: `/person/getTagsOfLib`,
  method: 'POST',
  data: {
    personId: personId
  },
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

export const tag_likeTag = async (Id, accessToken, special) => await wxGetdata({ // 标签点赞
  url: `/person/likeTag`,
  method: 'POST',
  data: {
    tagId: Id,
    special: special
  },
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})

/*
 * 其他
 */

export const bandingPhone = async(data, accessToken) => await wxRequest({ // 
  url: `/user/bandingPhone`,
  method: 'POST',
  data: data,
  header: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})
