import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Pruebas en <GifGridItem/>', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('debe de hacer match con el snapshot', () => { 
        const { container } = render(<GifGridItem title={ title } url={ url }/>);

        expect(container).toMatchSnapshot;
    })
    
    test('debe de mostrar la imagen con el url y el ALT indicado', () => { 
        render(<GifGridItem title={ title } url={ url }/>);
        
        // expect(screen.getByRole('img').src).toBe(url);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
    
    test('debe de mostrar el título en el component', () => { 
        render(<GifGridItem title={ title } url={ url }/>);
        
        expect(screen.getByText(title)).toBeTruthy();
    })

 })