import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models:{
    transaction : Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freelancer de web',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id:2,
          title: 'Aluguel',
          type: 'withdrow',
          category: 'Casa',
          amount: 400,
          createdAt: new Date('2021-02-20 10:00:00')
        }
      ] 
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions' , (schema , request) => {
      const data = JSON.parse(request.requestBody)

      console.log(data)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

