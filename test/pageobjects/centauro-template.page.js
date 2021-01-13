import Page from './page';
import utl   from '../../utilities/common-utilities';

class MeusPedidos extends Page {
    //Elements
    get element() {return $('xpath'); }
    
    //Open
    open () {
        super.open('');        
    }

    //Actions
    action(){
      
    }
}

export default new MeusPedidos()
