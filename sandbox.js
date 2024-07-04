/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const selectionBox = "<"
const selectionBox2 = ">"
const black = "B"
const gray = "y"
const lightGray = "Y"
const white = "w"
const red = "r"
const brown = "b"
const lightBlue = "L"
const blue = "l"
const yellow = "y"
const olive = "o"
const lime = "m"
const green = "g"
const pink = "p"
const purple = "u"
const orange = "n"

let selectionBoxPosition = {x: 80, y: 64}
let brushSize = 1
let selectedCellType = "sand"

setLegend(
  [selectionBox, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [selectionBox2, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [black, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [gray, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [lightGray, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
  [white, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [red, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [brown, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [lightBlue, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [blue, bitmap`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555`],
  [yellow, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
  [olive, bitmap`
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
  [lime, bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`],
  [green, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`],
  [pink, bitmap`
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888`],
  [purple, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`],
  [orange, bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999`]
)

setSolids([])

const emptyMap = map`
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................
................................................................................................................................................................`
setMap(emptyMap)

const selectionSpeed = 2

onInput("w", () => {
  selectionBoxPosition.y -= selectionSpeed
  redrawSelectionBox()
})
onInput("a", () => {
  selectionBoxPosition.x -= selectionSpeed
  redrawSelectionBox()
})
onInput("s", () => {
  selectionBoxPosition.y += selectionSpeed
  redrawSelectionBox()
})
onInput("d", () => {
  selectionBoxPosition.x += selectionSpeed
  redrawSelectionBox()
})


onInput("j", ()=> {
  let brushSizes = [1, 2, 3, 5, 10]
  brushSize = brushSizes[(brushSizes.indexOf(brushSize)+1)%(brushSizes.length)]
  redrawUI()
  redrawSelectionBox()
})

function redrawSelectionBox() {
  selectionBoxPosition.x = Math.min(Math.max(selectionBoxPosition.x, 0), width()-brushSize-2)
  selectionBoxPosition.y = Math.min(Math.max(selectionBoxPosition.y, 7), height()-brushSize-2)
  
  getAll(selectionBox).forEach((sprite)=>{sprite.remove()})
  getAll(selectionBox2).forEach((sprite)=>{sprite.remove()})
  for (let i = 0; i <= brushSize+1; i++) {
    for (let j = 0; j <= brushSize+1; j++) {
      if(i==brushSize+1||i==0 || j==brushSize+1||j==0){
        addSprite(selectionBoxPosition.x + i, selectionBoxPosition.y + j, selectionBox);
      }
    }
  }
}

function redrawUI() {
  clearText()
  addText("Brush:"+brushSize, { x: 14-String(brushSize).length, y: 0, color: color`9` })
  drawRect(0, 0, 7, 7, yellow, 1, black)
  addText(selectedCellType, { x: 1, y:0, color: color`9`})
}

function drawRect(x, y, sizeX, sizeY, fillType, borderWidth, borderType) {
 for (let i = 0; i <= sizeX-1; i++) {
    for (let j = 0; j <= sizeY-1; j++) {
      if(i < borderWidth || i >= sizeX-borderWidth || j < borderWidth || j >= sizeY-borderWidth) {
        addSprite(x + i, y + j, borderType);
      }else {
        addSprite(x + i, y + j, fillType);
      }
    }
  } 
}
  
setInterval(()=>{
  let type1 = getAll(selectionBox)
  let type2 = getAll(selectionBox2)
  type1.forEach((sprite)=>{sprite.type = selectionBox2})
  type2.forEach((sprite)=>{sprite.type = selectionBox})
}, 500)

setInterval(()=>{

}, 0)

redrawUI()
redrawSelectionBox()
