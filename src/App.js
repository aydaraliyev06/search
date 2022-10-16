import React from 'react';
import Search from './Components/Search';
import UsersContextProvider from './Context/UsersContextProvider';

const App = () => {
  return (
    <>
      <UsersContextProvider>
        <Search/>
      </UsersContextProvider>
    </>
  );
};

export default App;