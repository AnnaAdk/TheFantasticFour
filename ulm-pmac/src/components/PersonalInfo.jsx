import React from 'react';

function PersonalInfo() {
  return (
    <>
        <form action="AccountInfoUpload.php" method="post" encType="application/x-www-form-urlencoded">
            <table>
                <tbody>
                    <tr><td>Full Name:</td><td><input type="text" name="Name" ></input><br /></td><td>ULM CWID:</td><td><input type="text" name="CWID" ></input><br /></td></tr>
                    <tr><td>Local Address:</td><td><input type="text" name="Address" ></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" ></input><br /></td></tr>
                    <tr><td>ULM Email Address:</td><td><input type="text" name="ULMEmail" ></input><br /></td><td>ALternative email that <br />can be used after graduation:</td><td><input type="text" name="Email" ></input><br /></td></tr>
                    <tr><td>Major(s):</td><td><input type="text" name="Major" ></input><br /></td><td>Minor(s):</td><td><input type="text" name="Minor" ></input><br /></td></tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset" />
        </form>
    </>
  );
};

export default PersonalInfo;
