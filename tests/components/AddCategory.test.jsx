import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {

    
    const inputValue = 'Saitama'

    test('debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {}}/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue} } );

        expect( input.value ).toBe('Saitama')
    });
    
    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );

        expect( input.value ).toBeFalsy();

        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });
    
    test('no debe de llamar onNewCategory si el input está vacío', () => { 
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        
    });
    
    test('no debe de llamar onNewCategory si el input tiene menos de 1 caracter', () => { 
        
        const onNewCategory = jest.fn();
        const falsyInput = 'a';

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: falsyInput} } );
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        
    });
})