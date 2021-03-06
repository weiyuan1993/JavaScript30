# 16 - Mouse Move Shadow

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/16-Mouse-Move-Shadow)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/16-Mouse-Move-Shadow)

透過 `text-shadow` 實現滑鼠移動時的文字陰影游移效果

<!--more-->

## 作法

抓取 hero div 和 h1 tag， 由於 hero 設定大小全版面，所以可直接對 hero 做 `mousemove` 監聽。
撰寫陰影移動函式：

```javascript
function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // 物件解構的方式
    const { offsetWidth: width, offsetHeight: height } = hero;
    //cursor position
    let { offsetX: x, offsetY: y } = e;
    console.log();
    // 滑到文字上時，會監聽到 h1的 offset，此時須補上文字相對於hero的偏移量
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    //計算方法 移動基準值* x or y 在螢幕位置的比例扣除一半的移動基準值(讓他最高能偏移一半)
    //越往右下 xy 值越大，反之則越小，讓他在左上區域能夠變成負值
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    //四種方向
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 10px rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 10px rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 10px rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 10px rgba(0,0,255,0.7)`;
}
```

## text-shadow

語法：

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;
```

可像範例一樣用逗號區隔一次設定好幾個方向的陰影
