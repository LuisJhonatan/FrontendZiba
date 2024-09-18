import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Input from './UI/input';

interface InputNumericProps {
  label?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const InputNumeric: React.FC<InputNumericProps> = ({ label, register, errorMessage }) => {
  // Función para limitar la entrada solo a números
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, ''); // Reemplaza todo lo que no sea un dígito
    e.target.value = newValue; // Modifica el valor en el evento
    register.onChange(e); // Asegura que el método onChange del registro original también se ejecute
  };

  return (
    <div className="relative">
      <Input
        label={label}
        register={{
          ...register,
          onChange: handleInput, // Sobrescribe onChange para filtrar solo números
        }}
        type="text"
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default InputNumeric;
