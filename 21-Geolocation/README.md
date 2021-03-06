# 21 - Geolocation

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/21-Geolocation)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/21-Geolocation)

利用瀏覽器 geolocation API 來製作指南針

<!--more-->

## navigator.geolocation

- getCurrentPosition: 取得目前位置資訊

- watchPosition: 定位資料改變，即回傳資訊

[MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/Using_geolocation)

## 作法

透過 `navigator.geolocation.watchPosition` 來即時監聽使用者當前地理位置狀態，再來改變指南針角度即可。

```javascript
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");
navigator.geolocation.watchPosition(
  position => {
    console.log(position);
    speed.textContent = position.coords.speed;
    arrow.style.transform = `rotate(${position.coords.heading}deg)`;
  },
  err => console.log(err)
);
```

## [Coordinates](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) 資料應用

透過 `watchPosition`, `getCurrentPosition` 會回傳 `Coordinates` 資料，其中包含：

- longitude 經度 > `double`
- latitude 緯度 > `double`
- altitude 高度 > `double` (桌機 null)
- accuracy 經緯度準確度 > `double`
- altitudeAccuracy 高度準確度 > `double` (桌機 null)
- heading 裝置行進方向(0 代表正北, 如果 `speed` 為 0 則值為 `NaN`) > double
- speed 裝置行進速度 > double
