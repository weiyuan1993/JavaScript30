# 05 - Flex Panel Gallery

## 筆記

### box-sizing
box-sizing 屬性用於更改預設 CSS 盒子模型中所計算的寬度和高度。可以使用此屬性來模擬不正確支持CSS盒子模型規範的瀏覽器的行為。

沒有設定的話，預設值是 `content-box`，在設定元素的 `width`, `height`時是不包括 `padding`, `border`, `margin`的。

如果設定成 `box-sizing: border-box`，代表這個元素的`width`, `height`包括 `padding`與`border`(即不必考慮這兩個屬性了，寬高都是基於元素本身), 但不包括`margin`，比較好掌控元素的大小，但是自己已經習慣 `content-box` 的模式，非必要應該不會特別設定此屬性。


### CSS 偽元素 ::before, ::after
根據 MDN 說明範例中僅使用一個冒號是 CSS2 的寫法，CSS3 為了跟 偽class `(如：div:hover)`區別所以使用雙冒號。
偽元素通常會搭配 `content`，來讓此 class 的前(`::before`)或後(`::after`)新增內容。
ex: 在每個連結前加上一個愛心
```css
a::before{
    content: "♥";
}
```
### flex
在第一天練習已經有使用到 flex ，這篇則是更深入練習。
要使用 flex 特性，元素必須設定 `display:flex 或 display:inline-flex`。
`flex:1` 是一個簡寫，完整寫法是分為三個屬性：

- flex-grow: 決定元素在 flex 容器內的佔比
![Imgur](https://i.imgur.com/B0Kn0rQ.png)
- flex-shrink: 收縮規則，在元素寬度會超過 flex 容器時才會收縮
![Imgur](https://i.imgur.com/RZvz1iB.png)
- flex-basis: 決定元素初始大小，初始值為 auto

以上三個屬性可以用單一 flex 簡寫：
```css
/* 單一值無單位數字等同於 flex-grow */
flex:1;

/* 單一值有單位等同於 flex-basis */
flex:10px;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

```

flex-direction: 決定元素在 flex 容器內是如何排列的

橫向排列
- row
- row-reverse

垂直排列
- column
- column-reverse

[MDN說明](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

### CSS 選擇器
.panel p:nth-child(2): 選擇 panel class 底下所有的 p 中的第二個
.panel>*:nth-child(1): 選擇 panel class 直屬 child 的所有元素中的第一個
.panel>*:first-child: 同上的簡寫

#### div p 與 div>p 用法比較

```html
<div><table><tr><td><p></p></td></tr></table></div>
```

`div p ` 會選擇到 div 的所有後代 p：

可選擇得到 p


`div<p` 只能選擇到 child 的 p ，即第一層的元素 p


選擇不到 p
