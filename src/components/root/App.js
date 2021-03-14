import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Dashboard from "./Dashboard";
import NotFound from "../common/NotFound";


function App() {
  return (
    <Container>
      <Navi />
      <hr className="mt-3"/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/product" component={Dashboard} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveproduct" component={AddOrUpdateProduct} />
        <Route path="/cart" component={CartDetail} />
        
        <Route path="" component={NotFound} />{/* en altta yazılı olması gerekir aksi takdirde her seferinde buraya girecektir */}
      </Switch>

    </Container>
  );
}

export default App;
