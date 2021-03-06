# 30 Whack A Mole

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/30-Whack-A-Mole)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/30-Whack-A-Mole)

實作一個打地鼠遊戲！
<!--more-->


終於，經過千辛萬苦終於來到第三十個，將近五個月的時間才完成，中間有段時間真的比較沒心做，還好還是完成了，這次是做一個打地鼠遊戲，滿有趣的。

作法：
為了讓地鼠出現時間不規律，所以必須要有一個隨機時間函式，給定一個區間數值，返回其中的任意數。

```javascript
function randomTime(min,max){
return Math.round(Math.random()*(max-min)+min);
}
```
地鼠出現的地洞也必須隨機，透過 `lastHole` 紀錄上一次的地洞，下一個出現若重複，則再遞回產生一個新的地洞，避免重複出現。

```javascript
function randomHole(holes){
const index = Math.floor(Math.random()*holes.length);
const hole = holes[index];
if(hole === lastHole){
    return randomHole(holes);
}
lastHole = hole;
return hole;
}
```

開始執行遊戲！產生一個隨機時間與隨機地洞，透過為地洞增加 `up` class 來讓對應的地鼠產生動畫，隨機時間來移除 `up` class，隨機時間值越小難度越高。`timeUp`變數來做遊戲停止與否的開關，遊戲停止前就繼續遞回函式讓地鼠不斷出現。

```css
.hole.up .mole {
  top:0;
}

```
```javascript
function peep(){
    const time = randomTime(200,1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp){
        peep();
        }
    },time)
}
function startGame(){
    score = 0;
    timeUp = false;
    scoreBoard.textContent = '0';
    peep();
    setTimeout(() => {
        timeUp = true;
        alert("Time's up!");
    }, 10000)
}
```

打地鼠！可以透過點擊事件的 `isTrusted` 屬性來判斷此點擊是否為人為，藉此做一個初步防作弊的機制。

```javascript
function bonk(e){
    if(!e.isTrusted) return; // 非人為點擊無效
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}
moles.forEach(mole=>mole.addEventListener('click',bonk));
```



