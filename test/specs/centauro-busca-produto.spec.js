
import HomePage from '../pageobjects/centauro-home.page';
import BuscaProduto from '../pageobjects/centauro-vitrine-busca.page'

import assert from 'assert';
import utl from '../../utilities/common-utilities';

/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('Buscar um produto pelo nome', () => {
  it('Consultar pelo nome do produto', () => {
    HomePage.open();
    HomePage.consultarProduto('Tênis');
    expect(BuscaProduto.validarPagina()).toBe(true) 
  });

  // it('', () => {
  // });
});
