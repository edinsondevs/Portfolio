import Typewriter from 'typewriter-effect';

function Description () {

	return (
		<Typewriter
			options={{}}
			onInit={(typewriter) => {
				typewriter
					// .typeString("Hello World!")
					.typeString(
						'<span style="color: white; font-size: 1.3rem; font-weight: normal">Soy Ingeniero de Sistemas y Desarrollador Web. <br> En los ultimos años especializandome en el frontend, construyendo aplicaciones de gran envergadura y relevancia, usando principalmente React y varias de sus librerías nativas.</span>'
					)
					.typeString(
						'<span style="color: white; font-size: 1.3rem; font-weight: normal"><br> Mis principales lenguajes de programación son: <br></span>'
					)
					.typeString(
						'<span style="color: white; font-size: 1.3rem; font-weight: normal"><strong><span style="color: #1189ec"> Javascript, TypeScript, Node, React, entre otros.</span></strong></span>'
					)
					.typeString(
						'<span style="color: white; font-size: 1.3rem; font-weight: normal"><br> Mi campo de interés es la construcción aplicaciones web usando <strong><span style="color: #1189ec ;"> nuevas tecnologías y web modernas. </span></strong></span>'
					)
					.typeString(
						'<span style="color: white; font-size: 1.3rem; font-weight: normal"><br> Siempre que es posible, también aplico mi pasión por el desarrollo de productos con  <strong><span style="color: #1189ec ;">Node.js, MongoDB, Firebase, Next.js </span></strong>.</span>'
					)
					.pauseFor(1000)
					.start();
			}}
		/>
	);
};

export default Description;