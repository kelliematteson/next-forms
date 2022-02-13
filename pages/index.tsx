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
                  title: 'First Name',
                  type: 'text',
                  name: 'firstname' 
               }, 
               {
                   title: 'Last Name',
                   type: 'text',
                   name: 'lastname'
               },
               {
                   title: 'Location',
                   type: 'text',
                   name: 'location'
               },
               {
                   title: 'Headline',
                   type: 'text',
                   name: 'headline'
               },
               {
                   title: 'Bio',
                   type: 'textarea',
                   name: 'bio'
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