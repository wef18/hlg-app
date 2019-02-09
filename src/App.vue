<template>
<!-- import IndexVue from './views/Index.vue'; -->
  <div id="app-container">
    <mt-header fixed title="欢乐购"></mt-header>
    <router-view/>
    <nav class="mui-bar mui-bar-tab" @click="activeNav">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
      <router-link class="mui-tab-item" to="/classify">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
      </router-link>
			<router-link class="mui-tab-item" to="/shopping">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <!-- <span class="mui-badge"></span> -->
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
      <router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    activeNav () {
      
    }
  }
}
</script>


<style lang="scss">
  #app-container{
    padding-top: 40px;
    overflow-x: hidden;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
