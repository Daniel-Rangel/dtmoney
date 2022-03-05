import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModal(true) 
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModal(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModal} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      
      <GlobalStyle />

      
    </TransactionsProvider>
      
  );
}


