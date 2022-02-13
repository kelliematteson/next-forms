import React from 'react';
import MyForm from './myform';

export default function Home(props){
    function onSubmit(values) {
        console.log(values);
    }

       let template = {
           title: 'Divercity Interest Form',
           subtitle: 'We look forward to hearing from you.',
           fields: [
               {
                   title: 'Picture',
                   type: 'file',
                   name: 'picture'
               },
               {
                  title: 'First Name',
                  type: 'text',
                  name: 'firstname',
                  validationProps: {
                      required: 'Please enter your first name'
                  }
               }, 
               {
                   title: 'Last Name',
                   type: 'text',
                   name: 'lastname',
                   validationProps: {
                    required: 'Please enter your last name'
                }
               },
               {
                   title: 'Location',
                   type: 'text',
                   name: 'location',
                   validationProps: {
                    required: 'Please enter your location'
                }
               },
               {
                   title: 'Headline',
                   type: 'text',
                   name: 'headline',
                   validationProps: {
                    required: 'Please enter a headline'
                }
               },
               {
                   title: 'Bio',
                   type: 'textarea',
                   name: 'bio',
                   validationProps: {
                    required: 'Please enter your bio'
                }
               }
           ]
       }

    return(
        <div className="main-container">
            <div className="app-background">
              <MyForm 
                template={template}
                onSubmit={onSubmit}
                />  
            </div>
        </div>
    )
}