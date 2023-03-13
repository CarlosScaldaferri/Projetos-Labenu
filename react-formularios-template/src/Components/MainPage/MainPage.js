import React from "react";
import { MainContainer, Form, Input } from "./styles";
import { useForm } from "../../hoocks/useForm";

function MainPage() {
  const { form, onChangeForm } = useForm({ nome: "", idade: "", email: "" });

  const handleClick = (event) => {
    event.preventDefault();

    console.log(
      `nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email} `
    );
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          id="nome"
          name={"nome"}
          value={form.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          id="idade"
          name={"idade"}
          value={form.idade}
          onChange={onChangeForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          id="email"
          name={"email"}
          value={form.email}
          onChange={onChangeForm}
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
