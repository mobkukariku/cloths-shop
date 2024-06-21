import CategoryItem from "../categories/category-item.component";
import "./directory.component.styles.scss"


const DirectoryCategory = ({categories}) =>(
    <div className="categories-containers">
      {categories.map((category)=>(
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
)

export default DirectoryCategory;