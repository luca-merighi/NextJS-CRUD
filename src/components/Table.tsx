import Client from '../core/Client'
import { editIcon, trashIcon } from '../images/Icons'

interface TableProps {
    clients: Client[],
    selectedClient?: (client: Client) => void,
    deletedClient?: (client: Client) => void,
}

export default function Table(props: TableProps) {
    const showActions = props.selectedClient || props.deletedClient 

    function renderTHead() {
        return (
            <tr className="
                text-slate-300 h-12">
                <th className="text-left pl-4">Código</th>
                <th className="text-center">Nome</th>
                <th className="text-center">Idade</th>
                {showActions ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }
    
    function renderTableData() {
        return props.clients?.map((client, i) => {
            return (
                <tr className="
                    text-slate-300 h-10 even:bg-slate-700/20"
                    key={client.id}>
                    <td className="text-left pl-4">{client.id}</td>
                    <td className="text-center">{client.name}</td>
                    <td className="text-center">{client.age}</td>
                        {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client) {
        return (
            <td className="flex items-center justify-center">
                {props.selectedClient ? (
                    <button
                    onClick={() => props.selectedClient?.(client)}
                    className="
                        flex items-center justify-center 
                        text-slate-300 p-1 w-8 m-1
                        border-2 border-slate-100/0
                        rounded-md
                        hover:bg-slate-100/10
                        focus:outline-none 
                        focus:bg-slate-100/10 focus:border-slate-100/25">
                        {editIcon}
                    </button>
                ) : false}
                {props.deletedClient ? (
                    <button 
                    onClick={() => props.deletedClient?.(client)}
                    className="
                        flex items-center justify-center 
                        text-slate-300 p-1 w-8 m-1
                        border-2 border-slate-100/0
                        rounded-md
                        hover:bg-slate-100/10
                        focus:outline-none 
                        focus:bg-slate-100/10 focus:border-slate-100/25">
                        {trashIcon}
                    </button>
                ) : false}
            </td>
        )
    }
    
    return (
        <table className="
            my-6 w-full">
            <thead className="
                bg-slate-700/50">
                {renderTHead()}
            </thead>
            <tbody>
                {renderTableData()}
            </tbody>
        </table>
    )
}