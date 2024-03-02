import React from 'react';

function WorkInfo() {
  return (
    <>
     <form action="AccountInfoUpload.php" method="post" encType="application/x-www-form-urlencoded">
        <table>
            <tbody>
                <tr><td colSpan="8">List any work for each semester and summer during your collegiate career.<br />
                Where applicable, provide numbers of hours associated with that task per week. </td></tr>
                <tr>
                <td><br /></td>
                <td >Name of academic club:</td>
                <td><input type="text" name="workName"  /></td>
                </tr>
                <tr>
                <td><br /></td>
                <td >Total amount of time spent:<br />(In Hours and Years)</td>
                <td><input type="text" name="workTime" /> </td>
                </tr>
                <tr>
                <td><br /></td>
                <td >Description of position and duties:</td>
                <td><textarea name="workDescription"></textarea></td>
                </tr>
            </tbody>
        </table>
        <input type="submit" />
        <input type="reset"/>
    </form>
    </>
  );
};

export default WorkInfo;
