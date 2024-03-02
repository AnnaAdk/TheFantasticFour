import React from 'react';

function VolunteerExperiences() {
  return (
    <>
        <form action="AccountInfoUpload.php" method="post" encType="application/x-www-form-urlencoded">
            <table >
                <tbody>
                    <tr><td colSpan="8">List any volunteer experiences related to the field for each semester and summer during your collegiate career.<br />
                                        Where applicable, provide numbers of hours associated with that task per week. </td></tr>
                    <tr>
                        <td><br /></td>
                        <td >Experience:</td>
                        <td><input type="text" name="volunteerExpName"  /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Name of Individual or Group:<br />(In Hours and Years)</td>
                        <td><input type="text" name="volunteerName" /> </td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Dates and Hours:<br />(In Hours and Years)</td>
                        <td><input type="text" name="volunteerTime" /> </td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Description of experience:</td>
                        <td><textarea name="VolunteerDescription" ></textarea></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset"/>
        </form>
    </>
  );
};

export default VolunteerExperiences;
