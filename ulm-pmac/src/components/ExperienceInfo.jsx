import React from 'react';

function ExperienceInfo() {
  return (
    <>
        <form action="Experience.php" method="post" encType="application/x-www-form-urlencoded">
            <table >
                <tbody>
                    <tr><td colSpan="8">List any experiences related to the field for each semester and summer during your collegiate career.<br />
                                        Where applicable, provide numbers of hours associated with that task per week. </td></tr>
                    <tr>
                        <td><br /></td>
                        <td >Name of academic club:</td>
                        <td><input type="text" name="expName"  /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Total amount of time spent:<br />(In Hours and Years)</td>
                        <td><input type="text" name="expTime" /> </td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Description of experience and duties:</td>
                        <td><textarea name="expDescription" ></textarea></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset"/>
        </form>
    </>
  );
};

export default ExperienceInfo;
