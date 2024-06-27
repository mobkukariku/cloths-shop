import "./button.component.style.scss"

const buttonStyles = {
    google: "googlge-sign-in-btn",
    default: "default-btn",
    reverse: "reverse-btn"
}


const Button = ({childrenText, buttonType, ...otherProps}) =>{
    return(
        <div>
            <button className={`button-container ${buttonStyles[buttonType]}`} {...otherProps}>{childrenText}</button>
        </div>
    )
}

export default Button;