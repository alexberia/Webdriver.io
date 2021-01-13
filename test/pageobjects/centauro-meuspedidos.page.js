import Page from './page';
import utl   from '../../utilities/common-utilities';

class MeusPedidos extends Page {
    //Elements
    get meusPedidosLabel() {return $('//a[@class="item active " and text() = "Meus Pedidos"]'); }
    
    //Open
    open () {
        super.open('minha-conta/meus-pedidos');
    }

    //Actions
    assertMeusPedidos(){
      this.meusPedidosLabel.waitForDisplayed();
      return this.meusPedidosLabel.isDisplayed();
    }
}

export default new MeusPedidos()
