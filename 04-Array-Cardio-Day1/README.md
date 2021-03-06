# 04 - Array Cardio Day 1

## 筆記

### console.table()
    可輸出表格形式，方便觀看陣列。

### map()
MDN 說明：

    map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
```javascript
var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

### sort() 

MDN 說明：
    sort() 方法會原地（in place）對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
語法：
```javascript
arr.sort([compareFunction])
```
若省略 compareFunction 指定函式來排列，陣列將根據各個元素轉為字串後的每一個字元之 Unicode 編碼位置值進行排序。

compareFunction:

    * 若回傳值小於 0，則 a b

    * 若回傳 0，則 a 與 b 順序不變

    * 若回傳值大於 0，則 b a


### reduce()
MDN 說明：

    方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。

語法：
```javascript
arr.reduce(callback[accumlator, currentValue, currentIndex?, array?], initialValue?)

/* 當回呼函式第一次被呼叫時，accumulator 與 currentValue 的值可能為兩種不同的狀況：若在呼叫 reduce() 時有提供 initialValue，則 accumulator 將會等於 initialValue，且 currentValue 會等於陣列中的第一個元素值；若沒有提供 initialValue，則 accumulator 會等於陣列的第一個元素值，且 currentValue 將會等於陣列的第二個元素值。 */

// 傳入 0 當初始值，如果沒有設定，預設會使用陣列第一個值，此例object會變成字串

//使用箭頭函式不需寫 return
const result4 = inventors.reduce((total, inventor) => {total + (inventor.passed - inventor.year);
}, 0)
ㄕ
```
MDN建議要設定 initialValue，以確保結果

### Array.from() 

    方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體。

    document.querySelectorAll 所選取到的並不是陣列，而是 NodeList，可以透過此方法轉換。

### includes()
MDN 說明：

    判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
語法:
```javascript
// fromIndex:要於此陣列中開始搜尋 searchElement 的位置。如為負數值，則自 array.length - fromIndex 開始向後搜尋。預設值為 0。
arr.includes(searchElement[, fromIndex?])
```
### 解構賦值
    是一種 JavaScript 運算式，可以將陣列或物件中的資料取出成獨立變數。

[MDN完整說明](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

範例中有使用到，可以將陣列內的值先定義成變數，方便之後取用。

進階用法：

```javascript
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20
```
