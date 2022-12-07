console.log('Hello Barba');

import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);

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
            once(){
                //with css plugin ,this will not run
                console.log('home');
            },
            leave(){},
            enter(){}
        },{
            name: 'fade',
            to: {
                namespace: ['fade']
            },
            once(){
                //with css plugin ,this will not run
                console.log('fade');
            },
            leave(){
                
            },
            enter(){
                
            }
        },{
            name: 'clip',
            sync: true,
            to: {
                namespace: ['clip']
            },
            leave(){
                
            },
            enter(){
                
            },
            beforeEnter(){
                console.log('clip page loaded');
            }
        },{
            name: 'with-cover',
            to: {
                namespace: ['with-cover']
            },
            leave(){
                
            },
            enter(){
                
            }
        }
    ]
});


import './style.scss';

