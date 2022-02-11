import React from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
   const { register, handleSubmit, formState: {errors} } = useForm();

   console.log(errors);
    
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
            <form onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="grid grid-cols-1 gap-y-6">
                <div className="flex flex-row">
                <label>
                    First Name:
                </label>
                <input
                    type="text"
                    // name="firstName"
                    {...register("firstName", { required: 'Please enter your first name.'})}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                    placeholder="First Name"
                    />
                    <span>{errors?.firstName?.message}</span>
                <label>
                    Last Name:
                </label>
                <input
                    type="text"
                    {...register("lastName", { required: 'Please enter your last name.'})}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                    placeholder="Last Name"
                    />
                    <span>{errors?.lastName?.message}</span>
                    </div>
                <label>
                    Location:
                </label>
                <input
                    type="text"
                    {...register("location", { required: 'Please enter your location.'})}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                    placeholder="Location"
                    />
                    <span>{errors?.location?.message}</span>
                <label>
                    Headline:
                </label>
                <input
                    type="text"
                    {...register("headline", { required: 'Please enter a headline.'})}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                    placeholder="Headline"
                    />
                    <span>{errors?.headline?.message}</span>
                <label>
                    Bio:
                </label>
                <textarea
                    type="text"
                    rows="6"
                    {...register("bio", { required: 'Please enter your bio.'})}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                    placeholder="Bio:">
                    </textarea>
                    <span>{errors?.bio?.message}</span>
                <button
                    type="submit">
                        Submit
                    </button>
            </form>
           </div> 
        </div>
    )
}
