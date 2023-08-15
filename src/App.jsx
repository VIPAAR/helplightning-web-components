import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.png';
import ContactsView from './features/contacts/components/ContactsView';
import Login from './features/auth/Login';
import './App.scss';
import { user } from './features/auth/auth';
import i18n from './i18n';

function App() {
  const currentUser = useSelector(user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Helplightning Contacts
        </p>
        { currentUser?.token ?
          <ContactsView
            currentUser={currentUser}
            callContact={console.log}
            callGroup={console.log}
            sendOTUInvitation={console.log}
            showModal={console.log}
            t={i18n.t}
          /> :
          <Login t={i18n.t}/>
        }
      </header>
    </div>
  );
}

export default App;
