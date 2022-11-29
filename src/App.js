
import React from 'react';
import classes from './App.module.css';
import Layout from './components/Layout'
// import Navbar from './components/Navbar'
// import UI from './components/ui'

function App() {
  return (
    <div >
     <h1 className={classes.app}>List Of College Filters</h1>
          <Layout/>
        {/* <Navbar/>
        <UI/>  */}
    </div>
  );
}

export default App;
