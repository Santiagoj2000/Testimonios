
import './App.css';
import Testimonio from './Componentes/Contenedor';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios sobre programacion</h1>
				<Testimonio 
					imagen="programador1"
					nombre="Alberto"
					pais="Noruega"
					cargo="Ingeniero de Software"
					empresa="Appel"
					testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en Internet. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. La programacion cambió mi vida."
					 />

				<Testimonio 
					imagen="programador2"
					nombre="Elizabeth"
					pais="Polonia"
					cargo="Ingeniera de Software"
					empresa="Samsung Group"
					testimonio="La programacion fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
					 />

        <Testimonio 
					imagen="programador3"
					nombre="Sofia"
					pais="Escocia"
					cargo="Ingeniera de Software"
					empresa="Google."
					testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de Udemy fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en Udemy me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Google."
					 />
      </div>
    </div>
  );
}

export default App;
