import { useState } from 'react'
import Client from '../core/Client'
import Button from './Button'
import Input from './Input'

interface FormProps {
    client?: Client,
    changeLayout?: () => void,
    clientChanged?: (client: Client) => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    
    return (
        <div className="h-full">
            {id ? (
                <Input
                    labelText="Id"
                    inputType="text"
                    inputValue={id}
                    readOnly />
            ) : false}
            <Input
                labelText="Nome"
                inputType="text"
                inputValue={name}
                onChange={setName} />
            
            <Input
                labelText="Idade"
                inputType="number"
                inputValue={age}
                onChange={setAge} />

            <div className="
                flex gap-2 items-center mt-4">
                <Button onClick={() => props.clientChanged?.(new Client(id, name, age))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>    
                <Button onClick={props.changeLayout}>
                    Cancelar
                </Button>    
            </div>    
        </div>
    )
}
