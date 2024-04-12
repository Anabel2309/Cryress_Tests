describe('Pruebas todos', () => {
    it('Create task', () => {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
      cy.get('[data-testid="text-input"]').type("Hacer la compra{enter}")
      cy.get('[data-testid="todo-item-label"]').should("exist")
    })

    it('Complete task', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Ir a trabajar{enter}")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('.todo-count').contains("0 items left!")
    })

      it('Uncheck task', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Llevar al gato al veterinario{enter}")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('.todo-count').contains("1 item left!")  
    })   
    it('Edit task', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Enviar paquete en correos{enter}")
        cy.get('label[data-testid="todo-item-label"]').dblclick();
        cy.get('.view > .input-container > [data-testid="text-input"]').clear();
        cy.get('.view > .input-container > [data-testid="text-input"]').type("Tarea modificada{enter}")
        cy.get('[data-testid="todo-item-label"]').contains("Tarea modificada")
    })    
    it('Clean task', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Comprar en Zara{enter}")
        cy.get('.destroy').click({ force: true })
        cy.get('[data-testid="todo-item-label"]').should('not.exist')  
    }) 
    it('Filter task', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Ver la TV{enter}")
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="text-input"]').type("Leer un libro{enter}")
        cy.get('[data-testid="text-input"]').type("Ir al gym{enter}")
        cy.get('#root > footer > ul > li:nth-child(3) > a').click()
        cy.get('.completed > .view > [data-testid="todo-item-toggle"]').check()
        cy.get(':nth-child(2) > a').click()
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').uncheck()
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').uncheck()
        cy.get(':nth-child(1) > a').click()    
    }) 
    
    })




