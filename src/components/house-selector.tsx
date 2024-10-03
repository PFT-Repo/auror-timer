import React from 'react';
import useSound from 'use-sound';
import styles from '../styles/HouseSelector.module.css';

// Importa los sonidos
import gryffindorSound from '../assets/sounds/gryffindor.mp3';
import slytherinSound from '../assets/sounds/slytherin.mp3';
import ravenclawSound from '../assets/sounds/ravenclaw.mp3';
import hufflepuffSound from '../assets/sounds/hufflepuff.mp3';
import House from '../models/house-interface';
import HouseSelectorProps from '../models/house-selector-props-interface';

const houses: Record<string, House> = {
    gryffindor: {
      name: 'Gryffindor',
      sound: gryffindorSound,
    },
    slytherin: {
      name: 'Slytherin',
      sound: slytherinSound,
    },
    ravenclaw: {
      name: 'Ravenclaw',
      sound: ravenclawSound,
    },
    hufflepuff: {
      name: 'Hufflepuff',
      sound: hufflepuffSound,
    },
  };
  
  const HouseSelector: React.FC<HouseSelectorProps> = ({ onSelectHouse }) => {
    const [playGryffindor] = useSound(gryffindorSound);
    const [playSlytherin] = useSound(slytherinSound);
    const [playRavenclaw] = useSound(ravenclawSound);
    const [playHufflepuff] = useSound(hufflepuffSound);
  
    houses.gryffindor.play = playGryffindor;
    houses.slytherin.play = playSlytherin;
    houses.ravenclaw.play = playRavenclaw;
    houses.hufflepuff.play = playHufflepuff;
  
    const handleHouseSelection = (houseKey: string) => {
      houses[houseKey].play?.();
      onSelectHouse(houseKey);
    };
  
    return (
      <div>
        <h1 className={styles.title}>Selecciona una casa de Hogwarts</h1>
        <div>
          {Object.keys(houses).map((houseKey) => (
            <button
              key={houseKey}
              onClick={() => handleHouseSelection(houseKey)}
              className={`${styles.button} ${styles[houseKey]}`}
            >
              {houses[houseKey].name}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default HouseSelector;