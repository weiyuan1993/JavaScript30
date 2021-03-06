# 19 - Webcam Fun

## 筆記

[DEMO](https://weiyuan1993.github.io/JavaScript30/19-Webcam-Fun)
[GitHub](https://github.com/weiyuan1993/JavaScript30/tree/master/19-Webcam-Fun)

用 JS 操作視訊鏡頭輸出成 canvas 添加濾鏡效果

<!--more-->

## 作法

1.  擷取視訊鏡頭：

    先透過 `navigator.mediaDevices.getUserMedia`，回傳一個 promise ，來取用視訊鏡頭的串流，再透過 `HTMLMediaElement` 的 `srcObject` 來指定 video 串流來源 (之前使用 `URL.createObjectURL`, 現在瀏覽器會警告說在 Chrome 69 後會廢除 )。

    ```javascript
    function getVideo() {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then(localMediaStream => {
                console.log(localMediaStream);
                videoStream = localMediaStream;
                video.srcObject = localMediaStream;
                video.play();
                isRun = true;
            })
            .catch(e => console.error("OH! error", e));
    }
    ```

     參考
    [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
    [srcObject](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/srcObject)

2.  繪製 video 至 canvas：

    可以使用 `canplay` 事件來監聽視訊影片是否準備好來觸發繪製，自己練習改為由按鈕控制。canvas 開始畫之前須設定好 canvas 的寬高，將其指定為影片寬高。將影片由 canvas 畫出很簡單，透過 `darwImage` 的方式將影片塞入，並使用 `setInterval` 來控制繪製頻率。

    ```javascript
    function drawVideo() {
        draw = setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 30);
    }
    ```

    [drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)

3.  儲存圖片：
    透過 canvas 的 `toDataURL` 產生 base64 的圖片 ，塞入超連結後即可讀取與下載

    ```javascript
    function takePhoto() {
        // play camera sound
        snap.currentTime = 0;
        snap.play();
        const imageData = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = imageData;
        link.setAttribute("download", "photo");
        link.innerHTML = `<img src="${imageData}" alt="Your great photo!"/>`;
        strip.insertBefore(link, strip.firstChild);
    }
    ```

4.  鏡像鏡頭：
     預設的鏡頭不是鏡像的，若要達成自拍的效果，在視訊影片及 canvas 加入 style `transform:rotateY(180deg)` 即可

5.  濾鏡效果：
    以紅色濾鏡為例：
    透過 `getImageData` 取得 canvas context 的 pixels，輸出 log 可以發現裡面是一個超大型陣列代表著影像的 rgb 像素資訊，以紅 、綠、藍、透明值循環，若要製作紅色濾鏡，將紅色像素都提高，綠藍像素降低即可。
    最後使用 `putImageData` 將修改過的像素放回即可。

    ```javascript
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = redEffect(pixels);
    ctx.putImageData(pixels, 0, 0);
    ```

    紅色濾鏡 

    ```javascript
    function redEffect(pixels) {
        // red ,green, blue, alpha 循環
        for (let i = 0; i <= pixels.data.length; i += 4) {
            pixels.data[i] += 50;
            pixels.data[i + 1] -= 50;
            pixels.data[i + 2] *= 0.5;
        }
        return pixels;
    }
    ```

    [getImageData](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)
    [putImageData](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData)

6.  影片中止：
    ```javascript
    let tracks = videoStream.getVideoTracks();
    tracks[0].stop();
    ```
    canvas 停止繪製使用 `clearInterval` 即可
