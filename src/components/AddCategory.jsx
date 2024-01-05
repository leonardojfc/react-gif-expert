import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSumbit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        
        // onAddCategory(category => [inputValue, ...category]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    } 

    return (
        <form onSubmit={onSumbit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange}
            />
        </form>
    )
}
