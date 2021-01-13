import Page from './page';
import utl   from '../../utilities/common-utilities';
import CPF from 'gerador-validador-cpf';

class ProdutoPage extends Page {

    get produtoButton() {return $('//*[@id="addToCart_pdp"]//div[text()="Comprar"]');}
    
    
    /**
     * define or overwrite page methods
     */
    open (codigoRef) {
        super.open(codigoRef)        
    }
    
    comprarClick(){

    }
}

export default new LoginPage()
