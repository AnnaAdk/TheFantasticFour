import React from 'react';

function AccountCreation() {
  return (
    <>
        <form action="CreateAccount.php" method="post" encType="application/x-www-form-urlencoded">
            <table>
                <tbody>
                    <tr><td>CWID:</td><td><input type="int" name="CWID" ></input><br /></td></tr>
                    <tr><td>Password:</td><td><input type="password" name="Password" ></input><br /></td></tr>
                    <tr><td>Non-School Email:</td><td><input type="text" name="Email" ></input><br /></td></tr>
                    <tr><td>Cell Phone:</td><td><input type="text" name="Phone" ></input><br /></td></tr>
                    <tr><td>FirstName:</td><td><input type="text" name="Fname" ></input><br /></td></tr>
                    <tr><td>LastName:</td><td><input type="text" name="Lname" ></input><br /></td></tr>
                    <tr><td>Middle initial:</td><td><input type="char" name="Mini" ></input><br /></td></tr>
                </tbody>
            </table>
            <input type="submit" />
            <input type="reset" />
        </form>
    </>
  );
};

export default AccountCreation;
