import React from 'react';
import MyForm from './myform';

export default function NextPage(props) {

    function onSubmit(values) {
        console.log(values);
    }

       let template = {
           title: 'Divercity Interest Form',
           subtitle: 'We look forward to hearing from you.',
           fields: [
               {
                   title: 'Desired Internship Period',
                   type: 'number',
                   name: 'internship'
               },
               {
                  title: 'Skills',
                  type: 'skills',
                  name: 'skills',
                  options: [
                    {
                        label: 'javascript',
                        value: 'javascript'
                    },
                    {
                        label: 'UX Design',
                        value: 'ux design'
                    },
                    {
                        label: 'Tailwind',
                        value: 'tailwind'
                    },
                    {
                        label: 'React',
                        value: 'react'
                    },
                    {
                        label: 'Building forms',
                        value:'building forms'
                    },
                    {
                        label: 'MERN Stack',
                        value: 'mern stack'
                    },
                    {
                        label: 'Ruby on Rails',
                        value: 'ruby on rails'
                    },
                    {
                        label: 'MongoDB',
                        value: 'mongodb'
                    },
                    {
                        label: 'Gatsby',
                        value: 'gatsby'
                    },
                    {
                        label: 'Next.js',
                        value: 'next.js'
                    }
                ],
                  validationProps: {
                      required: 'Select up to 10'
                  }
               }, 
               {
                   title: 'College',
                   type: 'select',
                   name: 'college',
                   options: [
                       {
                           label: 'University of Michigan',
                           value: 'university of michigan'
                       },
                       {
                           label: 'Santa Monica College',
                           value: 'santa monica college'
                       },
                       {
                           label: 'USC',
                           value: 'usc'
                       }
                   ],
                   validationProps: {
                    required: 'Select your college'
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