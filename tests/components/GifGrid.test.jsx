import { render, screen } from "@testing-library/react"
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });
    
    test('debe de mostrar items cuando se cargan las imágenes', () => { 

        const gifs = [
            {
                id: 1,
                title: 'Goku',
                url: 'https://goku.jpg'
            },
            {
                id: 2,
                title: 'Saitama',
                url: 'https://saitama.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
})