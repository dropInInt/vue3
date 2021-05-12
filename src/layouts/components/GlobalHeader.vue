<template>
  <div class="globalHeader">
    <div class="header-right">
      <div class="user-help">

      </div>
      <div class="user-info">
        <el-dropdown trigger="click">
          <div class="user-info-toggle">
            <el-avatar size="small">
              <i class="iconfont icon-username"></i>
            </el-avatar>
            <span>欢迎登录，</span>
            <span class="user-info-username"></span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  setup () {
    

    return {}
  }
}
</script>

<style scoped>
.globalHeader {
  background: #24aaff;
  height: 100%;
  display: flex;
}
.header-right {
  flex: 1;
}
.header-right .user-info {
  float: right;
  width: 200px;
  height: 32px;
  background: #fff;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 10%);
  line-height: 32px;
  margin-top: 16px;
  margin-right: 20px;
  border-radius: 4px;
}
.user-info .user-info-toggle {
  height: 100%;
  line-height: 32px;
  cursor: pointer;
}
.user-info .user-info-toggle .el-avatar{
  height: 18px;
  width: 18px;
  line-height: 18px;
  display: inline-block;
  background: #f00;
  text-align: center;
  margin-left: 12px;
  border-radius: 50%;
  background: #ffeccc;
  margin-right: 5px;
  position: relative;
  top: 3px;
}
.user-info-toggle .el-avatar .iconfont {
  font-size: 2px;
  color: #ff9d00;
}
.user-info-toggle .user-info-username {
  width: 72px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>