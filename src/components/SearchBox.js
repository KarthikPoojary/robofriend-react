import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className='pa3'>
			<input 
			type='text' 
			placeholder ='Search Here...' 
			className ='tc f4 bg-light-green br3 pa3 ba bw2 b--green shadow-5' 
			onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;