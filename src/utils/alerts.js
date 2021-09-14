import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const registeredAlert = () => {
  MySwal.fire({
    title: "Su cuenta ha sido creada con éxito",
    icon: "success",
  });
};

export const errorAlert = () => {
  MySwal.fire({
    title: "No fue posible crear su cuenta",
    icon: "error",
  });
};

export const nostockAlert = () => {
  MySwal.fire({
    title: 'Oops...',
    text: "No hay suficiente stock!",
    icon: "error",
    width: '20%',
  });
};