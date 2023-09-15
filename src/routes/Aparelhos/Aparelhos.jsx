import { listaAparelhos } from "../../components/listaAparelhos"
import "./Aparelhos.css"
import { Link } from "react-router-dom";

export default function Aparelhos(){
    return (
        <main>
            <h1>Aparelhos</h1>
            {listaAparelhos.map(aparelho => (
                <div key={aparelho.id}>
                    <Link to={`/visualizar/aparelhos/${aparelho.id}`}>{aparelho.nome}</Link>
                </div>
            ))}
        </main>
    );
}