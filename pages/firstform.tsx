import * as React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';


export default function Home() {
   const { register, handleSubmit, formState: {errors} } = useForm();
  
    const submitData = (data) => {
      console.log(data)
      
    }
    return (
        <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
            <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold">Divercity Interest Form</h1>
            <p className="font-light text-sm">We look forward to hearing from you.</p>
            </div>
            <div>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Photo</button>
              </div>
            </div>
            <form onSubmit={handleSubmit(submitData)}
            className="grid grid-cols-1 gap-y-6">
                <div className="flex flex-row justify-center items-center">
                  <div className="flex-col flex-auto">
                <label>
                    First Name:
                </label>
                <input
                    type="text"
                    defaultValue=''
                    // name="firstName"
                    {...register("firstName", { required: 'Please enter your first name.'})}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                      errors.firstName ? 'ring-2 ring-red-500' : null
                    }`}
                    placeholder="First Name"
                    />
                    <p className="text-red-400 text-sm py-2">{errors?.firstName?.message}</p>
                    </div>
                <div className="flex-col flex-auto">
                <label>
                    Last Name:
                </label>
                <input
                    type="text"
                    defaultValue=''
                    {...register("lastName", { required: 'Please enter your last name.'})}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                      errors.lastName ? 'ring-2 ring-red-500' : null
                    }`}
                    placeholder="Last Name"
                    />
                    <p className="text-red-400 text-sm py-2">{errors?.lastName?.message}</p>
                    </div>
                    </div>
                <label>
                    Location:
                </label>
                <input
                    type="text"
                    defaultValue=''
                    {...register("location", { required: 'Please enter your location.'})}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                      errors.location ? 'ring-2 ring-red-500' : null
                    }`}
                    placeholder="Location"
                    />
                    <p className="text-red-400 text-sm py-2">{errors?.location?.message}</p>
                <label>
                    Headline:
                </label>
                <input
                    type="text"
                    defaultValue=''
                    {...register("headline", { required: 'Please enter a headline.'})}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                      errors.headline ? 'ring-2 ring-red-500' : null
                    }`}
                    placeholder="Headline"
                    />
                    <p className="text-red-400 text-sm py-2">{errors?.headline?.message}</p>
                <label>
                    Bio:
                </label>
                <textarea
                defaultValue=''
                    rows={8}
                    {...register("bio", { required: 'Please enter your bio.'})}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                      errors.bio ? 'ring-2 ring-red-500' : null
                    }`}
                    placeholder="Bio:">
                    </textarea>
                    <p className="text-red-400 text-sm py-2">{errors?.bio?.message}</p>
                <button
                    className="bg-blue-500 hover:bg-blue-600 rounded-tl-lg rounded-br-lg text-white w-32 pt-4 pb-4 pr-8 pl-8 justify-self-end"
                    type="submit"
                    ><Link href="./form">
                        Next
                        </Link>
                    </button>
            </form>
            
           </div> 
        </div>
    )
}
