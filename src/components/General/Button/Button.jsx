import React from 'react'

const Button = () => {
  return (
    <div>
      <div className={css.buttonSend}>
        <span>{translationsInput[selectedLanguage].buttonForm}</span>
      </div>
    </div>
  );
}

export default Button