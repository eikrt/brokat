let canvas = document.getElementById("main_canvas");
let ctx = canvas.getContext("2d");
const TILES_W = 8;
const TILES_H = 16;
loop = () => {

 //   tiles = new Array(TILES_W).fill(new Array(TILES_H));

    let tiles = [...Array(TILES_W)].map(e => Array(TILES_H).fill({x:0,y:0}));
    for (let i = 0; i < TILES_W; i++) {
       for (let j = 0; j < TILES_H; j++) {
	   tiles[i][j] = {x:i*32, y:j*32};
           }
    }
    draw(tiles);
}
draw = (tiles) => {
   
    ctx.fillStyle = "#000000";
    
    for (let i = 0; i < TILES_W; i++) {
	for (let j = 0; j < TILES_H; j++) {
	    ctx.fillRect(tiles[i][j].x, tiles[i][j].y, 32, 32);
        }
    }
}

loop();
