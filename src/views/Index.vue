<template>
  <div id="hlg-index">
    <mt-swipe :auto="5000" >
      <mt-swipe-item v-for="item in myList.lbList" :key="item.cid">
        <img :src="url + '/image/carousel/' + item.img"/>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-12 sudoku">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="#">
          <img src="../assets/img/menu4.png"/>
          <div class="mui-media-body">话费充值</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="#">
          <img src="../assets/img/menu2.png"/>
          <div class="mui-media-body">商品特卖</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/menu3.png"/>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/menu5.png"/>
          <div class="mui-media-body">loc ation</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/menu1.png"/>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/menu6.png"/>
          <div class="mui-media-body">更多</div>
        </a>
      </li>
		</ul>
    <div class="hlg-remen">
      <span>热门商品</span>
      <ul class="mui-table-view mui-grid-view mui-grid-12">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" v-for="item in myList.rmList" :key="item.id" @click="goods(item.did)">
          <div class="mui-media-body">{{item.title}}</div>
          <img :src="url + '/image/product/' + item.sm"/>
        </li>
      </ul>
    </div>
    <div class="hlg-shop">
      <span>店铺推荐</span>
      <ul class="mui-table-view mui-grid-view mui-grid-12">
        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6" v-for="item in myList.dpList" :key="item.id" @click="shop(item.sid)">
          <div class="mui-media-body">{{item.shop_name}}</div>
          <img :src="url + '/image/shop/' + item.pic"/>
        </li>
      </ul>
    </div>
    <div class="hlg-recommend">
      <span>好货推荐</span>
      <ul class="recommend-item">
        <li class="recommend-list" v-for="item in myList.tjList" :key="item.id" @click="goodsDetail(item.did)">
          <img :src="url + '/image/product/' + item.md" />
          <div class="recommend-body">{{item.subtitle}}</div>
          <span class="recommend-price">{{item.price | currency}}</span>
        </li>
      </ul>
    </div>
    <div class="bottom">到底啦~亲！</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: this.$store.state.globalSettings.apiUrl,
      myList: {}
    }
  },
  methods: {
    goods (did) {
      console.log(did)
    },
    shop (sid) {
      console.log(sid)
    },
    goodsDetail (did) {
      console.log(did)
    },
    getData () {
      var url = this.url
      this.$axios.get(url + '/index').then((res) => {
        this.myList = res.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
  $myBackColor: #f00;
  $myColor: #fff;
  .mui-table-view:before,
  .mui-table-view:after {
    height: 0px !important;
  }
  #hlg-index {
    background-color: $myBackColor;
    .mint-swipe {
      height: 160px;
      img {
        width: 100%;
      }
    }
    .sudoku {
      background-color: $myBackColor;
      li {
        padding-bottom: 5px;
        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }
      .mui-media-body {
        margin: 0;
        color: $myColor;
        font-size: 12px;
      }
    }
    .hlg-remen {
      padding: 0 8px;
      span {
        color: $myColor;
        padding-left: 5px;
      }
      ul{
        padding: 0;
        margin: 8px 0;
        border-radius: 5px;
        li {
          margin-right: 0;
          padding: 5px 10px;
          border-bottom: 1px solid $myBackColor;
          border-right: 1px solid $myBackColor;
          .mui-media-body {
            margin: 8px 0;
          }
        }
      }
      ul>li:nth-child(4)~li {
        border-bottom: 0
      }
      ul>li:nth-child(4),
      ul>li:nth-child(8) {
        border-right: 0;
      }
    }
    .hlg-shop {
      padding: 0 8px;
      span {
        color: $myColor;
        padding-left: 5px;
      }
      ul{
        padding: 0;
        margin: 8px 0;
        border-radius: 5px;
        li {
          margin-right: 0;
          padding: 5px 10px;
          border-bottom: 1px solid $myBackColor;
          border-right: 1px solid $myBackColor;
          .mui-media-body {
            margin: 8px 0;
          }
        }
      }
      ul>li:nth-child(2)~li {
        border-bottom: 0
      }
      ul>li:nth-child(2),
      ul>li:nth-child(4) {
        border-right: 0;
      }
    }
    .hlg-recommend {
      padding: 0 8px;
      span {
        color: $myColor;
        padding-left: 5px;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration:none;
        list-style:none;
        color:#000;
      }
      .recommend-item {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .recommend-list {
          background-color: $myColor;
          margin-bottom: 5px;
          padding: 5px;
          border-radius: 5px;
          width: 49%;
          .recommend-body {
            overflow: hidden;
            // white-space: nowrap;
            text-overflow: ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
            text-indent: 1em;
            font-size: 14px;
            margin-bottom: 10px;
            // height: 50px;
          }
          img {
            width: 90%;
            display: block;
            margin: 5px auto;
          }
          .recommend-price {
            color: #f89c0e;
          }
        }
      }
    }
    .bottom {
      text-align: center;
      color: #040304;
      font-size: 14px;
      padding: 10px 0 70px 0;
    }
  }
</style>
