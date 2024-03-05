import React from 'react';

function MedSchoolInfo() {
  return (
    <>
        <form action="MedSchoolInfo.php" method="post" encType="application/x-www-form-urlencoded">
            <table>
                <tbody>
                    <tr><td colSpan="3">Score of most recent Professional exam(MCAT, DAT, OAT, GRE) with breakdown scores</td><td><textarea name="ExamScores" ></textarea></td></tr>
                    <tr><td>Date Exam was taken:</td><td><input type="text" name="ExamDate" ></input></td></tr>
                    <tr><td><br /></td></tr>
                    <tr><td><br /></td></tr>
                    <tr><td>Type of school application <br />will be sent to:</td><td><input type="text" name="SchoolType" ></input></td></tr>
                    <tr><td colSpan="4">Depending on the type of application, please fill in the appropriate ID numbers.</td></tr>
                    <tr><td><br /></td></tr>
                    {/*<tr><td>AMCAS Letter ID:</td><td><input type="text" name="AMCASID" /></td><td>AAMC ID:</td><td><input type="text" name="AAMCID"  /></td></tr>
                    <tr><td>AACOMAS CAS#:</td><td><input type="text" name="AACOMASCAS" /></td><td>CASPA CAS#:</td><td><input type="text" name="CASPACAS"/></td></tr>
                    <tr><td>AADSAS ID#:</td><td><input type="text" name="AADSASID" /></td></tr>   */}
                </tbody>         
            </table>
            <input type="submit" />
            <input type="reset"/>
        </form>
    </>
  );
};

export default MedSchoolInfo;
