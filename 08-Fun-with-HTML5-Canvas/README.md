# 08 - Fun With HTML5 Canvas

## 筆記

用 canvas 實作漸變顏色大小的畫筆。

<!--more-->

### canvas

```javascript
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
// 讓 canvas 全螢幕
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 設定勾勒圖形時用的顏色
ctx.strokeStyle = "#BADA55";
// 設定填滿圖形時用的顏色.
ctx.fillStyle = "black";
// 設定線條寬度。
ctx.lineWidth = 5;
// 設定線條結尾的樣式。
ctx.lineCap = "round";
// 設定線條和線條間接合處的樣式。
ctx.lineJoin = "round";

//開始一條路徑
ctx.beginPath();
//設定開始點
ctx.moveTo(lastX, lastY);
//要畫過去的點
ctx.lineTo(e.offsetX, e.offsetY);
//開始畫
ctx.stroke();
```
