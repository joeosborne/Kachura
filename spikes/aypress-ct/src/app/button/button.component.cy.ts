import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import {createOutputSpy} from "cypress/angular";

describe('ButtonComponent', () => {
  // beforeEach(async () => {
  // });

  it('can mount', () => {
    cy.mount(ButtonComponent);
  });

  it('can display label in button', () => {
    cy.mount(ButtonComponent,
        {
          componentProperties:{
            label: 'yada angular'
          },
          imports:[],
          declarations:[],
          providers:[],
        }

    );
  });


  // NOTE: 4 alt ways to do the same thing...

    // 1
    it('1 emits a value when the button is clicked', () => {
        cy.mount(ButtonComponent,
            {
                componentProperties:{
                   click: {
                       emit: cy.spy().as('onClickSpy')} as any
                },
                imports:[],
                declarations:[],
                providers:[],
            }

        );
        cy.get('button').click()
        cy.get('@onClickSpy').should('have.been.called')
    });

    // 2 - promise api
    it('2 emits a value when the button is clicked', () => {
        cy.mount(ButtonComponent).then(response => {
            cy.spy(response.component.click, 'emit').as('onClickSpy')
        })
        cy.get('button').click()
        cy.get('@onClickSpy').should('have.been.called')
    });

    // 3 - createOutputSpy
    it('3 emits a value when the button is clicked', () => {
        cy.mount(ButtonComponent,
            {
                componentProperties:{
                    click: createOutputSpy('onClickSpy')
                },
            }

        );
        cy.get('button').click()
        cy.get('@onClickSpy').should('have.been.called')
    });


    // 4 - autoSpyOutputs
    it('4 emits a value when the button is clicked', () => {
        cy.mount(ButtonComponent,{
            autoSpyOutputs:true
        })

        cy.get('button').click()
        cy.get('@clickSpy').should('have.been.called')
    });
});
