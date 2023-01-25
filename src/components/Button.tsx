interface ButtonProps {
    className?: string,
    children?: any,
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button 
            onClick={props.onClick}
            className={`
              bg-slate-700/50 p-2
              text-slate-300 font-semibold
                border-2 border-slate-700/0
                rounded-md
                focus:outline-none
                hover:bg-slate-700
                focus:bg-slate-700
                focus:border-slate-100/30
            `}>
            {props.children}
        </button>
    )
}