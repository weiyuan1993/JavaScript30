# 12 - Key Sequence Detection

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/12-Key-Sequence-Detection)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/12-Key-Sequence-Detection)

實作監聽鍵盤輸入特殊指令的程式，如遊戲祕技指令Konami code(↑↑↓↓←→←→BA)。

<!--more-->

作法： 監聽鍵盤的輸入並儲存到陣列裡，透過splice 讓陣列長度不超過秘技長度，並比對之。

### Array.splice()

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```
本範例教學使用 `pressed.splice(-secretCode.length-1,pressed.length-secretCode.length)`，第一個參數用負數代表從後往前數，第二個參數用輸入的長度扣除祕技的長度，此為欲刪除的數量。

個人認為此教學使用方式較難理解，自己是覺得可以直接刪除 index 0 的值即可 
`pressed.splice(0,pressed.length-secretCode.length)`，或者用 shift()一樣能達到同等效果。
```javascript

if(pressed.length>secretCode.length){
    pressed.shift();
}
```