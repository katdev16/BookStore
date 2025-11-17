import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import backIcon from "../assets/arrow_back_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

function AddBook() {
  // Step 1: Define state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    authors: "",
    description: "",
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Thank you, ${formData.name}!`);
  };

  // navigation
  const navigate = useNavigate();

  return (
    <>
  <div className="h-full w-full">
    <div className="w-30 flex items-center gap-4 p-4 cursor-pointer" onClick={() => navigate('/')}>
    <img src={backIcon} alt="Back" className="w-6 h-6 cursor-pointer"/>
    <h1>Back</h1>
    </div>
    <div className="text-black flex flex-justify-center items-center flex-col">
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit} className="p-20 flex flex-col gap-4">
        {/* Input for Name */}
        Name:
        <label>
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border boarder-white p-2 rounded-lg"
          />
        </label>
        <br />

         {/* Textarea for Category */}
        Category:
        <label>
          <textarea
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-50 border boarder-white p-2 rounded-lg"
          />
        </label>
        <br />

         {/* Textarea for Authors */}
        Authors:
        <label>
          <textarea
            name="authors"
            value={formData.authors}
            onChange={handleChange}
            required
            className="w-50 border boarder-white p-2 rounded-lg"
          />
        </label>
        <br />

        {/* Input for Email */}
        Description:
        <label>
          
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-50 border boarder-white p-2 rounded-lg"
          />
        </label>
        <br />
       


        {/* Submit Button */}
        <button type="submit" className="w-30 border border-black p-2 rounded-lg">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default AddBook;
