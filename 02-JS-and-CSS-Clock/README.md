# 02 - JS and CSS Clock

## 筆記

### transform:rotate();  
必須計算出秒針分針時針每秒變動的角度，特別的是分針和時針必須加入秒針和分針已經走過的角度。

必須將表面 rotate 90度，不然整個時鐘會是歪的，因為rotate 是以水平為0度基準，而指針是垂直開始計算。

### transition-timing-function
transition的加強版，可以利用開發者工具自己調整不同曲線，這次秒針的跳動感就是用這個特性做的

### setInterval
setInterval 會延遲到設定的秒數才執行第一次(此範例會一秒後執行)，可以先 call 一遍 setTime() 來避免載入頁面時顯示錯誤指針。

### 更換 class

因為指針在回到0度時，transition 會誤判為做倒回去繞一圈的動畫，導致0秒時指針會閃爍，為了解決此問題一開始直接對element style 的 transition 設為 `''` ，結果發現沒作用，必須更換掉 `.hand` class 才行。

add / remove class
```javascript
element.classList.remove('hand');
element.classList.add('hand-without-animation');
//多重
element.classList.add('hand','abc','def');
```
toggle class

toggle() 存在此 className 刪除/不存在則新增
```javascript
element.classList.toggle('hand-without-animation');
```

直接設定 class 的方式

```javascript
// 可利用空白設定多重 class
element.style.className = ' hand-without-animation';

```
