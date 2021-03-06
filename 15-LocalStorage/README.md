# 15 - LocalStorage

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/15-LocalStorage)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/15-LocalStorage)

實作一個基於 localStorage 儲存的點菜單。

<!--more-->

## 作法

`html`

```html
  <div class="wrapper">
    <h2>Food List</h2>
    <p></p>
    <ul class="plates">
      <li>Loading Tapas...</li>
    </ul>
    <form class="add-items">
      <input type="text" name="item" placeholder="Item Name" required>
      <input type="submit" value="+ Add Item" id="add">
    </form>
  </div>
```

透過一個 `ul` 將 `li` 項目包起來，一個 `form` 來處理表單，使用 `required` 屬性來限制使用者一定要輸入內容才能提交。

`javascript`

**初始設定，取 DOM，設定餐點清單陣列**

```javascript
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
//用來儲存已新增的餐點
const items = JSON.parse(localStorage.getItem("items")) || [];
```

這邊 `items` 為所新增的菜，初始為空陣列，待會會用 `localStorage` 儲存，由於 `localStorage` 僅能儲存字串，所以這裡必須將 `JSON.stringify` 過的資料解析回來。

**新增餐點與儲存**

```javascript
function saveItemsToLocalStorage(toSave) {
    localStorage.setItem(toSave, JSON.stringify(items));
}
function addItem(e) {
    //取消預設的submit效果
    e.preventDefault();
    const text = document.querySelector("input[type=text]").value;
    const item = {
        // ES6 若key value 同名可省略value
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    saveItemsToLocalStorage("items");
    //submit 事件的方法
    this.reset();
}

// 監聽 submit 事件來新增餐點
addItems.addEventListener("submit", addItem);
```

`submit` 發生時，將 input 輸入框的值包成一個 `item` 物件，裡面用 `done` 的 key 值表示此項目完成與否，之後這個 `item` 物件就可 push 進一開始定義的  `items` 陣列。
透過 `localstorage.setItem`可以將 `items` 存入，這邊用一個 function 包起來比較方便不用重寫 JSON.stringify。
 最後使用 `submit` 事件的 `reset()` method 來清空 input 框。

**餐點資料輸出呈現**

```javascript
// 將餐點輸出成HTML結構, plates初始為空陣列
// 不直接使用 items 是因為讓這個function 更有彈性，可傳入任何陣列
function populateList(plates = [], platesList) {
    // innerHTML 只吃 string 必須透過 join('') 合併陣列
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
    <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
                plate.done ? "checked" : ""
            } />
        <label for="item${i}">${plate.text}</label>
        <button class="delete" id="delete${i}">Delete</button>
    </li>
    `;
        })
        .join("");
}
```

`populateList` 傳入餐點陣列與需要渲染的 `element`，透過 `map()`來迭代操作  `items`，而`map`的回調函式第二個帶入的參數為迴圈的 `index`，剛好可以用來為每個 element 綁定個別的 `id`，之後比較好抓取操作。

這邊因為使用 template string，可以很方便使用三元判斷式來做是否綁定 `checked` 屬性。

**完成餐點與取消完成**

```javascript
function toggleDone(e) {
    //因為是監聽 ul ，所以同時會 trigger 到 input 和 label，這邊只需要 input

    if (e.target.matches("label")) return;

    const element = e.target;
    const index = element.dataset.index;
    if (element.matches("input") || element.matches("label")) {
        items[index].done = !items[index].done;
    }
    if (element.matches("button")) {
        items.splice(index, 1);
    }
    saveItemsToLocalStorage("items");
    populateList(items, itemsList);
}
//監聽整個 ul 就能監聽全部 li
itemsList.addEventListener("click", toggleDone);
```

如果使用迴圈個別監聽每個 `li`，會造成後來新增的餐點監聽不到，這邊監聽整個 `ul` 就可以監聽所有底下的元素。
透過 event.target 來區別監聽到的元素，如果點擊到 input checkbox，利用  渲染時綁定的  `data-index` 選取 `items` 陣列對應的資料， 將 `done` 反值。
監聽到刪除按鈕就透過 `splice()` 刪除對應的資料，最後再存一次檔，並重新渲染餐點列表一次。


