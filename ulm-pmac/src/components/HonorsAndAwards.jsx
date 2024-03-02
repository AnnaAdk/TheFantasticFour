import React from 'react';

function HonorsAndAwards() {
  return (
    <>
        <form action="AccountInfoUpload.php" method="post" encType="application/x-www-form-urlencoded">
            <table >
                <tbody>
                    <tr><td colSpan="8">List any Awards and/or Honors related to the field for each semester and summer during your collegiate career.<br />
                                        Where applicable, provide numbers of hours associated with that task per week. </td></tr>
                    <tr>
                        <td><br /></td>
                        <td >Name of Honor/Award:</td>
                        <td><input type="text" name="awardName"  /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Date Recieved:</td>
                        <td><input type="text" name="awardDate" /> </td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td >Description of award:</td>
                        <td><textarea name="awardDescription" ></textarea></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset"/>
        </form>
    </>
  );
};

export default HonorsAndAwards;
