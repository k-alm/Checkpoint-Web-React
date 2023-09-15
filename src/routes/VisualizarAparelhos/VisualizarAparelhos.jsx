import { useParams } from "react-router-dom";
import "./VisualizarAparelhos.css"
import { listaAparelhos } from "../../components/listaAparelhos";

export default function VisualizarAparelhos(){
    
    const {id} = useParams();
    
    const aparelhoRecuperado = listaAparelhos.filter(item => item.id == id)

    return (
        <main>
            <h1>Visualizar Aparelhos</h1>
            <div>
                <h1>{aparelhoRecuperado[0].nome}</h1>
                <p>{aparelhoRecuperado[0].desc}</p>
                <img src={aparelhoRecuperado[0].img} alt="Imagem do aparelho" />
            </div>
        </main>
    );
}