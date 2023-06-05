// context.js
import React, { createContext, useState, useEffect } from 'react';

// Crea el contexto
export const AppContext = createContext();

// Crea el proveedor del contexto
export const AppProvider = ({ children }) => {
  const [step1Data, setStep1Data] = useState({});
  const [step2Data, setStep2Data] = useState({});
  const [person1Data, setPerson1Data] = useState({});
  const [person2Data, setPerson2Data] = useState({});
  const [step3Data, setStep3Data] = useState({});
  const [step4Data, setStep4Data] = useState({});

  useEffect(() => {
    const storedStep1Data = localStorage.getItem('step1Data');
    if (storedStep1Data) {
      setStep1Data(JSON.parse(storedStep1Data));
    }

    const storedPerson1Data = localStorage.getItem('person1Data');
    if (storedPerson1Data) {
      setPerson1Data(JSON.parse(storedPerson1Data));
    }

    const storedPerson2Data = localStorage.getItem('person2Data');
    if (storedPerson2Data) {
      setPerson2Data(JSON.parse(storedPerson2Data));
    }

    const storedStep3Data = localStorage.getItem('step3Data');
    if (storedStep3Data) {
      setStep3Data(JSON.parse(storedStep3Data));
    }
    const storedStep4Data = localStorage.getItem('step3Data');
    if (storedStep4Data) {
      setStep4Data(JSON.parse(storedStep3Data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('step1Data', JSON.stringify(step1Data));
  }, [step1Data]);

  useEffect(() => {
    localStorage.setItem('person1Data', JSON.stringify(person1Data));
  }, [person1Data]);

  useEffect(() => {
    localStorage.setItem('person2Data', JSON.stringify(person2Data));
  }, [person2Data]);

  useEffect(() => {
    localStorage.setItem('step2Data', JSON.stringify(step2Data));
  }, [step2Data]);

  useEffect(() => {
    localStorage.setItem('person2Data', JSON.stringify(person2Data));
  }, [person2Data]);

  useEffect(() => {
    localStorage.setItem('step3Data', JSON.stringify(step3Data));
  }, [step3Data]);

  useEffect(() => {
    localStorage.setItem('step4Data', JSON.stringify(step4Data));
  }, [step4Data]);

  const contextValue = {
    step1Data,
    setStep1Data,
    step2Data,
    setStep2Data,
    person1Data,
    setPerson1Data,
    person2Data,
    setPerson2Data,
    step3Data,
    setStep3Data,
    step4Data,
    setStep4Data,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
