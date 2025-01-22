import '../Cell/Cell'
import Cell from '../Cell/Cell'
import './Chessboard.css'   

const verticalAxis = ['1','2','3','4','5','6','7','8']
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"] 

interface Piece {
    image:string
    x:number
    y:number
}

const pieces: Piece[] = []

function addingPieces(imgPath ='path' ,x = 0  ,y =0){
    pieces.push({image:imgPath , x:x ,y:y} )
}


for(let i = 0; i <8;i++){
    addingPieces('src/assets/images/Chess_pdt60.png',i,6)
}
for(let i = 0; i <8;i++){
    addingPieces('src/assets/images/Chess_plt60.png',i,1)
}
for(let i = 0 ; i <2;i++){
    let color = i === 0? 'd':'l'
    let y = i === 0? 7:0
    addingPieces(`src/assets/images/Chess_r${color}t60.png`,0,y)
    addingPieces(`src/assets/images/Chess_r${color}t60.png`,7,y)
    addingPieces(`src/assets/images/Chess_n${color}t60.png`,1,y)
    addingPieces(`src/assets/images/Chess_n${color}t60.png`,6,y)
    addingPieces(`src/assets/images/Chess_b${color}t60.png`,2,y)
    addingPieces(`src/assets/images/Chess_b${color}t60.png`,5,y)
    addingPieces(`src/assets/images/Chess_q${color}t60.png`,3,y)
    addingPieces(`src/assets/images/Chess_k${color}t60.png`,4,y)
}

function grabingPiece(e: React.MouseEvent<HTMLDivElement,MouseEvent>){
    const element = e.target as HTMLElement
    if(element.classList.contains('chess-piece') ){
        console.log(e);

        const x = e.clientX-50
        const y = e.clientY-50
        element.style.position = 'absolute'
        element.style.left = `${x}px`
        element.style.top = `${y}px`
    }
}

export default function Chessboard(){
    let board = []
    for(let j = verticalAxis.length -1; j >= 0; j--){
        for(let i =0; i < horizontalAxis.length; i++){
            let number = i + j +2 
            let image = undefined
            pieces.forEach(p=>{
                if(p.x === i && p.y ===j ){
                    image = p.image
                }
            })
            
            
            board.push(<Cell key={`${j},${i}`} image={image} number={number}/>) 
        }
    }

    return <div onMouseDown={e=>grabingPiece(e)} id="chessboard">{board}</div>
}