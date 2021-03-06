# 11 - Custom Video Player

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/11-Custom-Video-Player)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/11-Custom-Video-Player)

實作一個客製化的影片播放器，可以操控進度條，快進與倒退，播放暫停，播放速度，音量等。

<!--more-->

### 可減少 if else 的寫法

```javascript
function togglePlay() {
    //這種寫法可以減少 if else
    const method = video.paused ? "play" : "pause";

    video[method]();
}
```
一個 method 處理兩種執行的情況。


```javascript
progress.addEventListener("mousemove",e => mousedown && changeCurrentTime(e));
```

使用 `&&` 也可減少 if else，此例的 `mousedown` 為 true 才會繼續判斷右邊的函式，此時右邊函式可以直接執行，省略了 if(mousedown)的方式，可讀性也不錯。

### linear-gradient
製作漸層色彩，`linear-gradient(135deg, #159956 0%, #bcbdd8 50%, #a7850e 100%)`,參數由左而右代表是起始角度，顏色，起始位置...。

### flex-wrap
允許 flex 元素單行顯示或多行顯示
- flex-wrap:nowrap 單行
- flex-wrap:wrap 多行
- flex-wrap:wrap-reverse 多行反轉排列

範例使用 flex-wrap:wrap，讓進度條與其他按鈕可以分行顯示，否則預設 nowrap 會造成元素都擠在一起。

### transform 多重使用

範例使用 `transform:translateY(100%) translateY(-5px)`，讓控制項往下調並露出5px。

### hover
```css
.player:hover .player__controls {
    transform: translateY(0);
}
```
透過這種方式，可以在 `.player` 被 `hover` 時，改變 `.player__controls` 的 `transform`