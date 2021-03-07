import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../../Firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      console.log("user provider: ", user)
      this.setState({ user });
      console.log("user next provider: ", this.state)
    });
  };
  
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;