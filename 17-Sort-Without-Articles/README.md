# 17 - Sort Without Articles

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/17-Sort-Without-Articles)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/17-Sort-Without-Articles)

排序品牌名稱(由 A-Z)，並忽略英文冠詞。

<!--more-->

## 作法

需使用 `RegExp` 過濾掉開頭的冠詞，注意需使用 `i` 來忽略大小寫，最後將前後空格清除。

```javascript
function strip(bandName) {
    return bandName.replace(/^(a |an |the)/i, "").trim();
}
```

透過 `sort` 排序，字母小的在前，由於 `sort()` 是基於 Unicode 編碼排列

```javascript
const sortedBandName = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
```

最後，透過 `map` 將排序過的陣列輸出成字串

```javascript
document.querySelector("#bands").innerHTML = sortedBandName
    .map(band => `<li>${band}</li>`)
    .join("");
```

## ASCII Code, Unicode

-   ASCII 定義了英文字母、數字字母及符號的代碼表，如：a 在 ASCII table 裡十進位表示為 97，十六進位表示為 61，ASCII Code 一共定義了 128 個字元，其中有 33 個個已陳廢。

-   Unicode 則是萬國碼，定義了全世界各國使用的文字符號，每一個文字符號都有自己的編號，而 Unicode 使用十六進位制，十六進位制表示通常會在前面加上 `0x`，`x` 代表 Hexadecimal，同理八進位為`0o`

-   英文字母在 ASCII Code 與 Unicode 編號是一致的，在使用 `sort()` 排序時預設就是以這個編碼依據做排序，所以能夠照 `a-z` 做排序。

[Wiki](https://zh.wikipedia.org/wiki/ASCII)
[參考文章](https://pjchender.blogspot.com/2018/06/guide-unicode-javascript.html)
