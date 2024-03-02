import React from 'react';

function LabResearchInfo() {
  return (
    <>
        <form action="AccountInfoUpload.php" method="post" encType="application/x-www-form-urlencoded">
            <table >
                <tbody>
                    <tr><td colSpan="8">List any Lab Research related to the field for each semester and summer during your collegiate career.<br />
                                    Where applicable, provide numbers of hours associated with that task per week. </td></tr>
                    <tr>
                        <td><br /></td>
                        <td >Research Project Name:</td>
                        <td><input type="text" name="researchName"  /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Academic Years and Hours:</td>
                        <td><input type="text" name="researchTime" /> </td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Description of Project and Duties:</td>
                        <td><textarea name="researchDescription" ></textarea></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset"/>
        </form>
    </>
  );
};

export default LabResearchInfo;

