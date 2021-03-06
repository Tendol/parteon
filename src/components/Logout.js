import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '608222999770-vj8qlp3omda9dso6242d0q8k86vtk35l.apps.googleusercontent.com';

const Logout = ({status}) => {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
    status("logout")
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

{/*}
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });
*/}
  return (
      <div>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            onFailure={onFailure}
      ></GoogleLogout>
      </div>
  );
}

export default Logout;