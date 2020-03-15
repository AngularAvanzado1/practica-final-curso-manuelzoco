import { getGreeting } from '../support/app.po';

describe('regiones-geograficas', () => {
  beforeEach(() => cy.visit('/'));

  it('Flow 3 pages (English first and then spanish)', () => {
    // Flow in english
    cy.visit('http://localhost:4200');
    getGreeting().contains('Welcome to regiones-geograficas!');

    // Countries
    cy.get('.section-regions .col-12.col-sm-6.col-md-4.col-lg-3:nth-child(1) .region__link').click();
    cy.visit('http://localhost:4200/country/EAS');
    getGreeting().contains('Countries:');

    // Region
    cy.get('.section-region-view .col-12.col-sm-6.col-md-4:nth-child(1) .region-view__link').click();
    cy.visit('http://localhost:4200/region/ASM');
    getGreeting().contains('Country:');

    // Go back countries
    cy.get('.section-region-detail .region-view__link').click();
    cy.visit('http://localhost:4200/country/EAS');

    // Go back home
    cy.get('.go-back').click();
    cy.visit('http://localhost:4200');

    // Flow in spanish
    cy.get('.language .language__item:nth-child(2)').click();
    getGreeting().contains('¡Bienvenido a las regiones geográficas!');

    // Países
    cy.get('.section-regions .col-12.col-sm-6.col-md-4.col-lg-3:nth-child(1) .region__link').click();
    cy.visit('http://localhost:4200/country/EAS');
    cy.get('.language .language__item:nth-child(2)').click();
    getGreeting().contains('Países:');

    // País
    cy.get('.section-region-view .col-12.col-sm-6.col-md-4:nth-child(1) .region-view__link').click();
    cy.visit('http://localhost:4200/region/ASM');
    cy.get('.language .language__item:nth-child(2)').click();
    getGreeting().contains('País:');

    // Volver a países
    cy.get('.section-region-detail .region-view__link').click();
    cy.visit('http://localhost:4200/country/EAS');

    // Volver a la home
    cy.get('.go-back').click();
    cy.visit('http://localhost:4200');
  });
});
