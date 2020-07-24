import React from 'react';
import{ BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Produtos from './pages/produtos';
import AddProdutos from './pages/addProduto';

/*import Profile from './pages/profile';
import NewIncidents from './pages/NewIncident';
*/
export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Logon}/>
      <Route path="/produtos" exact component={Produtos}/>
      <Route path="/addProdutos" exact component={AddProdutos}/>

      </Switch>
    </BrowserRouter>
  );
}