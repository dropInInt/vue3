import Mock from 'mockjs'

Mock.mock('/\/api\/login/', {
  code: '200',
  data: {
    token: 'asdhklashdkljaklsdjklquslkuahklfhioqywior123123123'
  }
})