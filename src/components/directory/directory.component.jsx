import CategoryItem from "../categories/category-item.component";


const DirectoryCategory = ({categories}) =>(
    <div className="d-flex flex-wrap container categories-containers">
      {categories.map((category)=>(
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
)

export default DirectoryCategory;