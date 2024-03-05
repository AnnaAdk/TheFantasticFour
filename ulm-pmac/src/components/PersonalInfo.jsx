import React from 'react';

function PersonalInfo() {
  return (
    <>
        <form action="PersonalInfo.php" method="post" encType="application/x-www-form-urlencoded">
            <table>
                <tbody>
                    <tr><td>Street Address 1:</td><td><input type="text" name="Str1" ></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" ></input><br /></td></tr>
                    <tr><td>Street Address 2:</td><td><input type="text" name="Str2" ></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" ></input><br /></td></tr>
                    <tr><td>City:</td><td><input type="text" name="City" ></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" ></input><br /></td></tr>
                    <tr><td>State:</td><td><input type="text" name="State" ></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" ></input><br /></td></tr>
                    <tr><td>ZipCode:</td><td><input type="text" name="Zip" ></input><br /></td><td>Cell Phone:</td><td><input type="text" name="Phone" ></input><br /></td></tr>
                    {/*<tr><td>Full Name:</td><td><input type="text" name="Name" ></input><br /></td><td>ULM CWID:</td><td><input type="text" name="CWID" ></input><br /></td></tr>
                       <tr><td>ULM Email Address:</td><td><input type="text" name="ULMEmail" ></input><br /></td><td>ALternative email that <br />can be used after graduation:</td><td><input type="text" name="Email" ></input><br /></td></tr>
                       <tr><td>Major(s):</td><td><input type="text" name="Major" ></input><br /></td><td>Minor(s):</td><td><input type="text" name="Minor" ></input><br /></td></tr>*/}
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset" />
        </form>
    </>
  );
};

export default PersonalInfo;
