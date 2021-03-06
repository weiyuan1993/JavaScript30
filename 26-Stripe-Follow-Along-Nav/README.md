# 26 - Stripe Follow Along Nav

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/26-Stripe-Follow-Along-Nav)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/26-Stripe-Follow-Along-Nav)

製作跟隨滑鼠顯示並自適應寬高的 Nav bar 選單
<!--more-->

作法：

與第 [22](https://weiyuan1993.github.io/JavaScript30/22-Follow-Along-Link-Highlighter) 天的 highlight 聚光燈文字的用法類似，透過一個可移動 div，當滑鼠滑入選單時，使它顯示並設定對應的大小與位置，並利用 `transition` 增加淡入淡出的效果。


1. 針對每個 li 做滑鼠監聽
```javascript 
const triggers = document.querySelectorAll('.cool>li');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

triggers.forEach(trigger=>trigger.addEventListener('mouseenter',handleMouseEnter));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave',handleMouseLeave));
```
2. 實作滑鼠移入函式
```javascript
function handleMouseEnter(){
this.classList.add('trigger-enter');
// 
setTimeout(()=>this.classList.contains('trigger-enter')&&this.classList.add('trigger-enter-active'),150);
background.classList.add('open');
//取滑入選單內的 dropdown
const dropdown = this.querySelector('.dropdown');
const dropdownCoords = dropdown.getBoundingClientRect();
const navCoords = nav.getBoundingClientRect();
const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
};
// 設定 background 位置與大小
background.style.setProperty('width', `${coords.width}px`);
background.style.setProperty('height', `${coords.height}px`);
background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}
```
滑鼠移入時將滑入的 `li` 增加 `trigger-enter`，使他底下的 `dropdown` div 能夠使用到 `.trigger-enter .dropdown` 的 class ，讓其顯示。然後讓 `trigger-enter-active` 延遲 150ms 觸發，這樣才不會因為過場動畫的關係，文字反而比背景早出現。

透過 `getBoundingClientRect` 來取得選到的 dropdown 以及整個 nav 位置與大小將 background 設置，在設定 `top`, `left` 時必須扣除整個 nav 的 `top`, `left`。


3. 實作滑鼠移出函式
```javascript
function handleMouseLeave(){
this.classList.remove('trigger-enter','trigger-enter-active');
background.classList.remove('open');
}
```
滑鼠移出就很簡單了，只需把相關的 class 移除即可。

