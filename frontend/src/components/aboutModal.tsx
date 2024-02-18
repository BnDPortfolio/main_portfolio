import React from 'react';
import '../styles/aboutModal.css';
import AboutSection from './AboutSection';

interface AboutModalProps {
    handleModalClose: (name:string) => void;
    davidClicked: boolean;
    brandonClicked: boolean;
}

const AboutModal:React.FC<AboutModalProps> = ( {davidClicked, brandonClicked, handleModalClose} ) => {
    const isExpanded = davidClicked || brandonClicked;
    let name:string = '';
    if (davidClicked) {
        name = 'David Claphan';
    } 
    if (brandonClicked) {
        name = 'Brandon Arsenault';
    }

    const handleExitButtonClick = () => {
        davidClicked ? handleModalClose('david'):handleModalClose('brandon');
    };

    return (
        <div className={`expandingDiv ${isExpanded ? 'expanded' : ''}`}>
            <button className='exit-button' onClick={handleExitButtonClick}> X </button>
            <AboutSection name={name} />
        </div>
    )
};

export default AboutModal;

