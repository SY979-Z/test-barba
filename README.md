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
// barba.init({
//     默认配置：
//     schema-模式: {
//         prefix-前缀名: 'data-custom',
//         wrapper-包裹名: 'wrap'
//     }
//    效果就是body里的  data-barba="wrapper"
//    变成了  data-custom="wrap"
// });

3.设置动画：
The important part for a good transition is animation. As Barba is not an animation library, you will need to import one in order to animate elements on the interface to create your transition.
--良好过渡的重要部分是动画。由于Barba不是一个动画库，您需要导入一个，以便在界面上为元素设置动画以创建过渡。

<h3>使用动画组件gerrnsock</h3>