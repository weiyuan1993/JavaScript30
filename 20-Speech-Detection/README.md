# 20 - Speech Detection

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/20-Speech-Detection)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/20-Speech-Detection)

用 JS 操作語音辨識，並即時輸出文字!

<!--more-->

## 作法

### 新建語音辨識

語音辨識為瀏覽器內建，但目前似乎只有 Chrome 支援。

```javascript
// 新建語音辨識
const speechRecongnition = new SpeechRecognition();
// 控制是否即時回傳
speechRecongnition.interimResults = true;
// 語言
speechRecongnition.lang = "zh-TW";
```

語言沒設定的話預設應該是瀏覽器語言，所以我後來做了按鈕可以切換到英文，因為在中文的辨視下講英文辨識率較低。

### 先設定好初始文字

```javascript
let p = document.createElement("p");
p.textContent = "請開始說話 🗣";
const words = document.querySelector(".words");
words.appendChild(p);
```

### 輸出辨識內容

```javascript
speechRecongnition.addEventListener("result", e => {
  // 這邊為了取得回傳的結果，並將所有辨識的文字串在一起
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
  // 這邊可以濾掉髒話XD
  const filterBadLang = transcript.replace(/幹你娘|靠北|操你媽/gi, "💩");
  p.textContent = filterBadLang;

  // 監測是否辨識停止，停止後新增新的 p 為下一句做準備來達到換行效果
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});
```

辨識的途中可以做一些小運用，比如聽到一些關鍵字可以屏蔽掉，或者是當作語音助理，回應內容，查天氣等等。

### 辨識啟動

```javascript
speechRecongnition.addEventListener("end", speechRecongnition.start);
speechRecongnition.start();
```

為了讓辨識可以一直啟動，所以在 end 觸發時再次觸發 start。
