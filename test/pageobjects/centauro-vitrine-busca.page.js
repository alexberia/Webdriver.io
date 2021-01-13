import Page from './page';
import utl   from '../../utilities/common-utilities';

class BuscaProduto extends Page {
    //Elements
    get voceProcurouPorLabel() {return $('//*[text()="Você procurou por"]'); }
    
    //Open
    open (name) {
        super.open(`busca?q=${name}`);
    }
    
    //Actions
    validarPagina(){
        this.voceProcurouPorLabel.waitForDisplayed();
        return this.voceProcurouPorLabel.isDisplayed();
    }
    
}

export default new BuscaProduto()
