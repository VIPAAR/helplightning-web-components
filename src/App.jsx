/* eslint-disable */
import React from 'react';
import './App.scss';
import HelpLightningClient from './core/HelpLightningClient';
import Contacts from './core/features/contacts';
import i18n from './i18n';

function App() {
  const apiKey = window.environment?.API_KEY || '';
  const host = window.environment?.GALDR_URL || '';

  const client = new HelpLightningClient(
    host,
    apiKey,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJHaGF6YWwiLCJleHAiOjE3MDY2NjQ5MTUsImlhdCI6MTcwNjY2NDczNSwiaXNzIjoiR2hhemFsIiwianRpIjoiZDZhYTMxNWEtN2M4NS00OGM1LWIzNmEtMmFhNjg1MDY0NDBiIiwibWV0YSI6e30sIm5iZiI6MTcwNjY2NDczNCwicGVtIjp7InVzZXIiOjg2NDU0NzMwNDYwMzI4MDc3MjZ9LCJzdWIiOiJVc2VyOjE3OTI2IiwidHlwIjoiYWNjZXNzIiwidmVyIjoiMTAwIn0.YjX0gv8wepyFsNBE-oaeHblUacGgaedhIdtJMmZntGg',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJHaGF6YWwiLCJleHAiOjE3MzgyMDA3MzUsImlhdCI6MTcwNjY2NDczNSwiaXNzIjoiR2hhemFsIiwianRpIjoiZmVhOGNjZWQtZGZmMC00YzgyLThmNzEtOWIyOWVkZGYyNzA0IiwibmJmIjoxNzA2NjY0NzM0LCJwZW0iOnsidXNlcl9yZWZyZXNoIjo4NjQ1NDczMDQ2MDMyODA3NzI2fSwic3ViIjoiVXNlclJlZnJlc2g6MTc5MjYiLCJ0eXAiOiJhY2Nlc3MiLCJ2ZXIiOiIxMDAifQ.rXcnAZ9nZlKsrYqL71JrWcWW0vOS8f2FYrz78yJtVh4',
    console.log,
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Helplightning Components
        </p>
          <Contacts
            client={client}
            callContact={console.log}
            callGroup={console.log}
            onInviteUserClick={console.log}
            showModal={console.log}
            t={i18n.t}
          />
      </header>
    </div>
  );
}

export default App;
