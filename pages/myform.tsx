import React from 'react';
import { useForm } from 'react-hook-form';
//reusable form component
export default function MyForm({ template, onSubmit }) {

    let { register, handleSubmit } = useForm();
    let { title, subtitle, fields } = template;
    

    const renderFields = (fields) => {
        return fields.map(field => {
            let { title, type, name } = field;

            switch(type){
                case 'text':
                    return (
                        <div key={name} className="inner-name-container">
                        <label htmlFor={name}>{title}</label>
                        <input type="text" className="input" id={name} {...register((name), { required: `Please enter your ${name}.`})}/>
                    </div>
                    )
                case 'textarea':
                    return (
                        <div key={name} className="inner-name-container">
                        <label htmlFor={name}>{title}</label>
                        <textarea rows={8} className="input" id={name} {...register(name)} />
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
                    <button type="submit" className="btn">Next</button>

                </form>
        </div>
    )
}