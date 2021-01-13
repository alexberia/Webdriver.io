
import LoginPage from '../pageobjects/centauro-login.page';
import HomePage from '../pageobjects/centauro-home.page';
import MeusPedidos from '../pageobjects/centauro-meuspedidos.page';
import assert from 'assert';
import utl from '../../utilities/common-utilities';

/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('Realizar o login na plataforma de eCommerce', function() {
  it('Deve realizar acesso ao sistema', function () {
    LoginPage.open();
    LoginPage.login('oberia010@gmail.com', '44609a1a');
  });

  it('Deve acessar a página de meus pedidos', function () {
    HomePage.clickMeusPedidos();
    expect(MeusPedidos.assertMeusPedidos()).toBe(true);  
  });
});
