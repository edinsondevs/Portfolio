
import React from 'react'
import image1 from './buho.jpg';
import image2 from './Perro.jpg';
import Atropos from 'atropos/react';
import "atropos/css";


export const Imagen = () => {
  return (
		<Atropos  >
			<img
				className=''
				src='https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg'
				alt=''
			/>
			<img
				
				src={image1}
				alt=''
			/>
			{/* <img
				data-atropos-offset='0'
				src={image2}
				alt=''
			/> */}
			{/* <img
				data-atropos-offset='2'
				src={image3}
				alt=''
			/>
			<img
				data-atropos-offset='3'
				src={nan}
				alt=''
			/> */}
		</Atropos>
  );
}
