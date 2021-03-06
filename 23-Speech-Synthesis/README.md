# 23 - Speech Synthesis

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/23-Speech-Synthesis)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/23-Speech-Synthesis)

透過 JavaScript 操縱語音播放

<!--more-->

## 作法

此篇利用瀏覽器內建的 `SpeechSynthesis` 來播放語音
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis)

```javascript
// 建立語音服務 api
const msg = new SpeechSynthesisUtterance();
// 設定語音播放的內容
msg.text = document.querySelector('[name="text"]').value;
```

### 播放/暫停

```javascript
// 播放
speechSynthesis.speak(msg);
// 暫停
speechSynthesis.cancel();
```

speechSynthesis 為 window 物件所以可以直接使用

### 渲染語言列表

```javascript
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}
// 監聽語音服務的內容改變，即輸出選項
speechSynthesis.addEventListener("voiceschanged", populateVoices);
```

因為一開始有設定 msg.text，所以能夠觸發 populateVoices。
透過 `speechSynthesis.getVoices()` 能夠取得可用的語言，這邊透過 `map` 函式來輸出每一個 option。

### 設定語言

```javascript
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}
```

### bind 傳函式參數的用法

一般用 `bind` 通常是為了綁定作用域 => `bind(this)` 讓執行這個函式的 this 為當前作用域的 this。
此範例有利用到 `bind(null,false)` 來讓 `toogle()` 傳入 false，第一個值為 `this`，傳入 `null` 代表不綁定( this 為原 this)，第二個之後的參數可以傳此函式的參數來用。
ES6 後可利用箭頭函式 `()=>` 來自動綁定，就不需要使用到 bind。
[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
