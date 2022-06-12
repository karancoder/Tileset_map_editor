function copyImageToCanvas() {
    var image = document.querySelector("img");
    var canvas = document.querySelector("canvas");

    var ctx = canvas.getContext("2d");

    let tileSize = 32;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.drawImage(
                image,
                tileSize * i,
                tileSize * j, //Where to start the grab (x,y of source image)
                tileSize,
                tileSize, //How much to grab (width, height)
                100 * i,
                100 * j, //Where to plop the grab on the canvas (x,y of canvas)
                100,
                100 //How large to plop the grab (width, height of incoming stamp)
            );
        }
    }
}

//
setTimeout(() => {
    copyImageToCanvas();
}, 300);
