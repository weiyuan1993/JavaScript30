# 27 - Click and Drag

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/27-Click-and-Drag)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/27-Click-and-Drag)

製作可拖拉滑動的區塊
<!--more-->

作法：

1.監聽滑鼠點擊取起始位置
```javascript
slider.addEventListener('mousedown',(e)=>{
isMouseDown = true;
slider.classList.add('active');
startX = e.pageX - slider.offsetLeft;
// 起始滾動到的位置
scrollLeft = slider.scrollLeft;

console.log(startX,scrollLeft)
})
```

2.監聽滑鼠移動

```javascript
slider.addEventListener('mousemove',(e)=>{
if(!isMouseDown){
    return;
}
e.preventDefault();
const moveX = e.pageX - slider.offsetLeft;
const walk = (moveX - startX)*3;
//滾動到對應的位置
slider.scrollLeft = scrollLeft - walk;
})

```
3.監聽滑鼠移開和點擊完成
```javascript
slider.addEventListener('mouseup',()=>{
isMouseDown = false;
slider.classList.remove('active');
})
slider.addEventListener('mouseleave',()=>{
isMouseDown = false;
slider.classList.remove('active');
})
```