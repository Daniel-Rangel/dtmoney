import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { useState } from "react";


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
    <>
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModal} 
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar</h2>
      </Modal>
      <GlobalStyle />

      
    </>
      
  );
}


