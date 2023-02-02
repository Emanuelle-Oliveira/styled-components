import styled from "styled-components";

/**
 * O styled components cria a classe automaticamente
 * e seta o children conforme foi chamado na classe pai
 */

const Titulo = styled.h1`
  color: ${({theme}) => theme.text};
  padding: 25px 0;
`

/*const Titulo = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
};*/
export default Titulo;
