# 25 - Event Capture, Propagation, Bubbling and Once

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/25-Event-Capture-Propagation-Bubbling-and-Once)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/25-Event-Capture-Propagation-Bubbling-and-Once)

探討 DOM 的事件傳遞機制 Event Capture, Propgation, Bubbling and Once

<!--more-->

範例使用三個 div, one > two > three 層層包覆，如果點擊了最內層的 three div，會發現其實外面兩層 div 也會觸發 click，這是 DOM 的事件傳遞機制。

在點擊觸發當下，事件會從根節點(html -> body -> div)開始往下傳遞，這個階段稱為`capture phase`捕獲階段，直到傳遞到 `target`(被點擊的目標)本身，稱為 `target phase`，之後會再從這個 `target` 子節點往上傳遞到根節點，就是所謂的 `bubbling phase` 冒泡階段。

W3C圖解：

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

## Event Capture & Bubbling

想要改變事件監聽順序從 `capture` 還是 `bubbling`階段開始，`addEventListener()` 的第三個參數可以設定，預設無給第三個參數或給 `false` 即為 `bubbling`，若設為 `true` 即為使用在 `capture` 階段。

## Propagation
想要停止事件傳遞，可以使用 `stopPropagation()`
```javascript
button.addEventListener('click', (e) => {
e.stopPropagation();
console.log('Click!!!');
});
```
這樣子事件綁定就只會在目標 `target` 上，不會再往上傳遞。與 `preventDefault()` 是不一樣的效果，他是用來防止預設行為的，如點擊 a tag，開新分頁或開新分頁或跳轉連結。


## Once

`addEventListener` 第三個參數可以用物件來設定，其中可以設定 `once` 值，這樣就可以輕鬆達成監聽事件觸發一次後即移除監聽，不需再寫 `removeEventlistener`，滿方便的。

```javascript
button.addEventListener('click', () => {
console.log('Click!!!');
}, {
capture:false,
once: true
});
// 點擊一次之後即無效
```

[參考](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
