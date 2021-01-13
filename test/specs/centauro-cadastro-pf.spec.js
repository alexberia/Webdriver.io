
import HomePage from '../pageobjects/centauro-home.page';
import LoginPage from '../pageobjects/centauro-login.page';
import Registro from '../pageobjects/centauro-registro.page';
import CPF from 'gerador-validador-cpf';
import assert from 'assert';
import utl from '../../utilities/common-utilities';

let cpf = CPF.generate('1234567890')
let cep = '03063-222';

describe('Realizar o cadastro de uma pessoa fisica', () => {
    it('Informar CPF e CEP', () => {
            LoginPage.open();
            LoginPage.novo(cpf, cep);
    });

    it('Preencher todos os dados do formulario para pessoa fisíca', () => {
        Registro.preencherPf(
            'Alexandre',
            'Frans',
            '19/04/1990',
            'Masculino',
            '11',
            '2213-4551',
            '11',
            '98298-8902',
            'etestauto'+ Math.floor((Math.random() * 1000000) + 1) +'@autoemail.com.br',
            'n@1sgad81@',
            'n@1sgad81@',
            cep,
            '4123',
            'Depois da padaria'
            );
        
        Registro.clickCadastrar();
    });
});
