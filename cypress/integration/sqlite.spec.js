describe('Teste Banco de Dados SQLite', function(){
    it('Acessar o banco de dados', function(){
        cy.task(
            "queryDb",
            `SELECT *
            FROM Employee
            WHERE BirthDate > '1970-01-01'`
        )
    })
})