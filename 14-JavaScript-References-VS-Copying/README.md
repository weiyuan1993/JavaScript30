# 14 - JavaScript References VS Copying

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/14-JavaScript-References-VS-Copying)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/14-JavaScript-References-VS-Copying)

JavaScript 參考與複製的差別 
<!--more-->

在 JS 裡，`number`, `string` 等都是原始型別,為 `call by value` , 可以很輕易地用指定的方式複製，更動複製的值並不會影響原值，然而在 `array`,`object` 中就不一樣了，只會拿到一個原值的參考，為 `call by references`，更動參考的值也會影響到原值。此時必須透過特殊方法來複製一份原值來解決。

### Array

- `slice()`
可回傳一個新的陣列
- `[].concat()`
與空陣列組合成新陣列
- `[...array]`
將原陣列拆開塞入新的空陣列
- `Array.from()`
從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體

### Object

- `Object.assign({},object)`
被用來複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件
- `{...object}` 將原物件塞入新的空物件

上述兩種只會複製物件中的第一層屬性，更深層屬性無法複製一樣會參考到原值。

- `JSON.parse(JSON.stringify(object))`
比較偏門的做法，可解決多層物件下的複製

## lodash
直接採用第三方函式庫，可以使用 `cloneDeep` 簡單解決。





