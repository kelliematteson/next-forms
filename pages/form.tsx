
export default function Form(props){


    return (
        <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-2xl font-semibold">Divercity Interest Form</h1>
                    <p className="font-light text-sm">We look forward to hearing from you.</p>
                </div>
                <form
                className="grid grid-cols-1 gap-y-6">
                    <div className="flex flex-row justify-center items-center">
                    <div className="flex-col flex-auto">
                        <label>
                            Desired Internship Period
                        </label>
                        <input
                            type="number"
                            className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                            placeholder="90"
                            />
                        <label>
                            Skills
                        </label>
                        <div className="flex-wrap block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2">
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">User interface design</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">User experience design</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">UI design</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">UX design</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">Graphic design</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">Express/Node.js</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">React.js</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">MongoDB</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">APIs</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">Netlify</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">Tailwind CSS</button>
                            <button className="pr-2 pl-2 pt-1 pb-1 mr-4 mt-2 bg-slate-200 hover:bg-slate-300 rounded ">Gatsby</button>
                        </div>
                        <label>
                            College
                        </label>
                        <select
                                name="college"
                                placeholder="Select your college"
                                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                        > 
                            <option value="michigan">University of Michigan</option>
                            <option value="santa monica">Santa Monica College</option>
                            <option value="usc">USC</option>
                        </select>
                    </div>   
                    </div> 
                    <button
                    className="bg-blue-500 hover:bg-blue-600 rounded-tl-lg rounded-br-lg text-white w-32 pt-4 pb-4 pr-8 pl-8 justify-self-end"
                    type="submit"
                    >
                        Submit
                    </button>       
                </form>

            </div>
        </div>
    )
}