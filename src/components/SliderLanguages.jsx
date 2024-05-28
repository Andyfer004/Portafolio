import React from 'react';
import './Slider.css';  // Asegúrate de tener un archivo Slider.css con los estilos correspondientes

const images = [
    'Angular.png', 'C++.png', 'C.webp', 'Docker.jpeg', 'Nodejs.png', 'Postgresql.png',
    'Mongodb.png', 'Python.png', 'React.jpeg', 'Kotlin.png', 'Aws.png', 'Java.jpeg', 'Css.png', 'Javascript.jpeg',
    'Html.jpeg'
];

export const  SliderLanguages = () => {
    return (
        <div className="slider">
            <div className="slide-track">
                {images.map((img, index) => (
                    <div className="slide" key={index}>
                        <img src={`src/assets/img/${img}`} alt={img.split('.')[0]} />
                    </div>
                ))}
                {images.map((img, index) => (  // Repite para la animación continua
                    <div className="slide" key={`second-${index}`}>
                        <img src={`src/assets/img/${img}`} alt={img.split('.')[0]} />
                    </div>
                ))}
            </div>
        </div>
    );
}

