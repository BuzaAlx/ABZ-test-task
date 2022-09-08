import { validateImgSize } from "../helpers/";

let emailRegEx =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

let phoneRegEx = /^[\+]{0,1}380([0-9]{9})$/;

const nameInputRules = {
  required: "Name is required",
  minLength: {
    value: 2,
    message: "Minimum 2 characters",
  },
  maxLength: {
    value: 60,
    message: "Maximum 60 characters",
  },
};

const emailInputRules = {
  required: "Email is required",
  pattern: {
    value: emailRegEx,
    message: "Invalid email address. Please try again!",
  },
  minLength: {
    value: 2,
    message: "Minimum 2 characters",
  },
  maxLength: {
    value: 100,
    message: "Minimum 100 characters",
  },
};

const phoneInputRules = {
  required: "Phone is required",
  pattern: {
    value: phoneRegEx,
    message: "Phone number is incorect. Please try again!",
  },
};

const FileInputRules = {
  required: "file is required",
  validate: {
    lessThan: (f) =>
      f[0]?.size < 5000000 ||
      "File exceeds maximum allowed upload size of 5MB. Please retry your upload!",
    validateSize: validateImgSize,
    acceptedFormats: (files) =>
      ["image/jpeg", "image/jpg", "image/gif"].includes(files[0]?.type) ||
      "Only JPG of JPEG type is allowed",
  },
};

export { nameInputRules, emailInputRules, phoneInputRules, FileInputRules };
