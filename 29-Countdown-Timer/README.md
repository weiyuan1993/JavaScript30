# 29 Countdown Timer

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/29-Countdown-Timer)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/29-Countdown-Timer)

實作一個倒數計時碼表
<!--more-->


以前大學剛學 JS 時候有做過類似的倒數計時，記得當初直接用 `setInterval` 一秒一秒遞減數值，但其實會不精準，因為 setInterval 不一定是精準秒數的。

## 計算剩餘時間
要計算精準的剩餘時間，可以先記錄開始倒數時的 timestamp, 以及結束時間的 timestamp，透過 `setInterval` 去扣除當下執行到的 timestamp，如此即可精準計算剩餘的時間(因為都是透過 Date.now() 取值，不用考慮 setInterval 是多久執行一次，當然不能超過 1秒才執行一次，會太慢更新，間隔越短，能取得最新當下時間的數值也越快)。

```javascript
function timer(seconds){
    const now = Date.now();
    const then = now + seconds*1000;
    displayTime(seconds);
    displayEndTime(then);
    countDown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);
        displayTime(secondsLeft);
        if(secondsLeft<=0){
            clearInterval(countDown)
        }
    },1000)
}
```

## name 的作用
有些 tag 上會設定 name，有一個很好的用途就是取 DOM

```html
<form name="customForm" id="custom">
  <input type="text" name="minutes" placeholder="Enter Minutes">
</form>
```
可以直接透過 `document` 來取，而不需要選擇器
```javascript
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    // reset form value;
    this.reset();
})
```


