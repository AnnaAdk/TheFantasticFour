import React from 'react';

function MemAcaClubInfo() {
  return (
    <>
        <form action="AccountInfoUpload.php" method="post" encType="application/x-www-form-urlencoded">
          <table >
              <tbody>
                  <tr><td colSpan="8">List any memberships/academic clubs for each semester and summer during your collegiate career.<br />
                  Where applicable, provide numbers of hours associated with that task per week. </td></tr>
                  <tr>
                  <td><br /></td>
                  <td >Name of academic club:</td>
                  <td><input type="text" name="membershipName"  /></td>
                  </tr>
                  <tr>
                  <td><br /></td>
                  <td >Total amount of time spent:<br />(In Hours and Years)</td>
                  <td><input type="text" name="membershipTime" /> </td>
                  </tr>
                  <tr>
                  <td><br /></td>
                  <td >Description of involvement:<br />(indicate leadership)</td>
                  <td><textarea name="membershipDescription" ></textarea></td>
                  </tr>
              </tbody>
          </table>
          <input type="submit" />
          <input type="reset"/>
        </form>
    </>
  );
};

export default MemAcaClubInfo;
