import React, { useContext, useEffect, useRef, useState } from 'react';
import css from './ButtonDiscuss.module.css';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../components/LanguageSelector/translations.json';
import translationsInput from '../../../components/LanguageSelector/translationsInput.json';
import sprite from '../../../assets/sprite.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const ButtonDiscuss = () => {
  
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  const { selectedLanguage } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(buttonRef.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: 'center center',
        end: 'bottom ',
        scrub: 0.5,
        toggleActions: 'play none none none',
      },
    });
  },[])

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleFileChange = e => {
    setSelectedFile(e.target.files[0]);
  };
  

  return (
    <>
      <div className={css.wrapper} onClick={handleButtonClick} ref={buttonRef}>
        <div className={`${css.btn} ${css.box}`}>
          <span className={css.buttonSpan}>
            {translations[selectedLanguage].ButtonDiscuss}
          </span>
        </div>
      </div>

      {showModal && (
        <div className={css.modal}>
          <div className={css.modalContent} ref={modalRef}>
            <div className={css.blokTitle}>
              <h2 className="h2">
                {translations[selectedLanguage].ButtonDiscuss}
              </h2>
            </div>
            <form action="">
              <div className={css.formSuccess}>
                <div className={css.validationField}>
                  <input
                    type="text"
                    placeholder={
                      translationsInput[selectedLanguage].placeholderName
                    }
                  />
                  <div className={css.emphasis}></div>
                </div>
                <div className={css.validationField}>
                  <input
                    type="text"
                    placeholder={
                      translationsInput[selectedLanguage].placeholderTel
                    }
                  />
                  <div className={css.emphasis}></div>
                </div>
                <div className={css.validationField}>
                  <input
                    type="text"
                    placeholder={
                      translationsInput[selectedLanguage].placeholderEmail
                    }
                  />
                  <div className={css.emphasis}></div>
                </div>
                <div className={css.validationField}>
                  <label htmlFor="fileInput" className={css.fileInputLabel}>
                    <input
                      type="file"
                      id="fileInput"
                      className={css.fileInput}
                      onChange={handleFileChange}
                    />
                    <span className={css.formSpan}>
                      {translationsInput[selectedLanguage].inputFile}
                    </span>
                    <span className={css.attachSpan}>
                      {selectedFile ? (
                        <>{selectedFile.name}</>
                      ) : (
                        <>
                          {translationsInput[selectedLanguage].attachFile}
                          <svg className={css.attach}>
                            <use href={sprite + '#attach'}></use>
                          </svg>
                        </>
                      )}
                    </span>
                  </label>
                </div>
              </div>
            </form>
            <div className={css.wrapper}>
              <div className={`${css.btn} ${css.box}`}>
                <span className={css.buttonSpan}>
                  {translationsInput[selectedLanguage].buttonForm}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonDiscuss;
