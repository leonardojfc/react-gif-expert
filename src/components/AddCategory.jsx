import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
        <form onSubmit={onSumbit} aria-label='form'>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
