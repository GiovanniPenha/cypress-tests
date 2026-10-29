describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
});

  it('Deve preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
    cy.cadastrar('Ana Paquin', 'ana.paquin@email.com', 'Senha123');
    
  });
});