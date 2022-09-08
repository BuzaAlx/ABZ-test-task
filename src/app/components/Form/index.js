import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CheckBoxList from "../CheckBoxList";
import FormInput from "../forms/FormInput";
import File from "../forms/File";
import Button from "../shared/Button";
import {
  nameInputRules,
  emailInputRules,
  phoneInputRules,
  FileInputRules,
} from "../../../validate-rules";
import { createData, getData } from "../../../services/api/api";
import successImage from "../../../assets/success-image.svg";
import "./styles.sass";

export default function Form({ setIsFormSent, isFormSent, setUsers }) {
  const [position_id, setPosition_id] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      photo: null,
    },
  });

  const onSubmit = async (data) => {
    let mappedData = { ...data, photo: data.photo[0], position_id };
    const { token } = await getData("token");
    let response = await createData("users", mappedData, token);

    if (response.success) {
      const { users } = await getData("users", null, {
        page: 1,
        count: 6,
      });
      setUsers(users);
      setIsFormSent(true);
    }
  };

  if (isFormSent) {
    return <img className="success-img" src={successImage} alt="success" />;
  }

  return (
    <form
      id="form"
      className="form"
      noValidate
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
      }}
    >
      <FormInput
        label={"Name"}
        isFilled={!!watch("name")}
        errors={errors.name}
        register={register("name", nameInputRules)}
        placeholder="Your name"
        type="text"
        id="name"
        name="name"
      />
      <FormInput
        label={"Email"}
        isFilled={!!watch("email")}
        errors={errors.email}
        register={register("email", emailInputRules)}
        placeholder="Email"
        type="email"
        id="email"
        name="email"
      />
      <FormInput
        label={"Phone"}
        isFilled={!!watch("phone")}
        errors={errors.phone}
        register={register("phone", phoneInputRules)}
        placeholder="Phone"
        type="tel"
        id="phone"
        name="phone"
        tip="+38 (0XX) XXX - XX - XX"
      />
      <CheckBoxList position={position_id} setPosition={setPosition_id} />
      <File
        errors={errors.photo}
        watch={watch}
        register={register("photo", FileInputRules)}
      />
      <Button
        disabled={Object.keys(dirtyFields).length < 4}
        typeOf="button"
        type="submit"
        title="Sign Up"
      />
    </form>
  );
}
