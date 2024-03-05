import React, { useState } from 'react';
import { Form } from 'react-router-dom';

function AccountCreation() {
  const [formData, setFormData] = useState({
    CWID: '',
    Password: '',
    Email: '',
    Phone: '',
    Fname: '',
    Lname: '',
    Mini: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await fetch("http://127.0.0.1:8000/components/php/CreateAccount.php",{
      method: 'POST',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded',
        }),
      body: formData
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <form action="CreateAccount.php" onSubmit={handleFormSubmit} method="post" encType="application/x-www-form-urlencoded">
        <table>
          <tbody>
            <tr><td>CWID:</td><td><input type="int" name="CWID" value={formData.CWID} onChange={handleInputChange} /><br /></td></tr>
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
