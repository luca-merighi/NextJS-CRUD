interface InputProps {
    labelText: string,
    inputType: 'text' | 'number',
    inputValue: any,
    readOnly?: boolean,
    onChange?: (value: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className="
            flex flex-col gap-2 py-4">
            <label className="
                text-slate-300 font-semibold">
                {props.labelText}
            </label>
            <input 
                type={props.inputType}
                value={props.inputValue}
                readOnly={props.readOnly}
                className="
                    bg-slate-700/50 p-2
                    text-slate-300
                    border-2 border-slate-300/25
                    rounded-md
                    outline-none
                    focus:bg-slate-700
                    focus:border-slate-100/30"
                    onChange={e => props.onChange?.(e.target.value)} />
        </div>
    )
}