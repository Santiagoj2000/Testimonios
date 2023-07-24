import React from 'react';
import '../hojas-de-estilo/Contenedor.css';

export function Testimonio(props){
  return(
		<div className='contenedor-testimonio'>
			<img 
				className='imagen-testimonio'
				src={require(`../Imagenes/${props.imagen}.jpg`)}	
				alt='Fotografia de Emma'
			/>
			<div className='contenedor-descripcion'>
				<p className='nombre-pais'>
					<strong>{props.nombre}</strong> en {props.pais}
				</p>
				<p className='cargo'>
					{props.cargo} en <strong>{props.empresa}</strong>
				</p>
				<p className='texto-testimonio'>
					"{props.testimonio}"
				</p>
			</div>
    </div>
  );	
}

export default Testimonio;
