import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                        iconeAtivo="/icones/home.png" 
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >Início</ItemNavegacao>
            
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-vistas.png" 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        ativo
                    >Mais vistas</ItemNavegacao>

                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-curtidas.png" 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        ativo
                    >Mais curtidas</ItemNavegacao>

                    <ItemNavegacao 
                        iconeAtivo="/icones/novas.png" 
                        iconeInativo="/icones/novas-inativo.png"
                        ativo
                    >Novas</ItemNavegacao>

                    <ItemNavegacao 
                        iconeAtivo="/icones/surpreendame.png" 
                        iconeInativo="/icones/surpreendame-inativo.png"
                        ativo
                    >Supreenda-me</ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;