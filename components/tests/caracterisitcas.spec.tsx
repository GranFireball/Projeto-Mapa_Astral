import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Caracteristicas from "../caracteristicas";

describe('Caracteristicas', () => {
  it('renderiza as características de cada signo', () => {
    render(<Caracteristicas/>);
    const caracteristicas = screen.getByTestId("caracteristicas");
    expect(caracteristicas).toBeInTheDocument();
  })

  it('verifica se tem doze signos', () => {
    const { getAllByTestId} = render(<Caracteristicas/>);
    const caracteristica = getAllByTestId("caracteristica");
    expect(caracteristica).toHaveLength(12);
  })

})
