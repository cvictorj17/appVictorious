import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { UserAuthContextProvider } from "./context/UserAuthContext";

import Routes from './router';

export default function App() {
  return (
    <>
      <UserAuthContextProvider>
        <StatusBar style='light' backgroundColor='#000' translucent={true} />
        <Routes/>
      </UserAuthContextProvider>
    </>
  );
}

