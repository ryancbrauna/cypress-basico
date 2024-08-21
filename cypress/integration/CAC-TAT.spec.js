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
    cy.get('#email').should("be.visible").type("ryanbrauna@email.com");
    //Digita no campo "Como podemos ajudar?"
    cy.get('[name="open-text-area"]').should("be.visible").type("Assunto criado para teste automatizado",  {delay: 0});
    //Aciona botao "Enviar"
    cy.get(".button").should("be.visible").and("have.text", "Enviar").click();
  });

});
