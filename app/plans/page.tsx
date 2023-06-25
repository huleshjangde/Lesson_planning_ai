'use client'

import { useState } from 'react';
import Image from 'next/image';

const FormComponent = () => {
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [verb, setVerb] = useState('');
  const [result,setresult] = useState("")
  const [resultTopic,setResultTopic] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const handleGradeChange = (e: any) => {
    setGrade(e.target.value);
  };

  const handleSubjectChange = (e: any) => {
    setSubject(e.target.value);
  };

  const handleTopicChange = (e:any) => {
    setTopic(e.target.value);
  };

  const handleVerbChange = (e: any) => {
    setVerb(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle form submission here
  
    setResultTopic(topic)
    fetch("https://lesson-planing-server.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       grade, subject, topic , verb
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        setresult(data.answer)
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      }).finally(() => {
        setIsLoading(false); // Set isLoading to false after receiving the API response
        setTopic('');
      });

      window.scrollBy({
        top: 200,
        behavior: 'smooth',
      });

  };

  const handleCopyText = () => {
    const textArea = document.createElement('textarea');
    textArea.value = result;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <>
    <div className=' flex flex-col justify-center items-center gap-8 py-10 bg-opacity-80 w-screen '>
      <h1 className='text-2xl lg:text-4xl font-bold uppercase text-slate-100 ' >Lesson Planning Assistant</h1>

    <form onSubmit={handleSubmit} className=" w-4/5 h-full md:w-4/5 mx-auto bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 ">
    <div className=" text-base">
      <label htmlFor="grade" className="block text-gray-700 text-lg font-bold mb-2">
        Grade:
      </label>
      <select
        id="grade"
        value={grade}
        onChange={handleGradeChange}
        className="w-5/6 md:w-full border border-gray-300 bg-slate-100 rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select Grade</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="gradution">gradution</option>
        <option value="master_degree">post-gradution</option>
        {/* Add more options for grades */}
      </select>
    </div>
    <div className="mb-6 mt-6">
      <label htmlFor="subject" className="block text-lg text-gray-700 font-bold mb-2">
        Subject:
      </label>
      <select
        id="subject"
        value={subject}
        onChange={handleSubjectChange}
        className="w-full border border-gray-300 bg-slate-100 rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value=''>Select Subject</option>
              <option value='Math'>Math</option>
              <option value='Science'>Science</option>
              <option value='English'>English</option>
              <option value='History'>History</option>
              <option value='Computer Science'>Computer Science</option>
              <option value='Electronics'>Electronics</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="topic" className="block text-gray-700 font-bold mb-2 text-lg">
        Topic:
      </label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={handleTopicChange}
        className="w-full border border-gray-300 bg-slate-100 rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="verb" className="block text-gray-700 text-sm font-bold mb-2 text-lg">
        Verb:
      </label>
      <select
        id="verb"
        value={verb}
        onChange={handleVerbChange}
        className="w-full border border-gray-300 bg-slate-100 rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
       <option value="">Select Verb</option>
  <option value="Learn">Learn</option>
  <option value="Explore">Explore</option>
  <option value="Study">Study</option>
  <option value="Practice">Practice</option>
  <option value="Discuss">Discuss</option>
      </select>
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Submit
    </button>
  </form>

<div className=' text-slate-100 w-full flex flex-col items-center'>
  {isLoading ? ( // Display loading status while isLoading is true
  <Image
  src="https://i.pinimg.com/originals/62/26/43/6226435516042edfe1a4514a44e2023a.gif"
  alt="Picture of the author"
  className=' mix-blend-screen'
  width={350}
  height={350}
/>
          ) : (
            <pre
              className='w-full lg:w-5/6 px-8 py-3 overflow-ellipsis whitespace-pre-wrap bg-slate-800 mt-5 rounded-lg text-xl'
              style={{ wordBreak: 'break-all' }}
            >
              <div className='flex  flex-col-reverse md:justify-between md:flex-row-reverse  md:items-center px-8 rounded-lg'>
              <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 text-sm md:text-base rounded mt-4 focus:outline-none focus:shadow-outline'
            onClick={handleCopyText}
          >
            Copy Text
          </button> 
  <h1 className='text-2xl font-bold'>Topic: {resultTopic} </h1>
                </div>

              {result}
            </pre>
          )}
         

</div>
</div>

  </>

  
  );
};

export default FormComponent;
