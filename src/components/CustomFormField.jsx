import ReactDatePicker from "react-datepicker";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Checkbox } from "./ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { capitalise } from "@/lib/utils";
import { useState } from "react";

export let FormFieldType;
(function (FormFieldType) {
  FormFieldType["INPUT"] = "input";
  FormFieldType["PASSWORD"] = "password";
  FormFieldType["TEXTAREA"] = "textarea";
  FormFieldType["PHONE_INPUT"] = "phoneInput";
  FormFieldType["CHECKBOX"] = "checkbox";
  FormFieldType["DATE_PICKER"] = "datePicker";
  FormFieldType["SELECT"] = "select";
  FormFieldType["SKELETON"] = "skeleton";
})(FormFieldType || (FormFieldType = {}));

const RenderInput = ({ field, props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="border-dark-500 bg-dark-400 flex rounded-md border">
          {props.iconSrc && (
            <img
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="NG"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="border-dark-500 bg-dark-400 flex rounded-md border">
          <img
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="user"
            className="ml-2"
          />
          <FormControl>
            <ReactDatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger className="shad-select-trigger">
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent className="shad-select-content">
            {props.selectOptions?.length > 0 ? (
              props.selectOptions.map((option) => (
                <SelectItem className="text-2xl" key={option} value={option}>
                  {capitalise(option)}
                </SelectItem>
              ))
            ) : (
              <>
                {
                  <SelectGroup>
                    {props.selectGroupOptions.map((optionGroup) => (
                      <div key={optionGroup.department}>
                        <SelectLabel className="mt-6 text-2xl">
                          {capitalise(optionGroup.department)}
                        </SelectLabel>

                        {optionGroup.designations.map((option) => (
                          <SelectItem
                            className="text-2xl"
                            value={option}
                            key={option}
                          >
                            {capitalise(option)}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectGroup>
                }
              </>
            )}
          </SelectContent>
        </Select>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    case FormFieldType.PASSWORD:
      return (
        <div className="border-dark-500 bg-dark-400 flex items-center rounded-md border">
          {props.iconSrc && (
            <img
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              type={isPasswordVisible ? "text" : "password"}
              placeholder={
                isPasswordVisible ? "123abc<>?.!" : props.placeholder
              }
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPasswordVisible((cur) => !cur);
            }}
            className="cursor-pointer p-6 opacity-60"
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
      );
    default:
      return null;
  }
};

const CustomFormField = (props) => {
  const { control, name, label, className } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex-1 ${className}`}>
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-input-label">{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="shad-error text-lg" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
