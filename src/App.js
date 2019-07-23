import React,{ Component } from 'react';
import './bootstrap/css/bootstrap.min.css'
import './App.css'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab';
import{LIST_VIEW,CHART_VIEW} from './utility'

import MonthPicker from './components/MonthPicker'



const items = [
  {
    "id":1,
    "title": "去云南旅行",
    "price":200,
    "date":"2018-09-10",
    "category": {
      "id":"1",
      "name": '旅行',
      "type":'outcome',
      "iconName":'ios-plane'
    }
  },
  {
    "id":2,
    "title": "去昆明旅行",
    "price":400,
    "date":"2018-09-10",
    "category": {
      "id":"1",
      "name": '旅行',
      "type":'outcome',
      "iconName":'ios-plane'
    }
  },
]

function App() {
  return (
    <div>
      {/* <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ViewTab
        activeTab={CHART_VIEW}
        onTabChange={(view)=>{console.log(view)}}
      />
      <PriceList 
      items={items}
      onModifyItem={(item=>{alert(item.id)})}
      onDeleteItem={(item)=>{alert(item.id)}}
      /> */}
      <MonthPicker
        year={2018}
        month={5}
        onChange={(year,month)=>{console.log(year,month)}}
      />
    </div>
  );
}

export default App;
