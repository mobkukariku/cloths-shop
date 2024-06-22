import { Outlet } from "react-router-dom";
import DirectoryCategory from "../../components/directory/directory.component";
import "./home.component.style.scss"

const Home = () => {

  const categories = [
    {
      id: 1,
      title: "Hats",
      ImageSRC: "https://cdn.shopify.com/s/files/1/0824/1887/files/baseball-hat_8a2cdd07-e4fd-4073-8ebd-ebab4735cba2_1600x.jpg"
    },
    {
      id: 2,
      title: "outerwear",
      ImageSRC: "https://a.mktgcdn.com/p/1YjH3hozee4RzDAjb1dhJRt7aj__wdWH9DdG6L2QoNo/1400x829.jpg"
    },
    {
      id: 3,
      title: "shoes",
      ImageSRC: "https://img.goodfon.com/original/2500x1667/5/50/new-balance-576ebo-three.jpg"
    },
    {
      id: 4,
      title: "pants",
      ImageSRC: "https://daleel.global/wp-content/uploads/2019/10/photodune-1304881-jeans-clothes-on-shelf-in-shop-m.jpg"
    },
    {
      id: 5,
      title: "accessories",
      ImageSRC: "https://cityofmen.ru/wp-content/uploads/2015/07/509dc9c966.jpg"
    }
  ]


  return (
   <div>
    <div className="directory-title"><p>BE ON TREND WITH US</p></div>
    <DirectoryCategory categories={categories} />
    <Outlet />
   </div>
  );
}

export default Home;
