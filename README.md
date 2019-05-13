# redealer

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



// ------------  预约经销商 新需求       -----------
1.  将原来设定的预约未来7天 改成  可预约30天；
修改代码：choiseTime.vue  = 》
   a :  let len = 30; // 预约未来30天的工位    (新增)；
   b :  注释：
            // endDay = len + (6-new Date(getToDay(0)).getDay())
            // endDay = 6;
