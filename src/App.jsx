import { useState } from 'react';
import './App.css';
import Birthday from './components/Birthday';
import Contact from './components/Contact';
import Header from './components/Header';
import Name from './components/Name';
import Result from './components/Result';
import Start from './components/Start';
import useBirthday from './hooks/useBirthday';
import useContact from './hooks/useContact';
import useName from './hooks/useName';
import useResult from './hooks/useResult';
import useStart from './hooks/useStart';

function App() {
  const [steps, setSteps] = useState(0);
  const { submitFormName } = useName();
  const {
    birthdayRef,
    inputNextBirthday,
    submitFormBirthday,
    handleScrollToBirthday,
    handleFocusInputDay,
  } = useBirthday();
  const {
    contact,
    contactRef,
    changeContact,
    handleScrollToContact,
    submitFormContact,
    handleFocusInputEmail,
    inputTextDay,
  } = useContact();
  const { handleStart, startRef, handleScrollToStart } = useStart();
  const { resultRef, handleScrollToResult } = useResult();

  return (
    <div className='App'>
      {/*  componente que muestra el titulo del formulario */}
      <Header />

      {/* componente que recibe el numero de paso y los ref para pasar al siguiente formulario */}
      <Name
        setSteps={setSteps}
        submitFormName={submitFormName}
        handleScrollToBirthday={handleScrollToBirthday}
        handleFocusInputDay={handleFocusInputDay}
      />
      {steps > 0 && (
        // Si se valido pasar al siguiente formularo se muestra el componente
        // Recibe el estado para el siguiente paso y los ref para pasar dinamicamente al otro formulario
        <Birthday
          setSteps={setSteps}
          birthdayRef={birthdayRef}
          inputNextBirthday={inputNextBirthday}
          handleScrollToContact={handleScrollToContact}
          handleFocusInputEmail={handleFocusInputEmail}
          submitFormBirthday={submitFormBirthday}
        />
      )}
      {steps > 1 && (
        // si pasa al siguiente paso muestra el formulario de contacto
        <Contact
          changeContact={changeContact}
          contact={contact}
          contactRef={contactRef}
          submitFormContact={(e) =>
            submitFormContact(e, setSteps, handleScrollToStart)
          }
          inputTextDay={inputTextDay}
        />
      )}
      {steps > 2 && (
        // El penultimo paso es confirmar
        <Start
          handleStart={() => handleStart(setSteps, handleScrollToResult)}
          startRef={startRef}
        />
      )}
      {/* el ultimo paso es mostrar los datos */}
      {steps > 3 && <Result resultRef={resultRef} />}
    </div>
  );
}

export default App;
