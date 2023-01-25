import { useEffect, useState } from 'react'
import Client from '../core/Client'
import ClientRepository from '../core/ClientRepository'
import ClientsCollection from '../firebase/database/ClientsCollection'

export default function useClients() {
  const [visible, setVisible] = useState<'table' | 'form'>('table') 
  const [client, setClient] = useState<Client>(Client.emptyClient)
  const [clients, setClients] = useState<Client[]>([])

  const repo: ClientRepository = new ClientsCollection()
  
  useEffect(getAll, [])


  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function newClient() {
    setClient(Client.emptyClient())
    setVisible('form')
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function changeLayout() {
    visible == 'table' ? setVisible('form') : setVisible('table')
  }

  return {
    client,
    clients,
    visible,
    selectedClient,
    newClient,
    saveClient,
    deletedClient,
    changeLayout
  }
}