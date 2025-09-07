import type { ReactElement } from "react";

interface ButtonProps{
    text: string,
    startIcon?: ReactElement,
    style: string,
    onClick?: () => void
}

export default function ButtonComponent(props: ButtonProps){
    return <div>
        <button 
            className={`rounded-md flex gap-1 justify-center items-center ${props.style}`}
            onClick={props.onClick}
        >
            <div>{props.startIcon}</div>
            <div>{props.text}</div>
        </button>
    </div>
}