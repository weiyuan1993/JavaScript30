# 13 - Slide in on Scroll
## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/13-Slide-in-on-Scroll)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/13-Slide-in-on-Scroll)

製作隨著網頁滾動而顯示圖片的效果
<!--more-->

本篇練習CSS特效程式碼作者都寫好了，只需撰寫滾動顯示的邏輯。

## 滑動特效
先寫好對應的 transform class，透過`transform:translateX(-30%) scale(0.95)`，讓圖片一開始先往左移出頁面外，並縮小一點點; 另寫一個 `active` class 設定恢復為 `transfrom:translateX(0%),scale(1)`，在滑動到圖片該顯示的位置時設定此 class ，就會出現滑入並放大一點點的效果。

## 滾輪監聽邏輯

作者先寫了一個`debounce()`的函式，目的為滾動時降低觸發大量 scroll 事件，增進效能。

此範例目的為讓圖片可視範圍出現超過1/2時滑入，必須計算所在圖片高度。

```javascript
    function checkPosition(){
    //透過 forEach 計算每一張圖片
      imgs.forEach(img => {
        // 圖片1/2的位置 = 捲軸已捲動的高度 + 視窗高度 - 一半的圖片高
        const imgInWindow = (window.scrollY + window.innerHeight) - img.height / 2;
        // 目前位置是否超過圖片一半
        const halfShown = imgInWindow > img.offsetTop;
        //圖片底部位置
        const imgBottom = img.offsetTop + img.offsetHeight;
        //圖片是否移出是窗外
        const outOfImgBottom = window.scrollY > imgBottom;
        console.log(window.scrollY,imgInWindow)
        if(halfShown && !outOfImgBottom){
          img.classList.add('active');
        }else{
          img.classList.remove('active');
        }
      });
    }


```









