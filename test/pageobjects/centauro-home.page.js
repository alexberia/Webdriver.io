import Page from './page';
import utl   from '../../utilities/common-utilities';

class HomePage extends Page {
  
    get logoDiv() {return $('(//div[@class="logo"])[2]'); }
    get usernameLabel()   { return $('(//a[@class="user-tag"])[2]'); }
    get buscarInput()   { return $('//header//input[@name="q"]'); }
    get lupaButton() {return $('//header[@id="new-main-header"]//i[text()="search"]'); }
    get meusPedidosLink() {return $('(//a[@title="Meus pedidos"])[3]'); }

    open () {
        super.open(''); 
    }

    clickMeusPedidos () {      
      browser.waitToClick(this.meusPedidosLink);
    }

    consultarProduto(name){
      browser.waitToSetValue(this.buscarInput, name);
      browser.waitToClick(this.lupaButton);
    }


}

export default new HomePage()
