describe('TodoMVC UI Tests', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/javascript-es6/dist/')
  })


  //I am adding this to stop the test runner in a case where the first test case does not pass
  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  });
  
  // Successful page load
  it('should load the page successfully', () => {
    cy.title().should('contain', 'TodoMVC');
    
  }) 

// Todo Creation
it('should add a new todo', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.todo-list li').should('have.length', 1).and('contain', 'Buy groceries');
});

// Todo Editing
it('should edit an existing todo', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.todo-list li').dblclick();
    cy.get('.edit').clear().type('Buy fruits{enter}');
    cy.get('.todo-list li').should('contain', 'Buy fruits');
});

// Todo Completion
it('should mark a todo as completed', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.toggle').click();
    cy.get('.todo-list li').should('have.class', 'completed');
    cy.get('.todo-count').should('contain', '0 items left');
});

// Todo Deletion
it('should delete a todo', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.destroy').click({ force: true });
    cy.get('.todo-list li').should('not.exist');
});

// Clear Completed Todos
it('should clear completed todos', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.toggle').click();
    cy.get('.clear-completed').click();
    cy.get('.todo-list li').should('not.exist');
});

// Filter Todos
it('should filter to show all todos', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.new-todo').type('Buy fruits{enter}');
    cy.get('.todo-list li').first().find('.toggle').click();
    cy.contains('All').click();
    cy.get('.todo-list li').should('have.length', 2);
});

it('should filter to show active todos', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.new-todo').type('Buy fruits{enter}');
    cy.get('.todo-list li').first().find('.toggle').click();
    cy.contains('Active').click();
    cy.get('.todo-list li').should('have.length', 1).and('not.have.class', 'completed');
});

it('should filter to show completed todos', () => {
    cy.get('.new-todo').type('Buy groceries{enter}');
    cy.get('.new-todo').type('Buy fruits{enter}');
    cy.get('.todo-list li').first().find('.toggle').click();
    cy.contains('Completed').click();
    cy.get('.todo-list li').should('have.length', 1).and('have.class', 'completed');
});

  // Error Handling
it('should not add an empty todo', () => {
    cy.get('.new-todo').type('{enter}');
    cy.get('.todo-list li').should('not.exist');
});

 // Visual Consistency
it('should display the header correctly', () => {
    cy.get('header h1').should('be.visible').and('contain', 'todos');
});

 // Empty State
it('should display the placeholder when there are no todos', () => {
    cy.get('.new-todo').should('have.attr', 'placeholder', 'What needs to be done?');
    cy.get('.main').should('not.be.visible');
    cy.get('.footer').should('not.be.visible');
});

// Character Limits
it('should handle long todo items', () => {
    const longTodo = 'A'.repeat(300);
    cy.get('.new-todo').type(`${longTodo}{enter}`);
    cy.get('.todo-list li').should('have.length', 1).and('contain', longTodo);
});


  // Page Refresh
it('should remove all todos after a page refresh', () => {
  cy.get('.new-todo').type('Buy groceries{enter}');
  cy.reload();
  cy.get('.todo-list li').should('not.exist');
});

it('should correctly update the footer item count', () => {
  cy.get('.new-todo').type('Buy groceries{enter}');
  cy.get('.new-todo').type('Buy fruits{enter}');
  
  // Verify initial count
  cy.get('.todo-count').should('contain', '2 items left');
  
  // Complete one todo
  cy.get('.todo-list li').first().find('.toggle').click();
  cy.get('.todo-count').should('contain', '1 item left');

  // Clear completed todos
  cy.get('.clear-completed').click();
  cy.get('.todo-count').should('contain', '1 item left');
});

it('should not allow empty todos', () => {
  cy.get('.new-todo').type('{enter}');
  cy.get('.todo-list li').should('not.exist');
});

it('should handle special characters in todos', () => {
  cy.get('.new-todo').type('<script>alert("test")</script>{enter}');
  cy.get('.todo-list li').should('have.length', 1).and('contain', '<script>alert("test")</script>');
});

})
