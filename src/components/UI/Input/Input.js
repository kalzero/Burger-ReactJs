import React from "react";
import css from "./Input.css";

const input = (props) => {
    let inputElement = null;
    const inputClasses = [css.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(css.Invalid);
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }    

    switch (props.elementType) {
        case ("input"):
            inputElement = <input 
                            className={inputClasses.join(" ")} 
                            {...props.elementConfig} 
                            value={props.value} onChange={props.changed} />;
            break;
        case ("textarea"):
            inputElement = <textarea 
                            className={inputClasses.join(" ")} 
                            {...props.elementConfig} 
                            value={props.value} onChange={props.changed} />;
            break;
        case ("select"):
            inputElement = (
                    <select 
                        className={inputClasses.join(" ")} 
                        {...props.elementConfig} 
                        value={props.value} onChange={props.changed} >
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        ))}
                    </select>
                    );
            break;
        default:
            inputElement = <input 
                            className={inputClasses.join(" ")} 
                            {...props.elementConfig} 
                            value={props.value} onChange={props.changed} />;
    }

    return (
        <div className={css.Input}>
            <label className={css.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;