# 18 - Adding Up Times with Reduce

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/18-Adding-Up-Times-with-Reduce)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/18-Adding-Up-Times-with-Reduce)

透過精簡的 `map()` 與 `reduce()` 搭配來計算影片列表總時間

<!--more-->

## 作法

練習操作陣列的 `map()` 與 `reduce()`，皆為前面單元用過的方法，此篇為稍微進階的搭配。

1.  先使用 `querySelectorAll` 抓取所有 `li` DOM，並使用 `Array.from` 將 NodeList 轉為 Array 後才能使用 map() 與 reduce()

```javascript
const timeNodes = Array.from(document.querySelectorAll(".videos li"));
```

2.  因為 `map()` 會回傳一個新的操作後的陣列，所以可以繼續再用 `.map()` 與 `reduce()` 接下去操作。

```javascript
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(time => {
        // 可用 Number 代替
        const [mins, secs] = time.split(":").map(parseFloat);
        return mins * 60 + secs;
    })
    .reduce((total, second) => total + second);
```

-   第一個 `map()` 取每個 li 上 `data-time` 的值。
-   第二個 `map()` 透過陣列解構的方式，將每個 time `split(":")` 成為長度為二的陣列([min,sec])，這邊特別的是，再透過一個 `map()` 塞入 `parseFloat` 將此陣列內元素轉化為數字 (也可塞入 `Number`)，最後加總計算成秒數後回傳
-   最後透過 `reduce` 累加每個秒數及得到總秒數。

3.  最後的步驟比較簡單，透過簡易的除法與餘數來取得`時：分：秒`就完工了

map() reduce() 可參考之前的挑戰筆記
[JavaScript30-Day4](https://weiyuan1993.github.io/2018/06/19/javascript30-04/)

注：為什麼不使用 parseInt  將陣列內元素轉換為數字？
可參考 [這篇文章](https://calpa.me/2017/05/31/javascript-array-map-parseint-solution/) 的說明。

簡單來說就是 `map()` 裡的 callback 有三個參數`(currentValue,index,array)`，而 `parseInt` 會接受到 `currentValue`, `index` 兩個參數，而使用 index 來代表`進位系統的數字`(一般使用時沒有指定通常是 10)，而此 index(進位系統數值) 非彼 index(索引)，當然無法操作囉，會造成 NaN。

可以簡單使用 `parseFloat` 函式，他只接受一個參數 `currentValue`，或者使用 `Nubmer` 也可以。
