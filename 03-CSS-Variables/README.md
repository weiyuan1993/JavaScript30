# 02-CSS-Variables

## 筆記

### querySelectorAll
取到得值非 `array` 而是 `NodeList`，用開發者工具點開來會發現它的 prototype 沒有陣列那麼多可以使用，但是 `forEach` 仍然存在可以使用。

### data attribute
```html
<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
```
可以在 html tag 上使用 `data-` 屬性來儲存一些額外的資訊，範例裡運用此特性儲存對應的 css value 後綴字詞。