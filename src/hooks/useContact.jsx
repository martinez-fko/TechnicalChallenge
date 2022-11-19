import { useRef, useState } from 'react';

const INITAL_STATE_CONTACT = {
  email: '',
  phone: '',
};

const useContact = () => {
  const [contact, setContact] = useState(INITAL_STATE_CONTACT);
  const contactRef = useRef(null);
  const inputTextDay = useRef(null);

  const changeContact = (newValue) => {
    setContact(newValue);
  };

  const submitFormContact = (e, setSteps, handleScrollToStart) => {
    e.preventDefault();
    setSteps(3);
    localStorage.setItem('contact', JSON.stringify(contact));
    setTimeout(() => {
      handleScrollToStart();
    }, 100);
  };

  const handleScrollToContact = () => {
    if (contactRef) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleFocusInputEmail = () => {
    if(inputTextDay){
      inputTextDay.current.focus();
    }
  };

  return {
    contact,
    changeContact,
    submitFormContact,
    contactRef,
    handleScrollToContact,
    handleFocusInputEmail,
    inputTextDay
  };
};

export default useContact;
