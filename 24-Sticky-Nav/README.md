# 24 - Sticky Nav

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/24-Sticky-Nav)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/24-Sticky-Nav)

製作 Sticky Nav bar，讓導航列滑出可視範圍時自動轉變為置頂浮動位置

<!--more-->

## 作法

**CSS**

```css
nav {
  background: black;
  top: 0;
  width: 100%;
  transition: all 0.5s;
  position: relative;
  z-index: 1;
}
```

初始 nav bar top 設定為 0, position 為 `relative`

**JS**

```javascript
const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;
function applyFix() {
  if (window.scrollY >= topOfNav) {
    nav.classList.add("fix-nav");
    document.body.style.paddingTop = nav.offsetHeight + "px";
  } else {
    nav.classList.remove("fix-nav");
    document.body.style.paddingTop = 0;
  }
}
window.addEventListener("scroll", applyFix);
```

抓取 nav bar 的 `offsetTop` 來取得他相對於 body 頂部的距離。
監聽 `scroll` 事件來偵測當前視窗高度，當大於 nav bar 的位置時增加一個 class `fix-nav`，反之則移除。
當 nav bar 變為 `fixed` 狀態時，需在 body 補上原先 nav bar 佔留的空間，否則滑動起來會跳動。

## LOGO 出現的動畫

**LOGO CSS**

```css
li.logo {
  max-width: 0;
  overflow: hidden;
  background: white;
  transition: all 0.5s;
  font-weight: 600;
  font-size: 30px;
}
```

設定 `max-width` 讓最大寬度為 0，這樣他一開始就不會出現。

等到 nav bar 被設定為 `fixed` 狀態時，透過 CSS 選擇器選擇 `fix-nav` 的 `li.logo`，這樣他就只會將樣式應用在屬於 `fix-nav` 狀態下，離開此狀態則自動移除樣式。

```css
.fix-nav li.logo {
  max-width: 500px;
}
```

在 `fix-nav`狀態時，`max-width`  設定成 500px，因為 logo 原先有設定 `transition` 過場，所以他在寬度變更時會有個漸變的效果。

同理，也可以運用在文字區塊來做效果

```css
.fix-nav + .site-wrap {
  transform: scale(1);
}
```

這樣就會讓文字區會有放大的效果。
