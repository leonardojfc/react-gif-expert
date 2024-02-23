import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en GifExpertApp', () => {

    const inputValue = "Goku"

    test('debe agregar un h3 si se ingresa un valor', () => { 
        render( <GifExpertApp/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(2);
    });
    
    test('no debe agregar un h3 si se ingresa algún valor anterior', () => { 
        render( <GifExpertApp/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );
        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(2);
    });
})