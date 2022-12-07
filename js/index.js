console.log('Hello Barba');

import barba from '@barba/core';

const body = document.querySelector('body');


// barba.hooks.before((data)=>{
//    const background = data.current.container.dataset.background;
    
//     body.style.setProperty('--page-background', background);
// });

barba.init({
    // 如果我们单击将我们带到 的链接，我们将 fade.html播放淡入淡出过渡。如果我们转到index.html，将使用home转换。
    // 这就是我们namespace在transition rule中使用的方式。
    transitions: [
        {
            name: 'home',
            sync: true,
            leave(){
                console.log('leave home');
            },
            enter(){
                console.log('enter home');
            }
        },{
            name: 'bhome',
            leave(){
                console.log('leave bhome');
            },
            enter(){
                console.log('enter bhome');
            }
        },{
            name: 'chome',
            sync: true,
            leave(){
                console.log('leave chome');
            },
            enter(){
                console.log('enter chome');
            },
            beforeEnter(){
                console.log('c page loaded');
            }
        }
    ]
});


import './style.scss';

