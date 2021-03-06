# 22 - Follow Along Link Highlighter

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/22-Follow-Along-Link-Highlighter)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/22-Follow-Along-Link-Highlighter)

用 CSS 實現聚光燈效果的 highlight 文字

<!--more-->

## 作法

在 body 上製作一個浮動的 `span`，使它擁有 `highlight` class 效果

```css
.highlight {
  transition: all 0.2s;
  border-bottom: 2px solid white;
  position: absolute;
  top: 0;
  background: white;
  left: 0;
  z-index: -1;
  border-radius: 20px;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
```

初始位置在左上角，由於還沒有設定寬高，所以是看不見的。

接著寫滑鼠移動到連結上的 highlight 函式。

```javascript
function highlightEffect() {
  // get element coordinate
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
  console.log(coords);
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
links.forEach(link => link.addEventListener("mouseenter", highlightEffect));
```

因為 `mouseenter` 監聽所有的 `a` 連結，所以可以透過 `getBoundingClientRect` 取的 `a` element 的座標資訊，將 highlight span 設定成被滑入的 `a` 元素位置與大小及完成，座標位置需補上捲軸移動的位移，因為 `getBoundingClientRect` 是取得當前元素與視窗的位移量。
