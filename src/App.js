import React, { useState } from "react";
import Topnav from "./component/Topnav";
import Sidenav from "./component/sidenav"
import Items from "./component/items"

function App() {
  const [favorite,setfavorite] = useState(false);
  const [cart,setcart] = useState(false);

  return (
    <div className="App">
    <Topnav setfavorite={setfavorite} favorite={favorite} cart={cart} setcart={setcart}/>
    <div className="main">
      <div><Sidenav favorite={favorite} cart={cart}/></div>
      <div><Items favorite={favorite} cart={cart} setfavorite={setfavorite} setcart={setcart}/></div> 
    </div>
    </div>
  );
}
export default App;
