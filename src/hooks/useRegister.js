import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { log, success, error } from "../utils/logs";

const useRegister = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSignUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      fullName: name,
      address: address,
      country: country,
      phone: phone,
      email: email,
      password: password,
    };
    log("register attempt...");
    console.log(data);
    await axios
      .post(`/api/auth/register`, data)
      .then((data) => {
        history.push("/login");
        setIsLoading(false);
        success("new user registered successfully");
      })
      .catch((err) => {
        setEmailError("Este usuario ya existe.");
        setIsLoading(false);
        error(err);
      });
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    country,
    setCountry,
    password,
    setPassword,
    onSignUp,
    error,
    disabled,
    nameError,
    emailError,
    isLoading,
  };
};

export default useRegister;