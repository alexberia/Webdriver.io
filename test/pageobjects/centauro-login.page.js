import Page from './page';
import utl   from '../../utilities/common-utilities';
import CPF from 'gerador-validador-cpf';

class LoginPage extends Page {

    get cadastrarButton() {return $('//*[@id="btn_cadastrar"]');}
    get cepInput() {return $('//*[@name="Cep"]');}
    get usernameInput()   { return $('//*[@id="input-type-1"]'); }
    get simJaTenhoCadastroRadio() {return $('//*[@id="optYesclient"]');}
    get naoSouNovoClienteRadio() {return $('//*[@id="optNoclient"]');} 
    get passwordInput()   { return $('//*[@id="input-type-4"]'); }
    get loginButton()     { return $('//*[@id="btn_Entrar"]'); }
    get usuarioOuSenhaInvalidoLabel() {return $(' //label[@class="error" and text() = "Usuário ou Senha inválido!"]');}
    
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('slogin')        
    }
    /**
     * your page specific methods
     */

    login (username, password) {      
      browser.waitToSetValue(this.usernameInput, username)    
      browser.waitToClick(this.simJaTenhoCadastroRadio);      
      browser.waitToSetValue(this.passwordInput, password);
      browser.waitToClick(this.loginButton);
    }

    novo(cpf, cep){
      let format = cpf.replace(".", "").replace("-", "").replace(".", "");
      browser.waitToSetValue(this.usernameInput, format);
      browser.waitToClick(this.naoSouNovoClienteRadio);
      browser.waitToSetValue(this.cepInput, cep);
      browser.waitToClick(this.cadastrarButton);
    }
}

export default new LoginPage()
