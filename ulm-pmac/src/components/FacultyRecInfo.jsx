import React from 'react';

function FacultyRecInfo() {
  return (
    <>
        <form action="AccountInfoUpload.php" method="post" encType="application/x-www-form-urlencoded">
            <table>
                <tbody>
                    <tr><td colSpan="4">Please Provide the name title and department of faculty members(2) submitting an evaluation on your behalf</td></tr>
                    <tr><td>Faculty Member 1:</td></tr>
                    <tr><td>Name:</td><td><input type="text" name="FacultyNameOne"  /></td><td>Title:</td><td><input type="text" name="FacultyTitleOne" /></td></tr>
                    <tr><td>Department:</td><td><input type="text" name="FacultyDepOne" /></td></tr>
                    <tr><td><br /></td></tr>
                    <tr><td>Faculty Member 2:</td></tr>
                    <tr><td>Name:</td><td><input type="text" name="FacultyNameTwo"  /></td><td>Title:</td><td><input type="text" name="FacultyTitleTwo" /></td></tr>
                    <tr><td>Department:</td><td><input type="text" name="FacultyDepTwo" /></td></tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset"/>
        </form>
    </>
  );
};

export default FacultyRecInfo;
