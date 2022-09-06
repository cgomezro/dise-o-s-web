import React from "react";
import { Controller } from "react-hook-form";
import { InputLabel, Select, FormControl, FormHelperText } from "@mui/material";

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  rules,
  errors,
  hint,
  leanName, // required for dynamic forms (generated inside jsx map loops),
  ...props
}) => {
  const labelId = `${leanName ? leanName : name}-label`;
  return (
    <FormControl
      {...props}
      error={errors?.[leanName ? leanName : name] && true}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={label}>
            {children}
          </Select>
        }
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
      />
      {errors?.[leanName ? leanName : name] && (
        <FormHelperText>
          {errors?.[leanName ? leanName : name]?.message}
        </FormHelperText>
      )}

      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
};
export default ReactHookFormSelect;
