import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';
import AppProvider from './src/context/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}


