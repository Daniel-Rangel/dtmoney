import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable (){
    useEffect(()=>{
        api.get('/transactions')
            .then(response => console.log(response))
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
                    <tr>
                        <td>Desenvolver web</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/02/2022</td>
                    </tr>
                    <tr>
                        <td>Raupas</td>
                        <td className="withdrow">- R$800</td>
                        <td>Loja</td>
                        <td>04/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
