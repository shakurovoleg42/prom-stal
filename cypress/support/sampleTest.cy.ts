describe('Пример E2E теста', () => {
    it('Проверка главной страницы', () => {
      cy.visit('/');
    

      cy.contains('Организуем доставку металла в кратчайшие сроки в любую точку').should('be.visible');
    });
  
    it('Проверка кликабельности кнопки', () => {
        cy.wait(1000);
        cy.visit('/catalog');
        
        cy.contains('Каталог металлопроката').should('be.visible');
        
        cy.get('button').contains('Каталог').should('be.visible').click();
        
        cy.contains('О компании').should('be.visible');
        cy.wait(1000);
        
        cy.get('a').contains('О компании').should('be.visible').click();
      
        cy.url().should('include', '/about');
      });
      
  });