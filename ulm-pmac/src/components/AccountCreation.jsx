import React, { useState } from 'react';
import axios from 'axios';

function AccountCreation() {
  const [formData, setFormData] = useState({
    id: '',
    Password: '',
    Email: '',
    Phone: '',
    Fname: '',
    Lname: '',
    Mini: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();    

    fetch("http://localhost:3000/accounts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((res)=>console.log(res))
    .catch(function(error) {console.log("Request failed", error)});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} method="POST" encType="multipart/form-data">
        <table>
          <tbody>
            <tr><td>CWID:</td><td><input type="int" name="id" value={formData.id} onChange={handleInputChange} /><br /></td></tr>
            <tr><td>Password:</td><td><input type="password" name="Password" value={formData.Password} onChange={handleInputChange} /><br /></td></tr>
            <tr><td>Non-School Email:</td><td><input type="text" name="Email" value={formData.Email} onChange={handleInputChange} /><br /></td></tr>
            <tr><td>Cell Phone:</td><td><input type="text" name="Phone" value={formData.Phone} onChange={handleInputChange} /><br /></td></tr>
            <tr><td>FirstName:</td><td><input type="text" name="Fname" value={formData.Fname} onChange={handleInputChange} /><br /></td></tr>
            <tr><td>LastName:</td><td><input type="text" name="Lname" value={formData.Lname} onChange={handleInputChange} /><br /></td></tr>
            <tr><td>Middle initial:</td><td><input type="char" name="Mini" value={formData.Mini} onChange={handleInputChange} /><br /></td></tr>
          </tbody>
        </table>
        <input type="submit" />
        <input type="reset" />
      </form>
    </>
  );
}

export default AccountCreation;
