import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const NovoNome = (event) => {
    setNome(event.target.value)
  }
  
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={NovoNome}/>
        </label>
        <label>
          Idade:
        </label>
          <Input value={idade}/>
      <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
