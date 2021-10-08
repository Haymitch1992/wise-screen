// 降级状态
var goBack = function () {
  let obj = JSON.parse(localStorage.getItem('current'));
  if (this.$route.path !== '/'+ obj.router_no_found) {
    this.$router.push(obj.router_no_found);
  } else {
    console.log('当前路由',this.$route.path)
  }
}

// 正常服务
var goPage = function () {
  let obj = JSON.parse(localStorage.getItem('current'));
  if (this.$route.path !=='/'+ obj.router_url) {
    this.$router.push(obj.router_url);
  } else {
    console.log('当前路由',this.$route.path)
  }
}

// 欢迎词页面
var goWelcome = function () {
  let router_url = 'welcome'
  // let obj = JSON.parse(localStorage.getItem('current'));
  if (this.$route.path !=='/'+ router_url) {
    this.$router.push(router_url);
  } else {
    console.log('当前路由',this.$route.path)
  }
}

// 火灾页面 
var goFire = function () {
  let obj = JSON.parse(localStorage.getItem('current'));
  if (this.$route.path !=='/'+ obj.fire_url) {
    this.$router.push(obj.fire_url);
  } else {
    console.log('当前路由',this.$route.path)
  }
}


export {
  goBack,
  goPage,
  goWelcome,
  goFire
};