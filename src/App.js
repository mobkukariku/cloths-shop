import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/authentication/authentication.component";
import UserProfile from "./routes/profile/profile.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import AddItemPage from "./routes/add-items/add-items.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}> 
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="profile/" element={<UserProfile />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="add-item" element={<AddItemPage />} />
      </Route>
    </Routes>
  );
}

export default App;
