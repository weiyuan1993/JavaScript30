# 10 - Hold Shift and Check Checkboxes

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/10-Hold-Shift-and-Check-Checkboxes)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/10-Hold-Shift-and-Check-Checkboxes)

寫一個可以實現 `shift` 來多重勾選的 checkbox list

進行這個 JavaScript30 挑戰，默默地也進展到第 10 天了，過程中真的學了不少，js 真的太博大精深，學也學不完，有太多的用法是自己不知道的，希望自己能透過這個挑戰持續增進能力了。

<!--more-->

### 作法

1.  先選取到所有 checkbox
2.  寫一個 handleClick function 來處理點擊
3.  紀錄第一個點擊的 checkbox
4.  透過 `forEach` 處理按住 shift 的點擊
5.  第一個點擊的 checkbox 開始算是在範圍內(isBetween = true)
6.  直到 shift 點擊的 checkbox 才脫離範圍(isBetween = false)
7.  將範圍內的 checkbox 設為 `checked`

### CSS Selector (element `+` element)

```css
input:checked + p {
  background: #f9f9f9;
  text-decoration: line-through;
}
```

運用 `+` 可以選擇緊接在`input:checked`元素之後的所有元素 `<p>`，這時只要一勾選`checkbox`，就可以將 `p` 話刪除線，非常方便。

### MouseEvent.shiftKey

這篇範例透過監聽 click event 實作，有使用到 `event.shiftKey`的方法監測是否這個點擊有按下 `shift`
