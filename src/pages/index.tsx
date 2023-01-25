import React from 'react'
import Head from 'next/head'
 
import Header from '../components/Header'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Form from '../components/Form'
import useClients from '../hooks/useClients'

export default function App() {
  const {
    selectedClient, newClient, saveClient, deletedClient, 
    client, clients, visible, changeLayout} = useClients()

  return (
    <div className="pb-20">
      <Head>
        <title>Next CRUD</title>
      </Head>

      <Header />
      
      <Layout 
        title="Cadastro Next"
        newClient={newClient}>
        {visible == 'table' ? (
          <Table
            clients={clients}
            selectedClient={selectedClient}
            deletedClient={deletedClient} />
        ) : (
          <Form 
            client={client}
            changeLayout={changeLayout} 
            clientChanged={saveClient} />
        )}
      </Layout>
    </div>
  )
}