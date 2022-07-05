import { useState } from "react";

const useForm = (inicialForm = {}) => {
  const [formState, setFormState] = useState(inicialForm);

  // username: '',
  //     email: '',
  //     password:''

  // const {username, email, password} = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(inicialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    setFormState,
  };
};

export default useForm;
