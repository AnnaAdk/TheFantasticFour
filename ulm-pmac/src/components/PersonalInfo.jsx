import React, {useState} from 'react';

function PersonalInfo() {

  const [formData, setFormData] = useState({
    Name: '',
    CWID: '',
    Address: '',
    Phone: '',
    ULMEmail: '',
    Email: '',
    Major: '',
    Minor: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
        <form action="PersonalInfo.php" method="post" encType="application/x-www-form-urlencoded">
            <table>
                <tbody>
                    <tr><td>Full Name:</td><td><input type="text" name="Name" onChange={handleInputChange}></input><br /></td><td>ULM CWID:</td><td><input type="text" name="CWID" onChange={handleInputChange}></input><br /></td></tr>
                    <tr><td>Local Address:</td><td><input type="text" name="Address" onChange={handleInputChange}></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" onChange={handleInputChange}></input><br /></td></tr>
                    <tr><td>ULM Email Address:</td><td><input type="text" name="ULMEmail" onChange={handleInputChange}></input><br /></td><td>ALternative email that <br />can be used after graduation:</td><td><input type="text" name="Email" onChange={handleInputChange}></input><br /></td></tr>
                    <tr><td>Major(s):</td><td><input type="text" name="Major" onChange={handleInputChange}></input><br /></td><td>Minor(s):</td><td><input type="text" name="Minor" onChange={handleInputChange}></input><br /></td></tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset" />
        </form>
    </>
  );
};

export default PersonalInfo;
