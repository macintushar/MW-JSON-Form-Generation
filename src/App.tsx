import { useState, useEffect, FormEvent } from 'react';

import './App.css'
import Form from './components/form';

type ConnectionSpec = {
  documentation_url: string;
  connection_specification: {
    $schema: string;
    title: string;
    type: string;
    required: string[];
    properties: {
      credentials: {
        title: string;
        type: string;
        oneOf: Array<{
          title: string;
          type: string;
          required: string[];
          order: number;
          properties: {
            auth_type: {
              type: string;
              const: string;
              order: number;
            };
            username: {
              description: string;
              examples: string[];
              type: string;
              title: string;
              order: number;
            };
            password: {
              description: string;
              type: string;
              multiwoven_secret: boolean;
              title: string;
              order: number;
            };
          };
        }>;
        order: number;
      };
      host: {
        description: string;
        examples: string[];
        type: string;
        title: string;
        order: number;
      };
      role: {
        description: string;
        examples: string[];
        type: string;
        title: string;
        order: number;
      };
      warehouse: {
        description: string;
        examples: string[];
        type: string;
        title: string;
        order: number;
      };
      database: {
        description: string;
        examples: string[];
        type: string;
        title: string;
        order: number;
      };
      schema?: {
        description: string;
        examples: string[];
        type: string;
        title: string;
        order: number;
      };
      jdbc_url_params?: {
        description: string;
        title: string;
        type: string;
        order: number;
      };
    };
  };
};


function App() {
  const [jsonInput, setJsonInput] = useState<ConnectionSpec | null>(null);

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();    
    const formData = event.target[0].value;
    const json = formData as string;

    try {
      const parsedJson = JSON.parse(json);
      console.log(parsedJson);
      sessionStorage.setItem("JSON",json);
      window.location.reload()
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
