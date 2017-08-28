import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout'
import ParentComponent from './ParentComponent'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}
