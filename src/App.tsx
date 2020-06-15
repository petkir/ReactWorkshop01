import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
import FluentSample from './Demos/05FluentUI';
import SampleChildren from './Demos/06SampleChildren';
import SampleDialog from './Demos/07SampleDialog';


function alertme(x: string|number) {
  alert(x);
}
*/

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        {/*
        <RndComponent />
        <RndIntComponent />
        <RndIntParamComponent timeoutms={700} />
        <Wrapper />
      */}
  {/*
      <SampleChildren>
        <div>myText</div>
      </SampleChildren>
      <FluentSample></FluentSample>
      <SampleDialog
        title={"What?"}
        message={"Delete?"}
        index={1}
        confirmLabel={"do it"}
        cancelLabel={"no"} >
        {
          confirm => (
            <button type='button'
              className='ToolbarButton CanvasControlToolbar-item'
              onClick={confirm(alertme)} >
              My Btn
            </button>
          )}
      </SampleDialog>
          */}
    </div>
  );

}

export default App;
