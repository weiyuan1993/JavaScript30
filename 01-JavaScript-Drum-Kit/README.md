# 01 - JavaScript Drum Kit

## 筆記


### querySelector
```javascript
docuemnt.querySelector(`audio[data-key=63]`)
```
此法可以選擇 audio tag 符合有 data-key=63 attribute 的 element

[CSS選擇器](http://www.w3school.com.cn/cssref/css_selectors.asp)

### transitionend event 
可以監聽 css transition 動畫結束，來移除 class

### 利用 forEach 監聽全部按鈕
對象必須是陣列，可針對陣列內每一元素綁定監聽

### flex
第一次用到，這邊記錄一些基礎用法，之後應該會開一篇學專精一點
```css
.container{
    display:flex; /* 使用flex需設定, inline-flex 元素不會換行*/
    flex-direction:row; /* 定義排列方向, row(預設):從左到右，再上到下; row-reverse:與row相反; 
                           column:從上到下，在左到右; column-reverse:與column相反
                        */
    /* justify-content 決定內容元素與flexbox水平對齊的位置*/
    justify-content: center;     /* 居中排列 */
    justify-content: flex-start; /* 從行首起始位置開始排列 */
    justify-content: flex-end;   /* 從行尾位置開始排列 */
    justify-content:space-between; /*平均分配內容元素，左右元素將會與 flexbox 貼齊*/
    justify-content:space-around; /*平均分配內容元素，間距也平均分配*/

    /* align-items 決定內容元素與 flexbox 垂直對齊的位置*/
    align-items:flex-start;/* 對齊最上面的 cross start */
    align-items:flex-end;/* 對齊最下面的 cross end */
    align-items:center;/* 垂直置中 */
    align-items:stretch;/* 預設值，將內容元素全部撐開至 Flexbox 的高度 */
    align-items:baseline;/* 以所有內容元素的基線作為對齊標準 */
    
}
```
[可參考這篇](http://www.oxxostudio.tw/articles/201501/css-flexbox.html)

