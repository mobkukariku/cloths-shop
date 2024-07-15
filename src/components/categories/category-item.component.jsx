import "./category-item.component.style.scss";

const CategoryItem = ({category})=>{

    const{title, ImageSRC} = category;
    return(
      <div className='category-container border border-success rounded'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${ImageSRC})`,
        }}
      />
      <div className='category-body-container rounded '>
        <p className=" category-title text-uppercase ">{title}</p>
        <p className="text-uppercase">Shop Now</p>
      </div>
    </div>
    )
}

export default CategoryItem;