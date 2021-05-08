import Mock from 'mockjs'
Mock.mock('/api/login', 'get', {
  code: '200',
  data: {
    token: 'asdhklashdkljaklsdjklquslkuahklfhioqywior123123123'
  }
})