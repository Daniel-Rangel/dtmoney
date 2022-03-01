import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction {
    id: Number;
    title: string;
    amount: Number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable (){
    const [transactions , setTransactions] = useState<Transaction[]>([])
    useEffect(()=>{
        api.get('/transactions')
            .then(response => console.log(response.data.transaction))
    }, [])


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr>
                                <td>{transaction.title}</td>
                                <td className="withdrow">- R${transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}
