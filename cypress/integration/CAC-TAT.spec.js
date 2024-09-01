/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("../../src/index.html");
  });

  it("Verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Preenche os campos obrigatórios e envia o formulário", function () {
    //Digita no campo "Nome"
    cy.get('[name="firstName"]').should("be.visible").type("Ryan");
    //Digita no campo "Sobrenome"
    cy.get('[name="lastName"]').should("be.visible").type("Brauna");
    //Digita no campo "E-mail"
    cy.get("#email").should("be.visible").type("ryanbrauna@email.com");
    //Digita no campo "Como podemos ajudar?"
    cy.get('[name="open-text-area"]')
      .should("be.visible")
      .type("Assunto criado para teste automatizado", { delay: 0 });
    //Aciona botao "Enviar"
    cy.get(".button").should("be.visible").and("have.text", "Enviar").click();
  });

  it("Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    //Digita no campo "Nome"
    cy.get('[name="firstName"]').should("be.visible").type("Ryan");
    //Digita no campo "Sobrenome"
    cy.get('[name="lastName"]').should("be.visible").type("Brauna");
    //Digita informação inválida no campo "E-mail"
    cy.get("#email").should("be.visible").type("ryanbraunaemailcom");
    //Digita no campo "Como podemos ajudar?"
    cy.get('[name="open-text-area"]')
      .should("be.visible")
      .type("Assunto criado para teste automatizado", { delay: 0 });
    //Aciona botao "Enviar"
    cy.get(".button").should("be.visible").and("have.text", "Enviar").click();
    //Valida mensagem de erro apresentada
    cy.get(".error").should("be.visible");
  });

  it("Campo telefone continua vazio quando preenchido com valor não-numérico", function () {
    cy.get("#phone").type("Teste").should("have.value", "");
  });
  it("Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    //Digita no campo "Nome"
    cy.get('[name="firstName"]').should("be.visible").type("Ryan");
    //Digita no campo "Sobrenome"
    cy.get('[name="lastName"]').should("be.visible").type("Brauna");
    //Digita no campo "E-mail"
    cy.get("#email").should("be.visible").type("ryanbrauna@email.com");
    //Seleciona checkbox de "Telefone"
    cy.get("#phone-checkbox").click();
    //Digita no campo "Como podemos ajudar?"
    cy.get('[name="open-text-area"]')
      .should("be.visible")
      .type("Assunto criado para teste automatizado", { delay: 0 });
    //Aciona botao "Enviar"
    cy.get(".button").should("be.visible").and("have.text", "Enviar").click();
    //Valida mensagem de erro apresentada
    cy.get(".error").should("be.visible");
  });



});
