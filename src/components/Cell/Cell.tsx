import './Cell.css'

interface Props{
    image?:string;
    number:number;
}

export default function Cell({number, image}: Props){
    if (number % 2 ===0) {
        return <span className="cell black-cell">{image &&<div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}</span>
    }else{
        return <span className="cell white-cell">{image &&<div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}</span>
    }
    
}