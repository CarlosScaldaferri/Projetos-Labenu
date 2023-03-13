import { useState } from 'react';
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ( { urlFoto, setUrlFoto, descricao, setDescricao } ) => {


  const handleImput = (e) => {
    setFoto(e.target.value)
  }
  
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={urlFoto} onChange={handleImput}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}>
          Descrição:
          <Input id="descricao" />
        </StyledLabel>

      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro