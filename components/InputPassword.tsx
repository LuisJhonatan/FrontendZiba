import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Input from "./UI/input";
import { Label } from "./UI/label";

interface InputPasswordProps {
  label?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  register,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <div>
        <Label>contraseña</Label>

        <div className="relative">
          <Input
            register={register}
            type={showPassword ? "text" : "password"}
            errorMessage={errorMessage}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center mr-3 text-sm text-gray-600"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
