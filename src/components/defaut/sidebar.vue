<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="24">

        <el-menu
          :default-active="$route.path"
          :default-openeds="openeds"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          router
          unique-opened
          active-text-color="#ffd04b">

          <el-submenu :index="child.subs[index].index" v-for="(child, index) in currentNavItems" :key="index">

            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{child.title}} </span>
            </template>
            <el-menu-item :index="item.index" v-for="(item,indexs) in child.subs" :key="indexs">
              {{item.title}}
            </el-menu-item>

          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'v-sidebar',
    data() {
      return {
        openeds: ['1'],
        openeds1: ['2'],
        isClicked: false,
        iconData: {metas: ''},
        systems: '',
        items: '',
        value: '',
        input2: '',
        navData: '',
        currentNavItems: [],
        isHover: false
      }
    },
    methods: {
      umber(n) {
        return n.replace(/[^0-9]/ig, "")
      },
      sliderHover() {
        this.isClicked = false
      },
      handleOpen(key, keyPath) {
        console.log("展开");
        console.log(key);
        console.log(keyPath);
        sessionStorage.setItem('showIndex', JSON.stringify(keyPath));
        if (keyPath[0] === "/menu1/menu1_item1") {
          this.$router.push({path: '/menu1/menu1_item1'});
        } else if (keyPath[0] === "/menu2/menu2_item2") {
          this.$router.push({path: '/menu2/menu2_item2'});
        } else if (keyPath[0] === "/menu3/menu3_item3") {
          this.$router.push({path: '/menu3/menu3_item3'});
        } else if (keyPath[0] === "/menu4/menu4_item4") {
          this.$router.push({path: '/menu4/menu4_item4'});
        }
      },
      handleClose(key, keyPath) {
        console.log("关闭");
        console.log(key);
        console.log(keyPath);
      }
    },
    created() {
      this.openeds = JSON.parse(sessionStorage.getItem('showIndex'))

      // 从sessionStorage得到menuData
      this.currentNavItems = JSON.parse(sessionStorage.getItem('routes'))
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .tac {
    width: 100%;
  }

  .sidebar-toggle {
    width: 20px;
    height: 80px;
    position: absolute;
    left: 198px;
    top: 300px;
  }

  .groupOne {
    width: 100px;
    clear: both;
    height: 300px;
  }

  .mcd-title {
    margin-top: 10px;
    margin-left: -14px;
  }

  .mcd-title-child {
    margin-left: 20px;
  }

  a {
    cursor: pointer;
  }

  .sidebar {
    height: 100%;
    display: block;
    position: fixed;
    min-width: 200px;
    left: 0;
    top: 61px;
    background-color: rgb(239, 240, 241);
  }

  .sidebar > ul {
    height: 100%;
  }

  .select {
    position: fixed;
    bottom: 0;
    width: 178px;
    left: 2px;
  }

  .el-icon-plus {
    right: 0px;
  }

  .collect-icon {
    position: absolute;
    top: 21px;
    right: 0px;
  }

  .eltabs {
    height: calc(100% - 36px);
  }

  .navside {
    position: fixed;
    left: 100px;
    bottom: 0px;
    /*box-shadow:2px 2px 2px 2px rgba(0, 0, 0, 0.2);*/
    h3 {
      font-weight: normal;
      font-size: 20px;
      color: rgb(68, 68, 68);
      margin-bottom: 20px;
    }
    .system {
      div {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }

  .mini_bar {
    position: relative;
    .mcd-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      border-radius: 2px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      width: 100%;
    }
    .mcd-menu .mcd-menu-li {
      position: relative;
      width: 200px;
      border-bottom: 1px solid #e4e4e4;
      /*height: 36px;*/
    }
    .mcd-menu .mcd-menu-li .child-title {
      display: block;
      text-decoration: none;
      padding: 12px 20px;
      color: rgb(149, 150, 151);
      text-align: left;
      height: 30px;
      line-height: 30px;
      position: relative;
      border-radius: 2px;
      font-size: 14px;
      img {
        float: left;
      }
      strong {
        float: left;
      }
    }

    .mcd-menu .mcd-menu-li .mcd-menu-li-ul {
      height: 100%;
      position: relative;
      width: 150px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul .mcd-menu-li-ul-group li a {
      color: #777;
    }
    .mcd-menu .mcd-menu-li:hover > a {
      background-color: white;
      color: #eb4f52;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul .mcd-menu-li-ul-group li:hover > a {
      background-color: #F8F8F8;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul {
      position: absolute;
      height: auto;
      padding: 10px;
      margin: 0;
      background: #F8F8F8;
      /*opacity: 0;*/
      visibility: hidden;
      transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -webkit-transition: all 300ms linear;
      left: 220px;
      top: 0px;
      border-left: 4px solid #eef0f7;
      border-radius: 5px;
    }

    .mcd-menu .mcd-menu-li .topreset {
      top: -310px;
    }

    .mcd-menu .mcd-menu-li .child-title {
      text-indent: 20px;
      font-size: 16px;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul:before {
      content: "";
      position: absolute;
      top: 25px;
      left: -9px;
      border-right: 5px solid #eef0f7;
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
    }
    .mcd-menu .mcd-menu-li:hover > ul,
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul .mcd-menu-li-ul-group li:hover > ul {
      display: block;
      z-index: 100;
      /*opacity: 1;*/
      visibility: visible;
      left: 200px;
      background-color: #ffffff;
      border-radius: 5px;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul h3 {
      font-weight: normal;
      font-size: 14px;
      text-align: center;
      box-sizing: border-box;
      margin-bottom: 10px;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul .mcd-menu-li-ul-group li {
      height: 20px;
      line-height: 20px;
      float: left;
      margin-left: 10px;
      font-size: 14px;
      border: 0;
      display: block;
      text-decoration: none;
      padding: 12px 20px;
      text-align: left;
      position: relative;
      border-radius: 2px;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul .mcd-menu-li-ul-group li a {
      text-decoration: none;
      display: block;
      height: 20px;
      background-color: #ffffff;
      padding: 2px 10px;
      border-radius: 3px;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul .mcd-menu-li-ul-group li a i {
      font-size: 16px;
      display: inline-block;
      margin: 0 10px 0 0;
    }
    .mcd-menu .mcd-menu-li .mcd-menu-li-ul .mcd-menu-li-ul-group li:hover > ul {
      top: 0px;
      left: 300px;
    }
  }

  .icon-style {
    color: rgba(0, 0, 0, .4);
  }

  .isShowSlider {
    visibility: hidden !important;
  }
</style>
