import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json" 
import * as result_page from "../locators/result_page.json" 
beforeEach('Начало теста', function () {
  cy.visit('/');
    });
afterEach('Конец теста', function () {
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })
  
  describe('Проверка авторизации', function () {
it('Верный пароль и верный логин', function () {
        cy.get('#mail').type(data.login);
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        }) 
     })

     describe('восстановление пароля', function () {
     it('Верный пароль и верный логин', function () {
          cy.get('#forgotEmailButton').click();
          cy.get('#mailForgot').type('Anton-Samara.777@yandex.ru');
          cy.get('#restoreEmailButton').click();
          cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
          cy.get('#messageHeader').should('be.visible');
          }) 
       })

        describe('негативный кейс', function () {
        it('Верный логин и неверный пароль', function () {
            cy.get('#mail').type(data.login);
            cy.get('#pass').type('iLoveqastudio5');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            }) 
         })

        describe('негативный кейс', function () {
        it('ввести неверный логин и верный пароль', function () {
              cy.get('#mail').type('Anton@Ivanov.ru');
              cy.get('#pass').type(data.password);
              cy.get('#loginButton').click();
              cy.get('#messageHeader').contains('Такого логина или пароля нет');
              cy.get('#messageHeader').should('be.visible');
              }) 
           })

           describe('негативный кейс валидации', function () {
           it('Ввести логин без @', function () {
                cy.get('#mail').type('germandolnikov.ru');
                cy.get('#pass').type(data.password );
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                cy.get('#messageHeader').should('be.visible');
                }) 
             })

            describe('проверка на приведение к строчным буквам в логине', function () {
            it('GerMan@Dolnikov.ru', function () {
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                  cy.get('#pass').type(data.password);
                  cy.get('#loginButton').click();
                  cy.get('#messageHeader').contains('Такого логина или пароля нет');
                  cy.get('#messageHeader').should('be.visible');
                   }) 
               })

               

                 
        




     
