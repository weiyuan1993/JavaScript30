# 28 Video Speed Controller

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/28-Video-Speed-Controller)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/28-Video-Speed-Controller)

製作可調整影片速度的 bar
<!--more-->

作法：

1.取 DOM及滑鼠點擊邏輯
```javascript
const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
let isClick = false;
speed.addEventListener('mousemove',handleMove);
speed.addEventListener('mousedown',()=>isClick = true);
speed.addEventListener('mouseup',()=>isClick = false);
speed.addEventListener('mouseleave',()=>isClick = false);
})
```

2.監聽滑鼠移動

```javascript
if(isClick){
    const y = e.pageY - this.offsetTop;
    const percent = y/this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent*100) + '%';
    speedBar.style.height = height;
    // 為了有最小值所以 +min 
    const playbackRate = percent * (max-min)+min;
    speedBar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
  }
```
