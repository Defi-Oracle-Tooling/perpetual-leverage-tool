describe('Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should perform basic arithmetic operations', () => {
    // Test addition
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="display"]').should('have.text', '4');

    // Test multiplication
    cy.get('button').contains('3').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="display"]').should('have.text', '9');
  });

  it('should handle decimal numbers', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="display"]').should('have.text', '4');
  });

  it('should handle invalid operations', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="error"]').should('be.visible');
  });

  it('should update history after calculations', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="history-panel"]').should('contain', '2 + 2 = 4');
  });
}); 