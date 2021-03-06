# 09 - Dev Tools Domination

## 筆記

console 的各種好用方法

<!--more-->

### console.assert()

可輸出測試結果

```javascript
const a = 1;
const b = 2;
console.assert(a === b, `${a},${b} is not equal!`);
```

### console.dir()

可輸出 DOM 到屬性方法

### console.group()

可將 log 組織起來，比較好看

![Imgur](https://i.imgur.com/U3oOyHG.png)

### console.count()

可輸出執行次數

![Imgur](https://i.imgur.com/hO9WJm7.png)

### console.time()

可以計算出區段執行的時間

![Imgur](https://i.imgur.com/XPwaagB.png)

```javascript
console.time("fetching data");
fetch("https://api.github.com/users/weiyuan1993")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });
```
