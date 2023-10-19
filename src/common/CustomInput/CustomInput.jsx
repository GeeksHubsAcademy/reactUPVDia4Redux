
import "./CustomInput.css";

export const CustomInput = ({name, type, handlerFunction}) => {

    return (
        <input
            className="inputDesign"
            name={name}
            type={type}
            onChange={(e)=>handlerFunction(e)}
        />
    )
}