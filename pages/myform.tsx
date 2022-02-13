import React from 'react';
import { useForm } from 'react-hook-form';
//reusable form component
export default function MyForm({ template, onSubmit }) {

    let { register, handleSubmit, formState: {errors} } = useForm();
    let { title, subtitle, fields } = template;
    
    console.log(errors);
    const renderFields = (fields) => {
        return fields.map(field => {
            let { title, type, name, validationProps, options } = field;

            switch(type){
                case 'text':
                    return (
                        <div key={name} className="inner-name-container">
                        <label htmlFor={name}>{title}</label>
                        <input type="text" className="input" id={name} {...register((name), validationProps)}/>
                    {errors[name] && <span className="error-message">{errors[name]['message']}</span>}
                        </div>
                    )
                case 'textarea':
                    return (
                        <div key={name} className="inner-name-container">
                        <label htmlFor={name}>{title}</label>
                        <textarea rows={8} className="input" id={name} {...register(name)} />
                    </div>
                    )
                    case 'file':
                    return (
                        <div key={name} className="outer-image">
                            <span className="inner-image"/>
                        <label htmlFor={name}>{title}</label>
                        <input type="file" id={name} {...register(name)} />
                        <button className="image-btn">Change Photo</button>
                    </div>
                    )
                    case 'number':
                        return (
                            <div key={name} className="inner-name-container">
                            <label htmlFor={name}>{title}</label>
                            <input type="number" className="input" id={name} {...register(name)} />
                        </div>
                        )
                        case 'select':
                    return (
                        <div key={name} className="inner-name-container">
                        <label htmlFor={name}>{title}</label>
                        <select className="input" id={name} {...register(name)}>
                            <option value="" selected disabled>Select your college</option>
                           {options.map(option => {
                                return(<option key={option.value} value={option.value}>{option.label}</option>)
                            })}
                        </select>
                    </div>
                    )
                    case 'skills':
                    return (
                        <div key={name} className="inner-name-container">
                        <label htmlFor={name}>{title}</label>
                        <div className="input" id={name} {...register(name)}>
                        {options.map(option => {
                                return(<button className="skills-btn" key={option.value}>{option.label}</button>)
                            })}
                        </div>
                            
                    </div>
                    )
                default:
                    return(
                        <span className="red-text">Invalid Field</span>
                    )
            }
        }
        )}
 
    return(
        <div>
            <form className="form"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="header">
                    <h1 className="title">{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    </div>
                    <div className="input-name-container">
                    {renderFields(fields)}
                    </div>
                    <br/>
                    <button type="submit" className="btn">Submit</button>

                </form>
        </div>
    )
}