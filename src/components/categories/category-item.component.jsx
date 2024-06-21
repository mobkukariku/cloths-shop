import "./category-item.component.style.scss";

const CategoryItem = ({category})=>{

    const{title, ImageSRC} = category;
    return(
        <div className="category-containers">
          <div className="background-image" style={{backgroundImage: `url(${ImageSRC})`}} >
            <div className="category-body-container" >
              <div className="category-body-container-text">
                <h2>{title}</h2>
                <p>check</p>
              </div>
              </div>
          </div>
        </div>
    )
}

export default CategoryItem;