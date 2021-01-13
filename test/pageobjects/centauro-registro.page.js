import Page from './page';
import utl   from '../../utilities/common-utilities';

class Registro extends Page {
    //Elements
    get pessoaFisicaTab() {return $('//*[text()="Pessoa Física"]'); }
    get pessoaJuridicaTab() {return $('//*[text()="Pessoa Jurídica"]'); }
    get nomeInput() {return $('//*[@class="tab-nregister-1"]//*[@name="nome"]'); }
    get sobreNomeInput() {return $('//*[@class="tab-nregister-1"]//*[@name="sobrenome"]'); }
    get cpfInput() {return $('//*[@class="tab-nregister-1"]//*[@name="cpf"]'); }
    get dataNascimentoInput() {return $('//*[@class="tab-nregister-1"]//*[@name="datadenascimento"]'); }
    get sexoSelect() {return $('//*[@class="tab-nregister-1"]//*[@name="sexo"]'); }
    get dddTelefoneInput() {return $('//*[@class="tab-nregister-1"]//*[@name="telefonefixo.ddd"]'); }
    get numeroTelefoneInput() {return $('//*[@class="tab-nregister-1"]//*[@name="telefonefixo.numero"]'); }
    get dddCelularInput() {return $('//*[@class="tab-nregister-1"]//*[@name="telefoneadicional.ddd"]'); }
    get numeroCelularInput() {return $('//*[@class="tab-nregister-1"]//*[@name="telefoneadicional.numero"]'); }
    get emailInput() {return $('//*[@class="tab-nregister-1"]//*[@name="email"]'); }
    get senhaInput() {return $('//*[@class="tab-nregister-1"]//*[@name="senha"]'); }
    get senhaConfirmacaoInput() {return $('//*[@class="tab-nregister-1"]//*[@name="confirmacaoSenha"]'); }
    get cepInput() {return $('//*[@id="fisica-endereco"]//*[@name="cep"]'); }
    get logradouroInput() {return $('//*[@id="fisica-endereco"]//*[@name="logradouro"]'); }
    get numeroInput() {return $('//*[@id="fisica-endereco"]//*[@name="numero"]'); }
    get complementoInput() {return $('//*[@id="fisica-endereco"]//*[@name="complemento"]'); }
    get bairroInput() {return $('//*[@id="fisica-endereco"]//*[@name="bairro"]'); }
    get cidadeInput() {return $('//*[@id="fisica-endereco"]//*[@name="cidade"]'); }
    get estadoSelect() {return $('//*[@id="fisica-endereco"]//select[@name="estado"]'); }
    get desejoReceberEmailRadio() {return $('//*[@id="newsletter-fisica"]'); }
    get cadastrarButton() {return $('//*[@id="bt-submit-fisica"]'); }

    //Open
    open () {
        super.open('');        
    }

    //Actions

    clickCadastrar(){
        browser.waitToClick(this.cadastrarButton);
    }

    preencherPf(nome,
                sobreNome,
                dataNascimento,
                sexo,
                dddTel,
                numeroTel,
                dddCel,
                numeroCel,
                email,
                senha,
                confirmaSenha,
                cep,
                numero,
                complemento){
        browser.waitToClick(this.pessoaFisicaTab);
        browser.waitToSetValue(this.nomeInput, nome);
        browser.waitToSetValue(this.sobreNomeInput, sobreNome);
        browser.waitToSetValue(this.dataNascimentoInput, dataNascimento);
        browser.waitToSelectByVisibleText(this.sexoSelect, sexo);
        browser.waitToSetValue(this.dddTelefoneInput, dddTel);
        browser.waitToSetValue(this.numeroTelefoneInput, numeroTel);
        browser.waitToSetValue(this.dddCelularInput, dddCel);
        browser.waitToSetValue(this.numeroCelularInput, numeroCel);
        browser.waitToSetValue(this.emailInput, email);
        browser.waitToSetValue(this.senhaInput, senha);
        browser.waitToSetValue(this.senhaConfirmacaoInput, confirmaSenha);
        
        while(!this.numeroInput.isDisplayed()){
            browser.setValueSafe(this.cepInput, cep);
            browser.pause(5000);
        }
        
        browser.waitToSetValue(this.numeroInput, numero);
        browser.waitToSetValue(this.complementoInput, complemento);
    }
}

export default new Registro()
