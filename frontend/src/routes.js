import React from 'react';
import{ BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Produtos from './pages/produtos';
import AddProduto from './pages/addProduto';
import Cadastrar from './pages/cadastrar';
import Apagar from './pages/apagar';

/*import Profile from './pages/profile';
import NewIncidents from './pages/NewIncident';
*/
export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Logon}/>
      <Route path="/produtos" exact component={Produtos}/>
      <Route path="/addProduto" exact component={AddProduto}/>
      <Route path="/cadastrar" exact component={Cadastrar}/>
      <Route path="/apagar" exact component={Apagar}/>

      </Switch>
    </BrowserRouter>
  );
}