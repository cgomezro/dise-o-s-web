export const parseBackendErrors = (errors) => {
  if (errors && errors?.data?.message && Array.isArray(errors?.data?.message)) {
    return errors.data?.message[0]["messages"];
  }
  if (errors && errors?.data?.message) {
    return errors.data?.message;
  }
  return "Error! Something went wrong.";
};

export default parseBackendErrors;
