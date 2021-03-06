# 06 - Ajax Type Ahead

## 筆記

### fetch()

以往都是利用 `xmlhttprequest`，但現在用 fetch 能更方便操作非同步請求，他回傳一個 promise ，可以使用 `.then`, `catch` 來操作，，如此一來就不用像傳統的方式監聽 `onload`, `readystatechange` 等事件。

MDN 用法範例:

```javascript
// 一般 GET 請求：
fetch("http://example.com/movies.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

// POST，含額外設定
postData("http://example.com/answer", { answer: 42 })
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error));

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json"
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  }).then(response => response.json()); // 輸出成 json
}
```

幾乎完全可取代傳統的 `xmlhttprequest` ，然而 IE 不支援。

- body.json():解析 json 內容，並回傳一個 promise
  [MDN 說明](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)

### ... operator 展開語法＆其餘參數

範例中有使用到 `...` 的方式將陣列 push ，這邊的用法叫做展開運算符，一般來說要將陣列內容放入另一陣列裡，可能需要跑個迴圈，但使用 `...` 的方式會將陣列內容展開而塞入，當作函數的參數時，也會展開裡面的值做運算。

```javascript
function sum(a, b, c) {
  return a + b + c
}
const args = [1, 2, 3]
sum(…args) // 6
```

另一種 `...` 的用法是其餘參數，通常使用在函數定義時，收集其餘的(剩餘的)參數，形成一個陣列再來進行運算。
用法：

```javascript
function fn(a, b, ...theArgs) {
  console.log(`a=${a}, b=${b} ,c=${theArgs}`);
}
fn(1, 2, 3, 4, 5, 6, 7, 8, 9); //a=1, b=2 ,c=3,4,5,6,7,8,9
```

參考：

[從 ES6 開始的 JavaScript 學習生活](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/rest_spread.html)

[MDN 說明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### RegExp()

```javascript
new RegExp( pattern  [, flags] )
```

定義正規表達式 規則，範例中使用到`gi`的 flag，代表匹配全部相應的值並忽略大小寫。

不使用建構式的話，也可以使用：

```javascript
var reg = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
//myArray = ["dbbd", "bb", index: 1, input: "cdbbdbsbz", groups: undefined]

//等同於
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

通常會使用 `test()` 來驗證使否存在驗證的字符
用`exec()`來輸出來輸出更多資訊

- 與 `string` 搭配:
  - `match()`:抓出符合的字串
  - `search()`:抓出符合字串的 index
  - `replace()`: 範例中有使用到，也可以置換符合 RegExp 的字串

正規表達式很強大，詳細用法日後一定需好好研究。

[MDN 說明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
[MDN 說明-運用篇](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)

### join()

範例使用`join('')`將 map(）後輸出的陣列合併為一個字串，如此才仍使用 `innerHTML` 去寫入。

- join() :  陣列合併為字串，並用 `,` 隔開
- join("") : 陣列合併為字串，中間無分隔符號
- join("+") : 陣列合併為字串，中間為 `+` 符號
