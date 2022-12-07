# test-barba
1.尝试使用barba切换页面——CDN模式可以用
inatall的两种方法： 

<h3>Use with a bundler</h3>

# npm
npm install @barba/core

# yarn
yarn add @barba/core
Then import it like any other module inside your build:

import barba from '@barba/core';

barba.init({
  // ...
});


<h3>Use with a CDN</h3>

<!-- unpkg -->
<script src="https://unpkg.com/@barba/core"></script>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
Then init Barba:

<script>
  barba.init({
    // ...
  })
</script>

2.尝试用sourcetree拉取——已完成

总结：我记得上次写的时候，说是必须正式服务器上的页面才可以用，但是我放到一个测试服，，他还是没效果。
而且cdn模式好像有一个实现了，但是不确定