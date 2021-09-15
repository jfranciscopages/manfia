import { useState } from "react";
import axios from "axios";
import { log, success, error } from "../utils/logs";

const useEditCategory = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [sex, setSex] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      sex: sex,
    };
    console.log(data);
    log("editando categoría...");
    await axios
      .put(`/api/categories/editCategory`, data)
      .then((data) => {
        console.log(data);
        success("la categoría se editó correctamente");
      })
      .catch((err) => {
        console.log(err);
        error(err);
      });
  };

  return {
    onSubmit,
    id,
    setId,
    name,
    setName,
    sex,
    setSex,
  };
};

export default useEditCategory;
