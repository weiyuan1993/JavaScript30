# 03 - CSS Variables

## 筆記

### css variable
方便管理及定義一些常用的 style，日後要更動只要改變數得值就好。

```html
    <style>
        /* 設定 global 的 css variable */
        :root{
            --base-color:#ffc600;
        }
        /* 使用 global css variable */
        .demo{
            color:var(--base-color);
        }

        /* 區域 css variable */
        .main{
            --main-bg-color:#ffb544;
        }
        /* 使用區域 css variable */
        .main{
            background-color:var(--main-bg-color);
        }
    </style>
```

### querySelectorAll
取到得值非 `array` 而是 `NodeList`，用開發者工具點開來會發現它的 prototype 沒有陣列那麼多可以使用，但是 `forEach` 仍然存在可以使用。

### data attribute
```html
<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
```
可以在 html tag 上使用 `data-` 屬性來儲存一些額外的資訊，範例裡運用此特性儲存對應的 css value 後綴字詞。

使用 `element.dataset.sizing` 可取得 `data-` 得值
