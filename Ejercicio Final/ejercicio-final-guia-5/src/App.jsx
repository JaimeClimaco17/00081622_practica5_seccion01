import Avatar from './Avatar.jsx';
import './App.css';
import curieImagen from './maria.jpg';
import KatsImagen from './katsuko.jpg';
import messiImagen from './messi.jpg';

function CientificoCard({ cientifico }) { 
  return (
    <div className="cientifico-card">
      
      <div className="avatar-container">
        {cientifico.usarAvatar ? (
          <Avatar 
            person={{ 
              name: cientifico.nombre, 
              imageId: cientifico.imageId 
            }} 
            size={100} 
          />
        ) : (
          <img 
            className="avatar"
            src={cientifico.imagen}
            alt={cientifico.nombre}
            width={100}
            height={100}
          />
        )}
        
      </div>
      <div className="info-container">
        <h2>{cientifico.nombre}</h2>
        <p><strong>•Profesión:</strong> {cientifico.profesion}</p>
        <p><strong>•Descubrió:</strong> {cientifico.descubrimiento}</p>
        <p><strong>•Premios:</strong> {cientifico.premios} {cientifico.premiosDetalle.map((premio, index) => (
              <li key={index}>{premio}</li>
            ))}</p>
      </div>
    </div>
  );
}

export default function App() {
  const cientificos = [ 
    {
      id: 1,
      nombre: "Maria Skłodowska-Curie",  
      profesion: "Física y química",     
      premios: 4,
      descubrimiento: "Polonio (elemento químico)",  
      imagen: curieImagen,
      premiosDetalle: [
        "Premio Nobel de Física", 
        "Premio Nobel de Química", 
        "Medalla Davy", 
        "Medalla Matteucci"
      ]
    },
    {
      id: 2,
      nombre: "Katsuko Saruhashi",
      profesion: "Geoquímica",
      premios: 2,
      descubrió: "Un método para medir el dióxido de carbono en el agua de mar",
      imagen: KatsImagen,
      premiosDetalle: [
        "Premio Miyake de geoquímica", 
        "Premio Tanaka"
      ]
    },
    {
      id: 3,
      nombre: "Lionel Messi",
      profesion: "Un genio en lo que hace",
      premios: 45,
      descubrió: "Como enamorar al fuvol, el mejor en lo que hace",
      imagen: messiImagen,
      premiosDetalle: [
        "Premio Miyake de geoquímica", 
        "10 LaLiga",
        "7 Copas del Rey",
        "8 Supercopas de España",
        "4 Champions Leagues",
        "3 Supercopas de Europa",
        "3 Club World Cup"
      ] 
    }
  ];

  return (
    <div className="App">
        <h2 className='app-header'>Científicos Notables</h2>
      <main className="cientificos-container">
        {cientificos.map(cientifico => (
          <CientificoCard key={cientifico.id} cientifico={cientifico} />
        ))}
      </main>
    </div>
  );
}