import React, {useState} from 'react';

function PersonalInfo() {
  return (
    <>
        <form action="PersonalInfo.php" method="post" encType="application/x-www-form-urlencoded">
            <table>
                <tbody>
                    <tr><td>Full Name:</td><td><input type="text" name="Name" onChange={(e) => setName(e.target.value)}></input><br /></td><td>ULM CWID:</td><td><input type="text" name="CWID" onChange={(e) => setCwid(e.target.value)}></input><br /></td></tr>
                    <tr><td>Local Address:</td><td><input type="text" name="Address" onChange={(e) => setAddress(e.target.value)}></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" onChange={(e) => setPhone(e.target.value)}></input><br /></td></tr>
                    <tr><td>ULM Email Address:</td><td><input type="text" name="ULMEmail" onChange={(e) => setUlmEmail(e.target.value)}></input><br /></td><td>ALternative email that <br />can be used after graduation:</td><td><input type="text" name="Email" onChange={(e) => setAlternativeEmail(e.target.value)}></input><br /></td></tr>
                    <tr><td>Major(s):</td><td><input type="text" name="Major" onChange={(e) => setMajor(e.target.value)}></input><br /></td><td>Minor(s):</td><td><input type="text" name="Minor" onChange={(e) => setMinor(e.target.value)}></input><br /></td></tr>
                    <tr><td>Password</td><td><input type='password' name='password' onChange={(e) => setPassword(e.target.value)}></input></td><td>Confirm Password:</td><td><input type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}></input></td></tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset" />
        </form>
    </>
  );
};

export default PersonalInfo;
