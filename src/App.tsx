import {  FormEvent } from 'react';

import './App.css'
import Form from './components/form';

function App() {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    
    const formData = new FormData(event.currentTarget); // Use FormData to access form elements
    const json = formData.get('json') as string; // 'json' is the name attribute of your textarea
  
    try {
      const parsedJson = JSON.parse(json);
      console.log(parsedJson);
      sessionStorage.setItem("JSON", json);
      window.location.reload(); // Reloading the page might not be the best way to update the component
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };
  

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className='text-center text-5xl font-extrabold'>JSON FORM GENERATION TEST</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            name="json"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter JSON here"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
      <Form />
    </>
  );
}
export default App;
