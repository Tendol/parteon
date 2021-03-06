import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
'608222999770-vj8qlp3omda9dso6242d0q8k86vtk35l.apps.googleusercontent.com';


const Login =({status}) => {

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
        `Logged in successfully welcome ${res.profileObj.name} \n Enjoy the party!! 🥳.`
        );
        refreshTokenSetup(res);
        status('login')
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
        `Failed to login. 😢`
        );
    };

 {/*} const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });
*/}
    return (
        <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
        />
        </div>
    );
}

export default Login;