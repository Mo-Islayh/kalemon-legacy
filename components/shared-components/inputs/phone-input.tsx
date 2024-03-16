import React, { useState, useEffect } from "react";
import { JO, SA } from "country-flag-icons/react/3x2";
import classNames from "classnames";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTranslation from "next-translate/useTranslation";

const PhoneInput = ({ formik, hideInvalideMessage }: any) => {
  // const

  const { t } = useTranslation("login");

  const { values, errors, touched, handleBlur, handleChange, setFieldValue } =
    formik;
  const isInvalidInput =
    errors.phone !== "Required" && errors.phone && touched.phone;

  // eslint-disable-next-line react/jsx-key
  const countries: any = {
    JO: {
      countryCode: "+962",
      flag: (
        <JO
          title="Jordan"
          className="h-5 w-10 focus:border-primary-k-navey focus:outline-none"
        />
      ),
    },
    SA: {
      countryCode: "+966",
      flag: (
        <SA
          title="Saudi Arabia"
          className="h-5 w-10 focus:border-primary-k-navey focus:outline-none"
        />
      ),
    },
  };

  // State
  const [country, setCountry] = useState("JO");

  //   Effects adds the phone contry code to formik values
  useEffect(() => {
    setFieldValue("phone_country", country);
  }, [country, setFieldValue, values]);

  //   to validate the number when change the country and the user already inserted the number
  useEffect(() => {
    formik.validateForm();
  }, [values.phone_country]);

  //   to prevent character
  const handlePhoneInputChange = (e: any) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      handleChange(e);
    }
  };

  const handleCountryChange = (countryCode: any) => {
    setCountry(countryCode);
  };

  return (
    <>
      <div className="relative flex w-full  items-center justify-end">
        <Input
          className={classNames(
            "k-font-regular size-18px h-[49px] rounded-[5px] border border-solid !bg-primary-k-white pb-2 pl-2 pr-[13px] pt-[7px] focus:!border focus:!border-primary-k-navey focus:!outline-none",
            {
              " !border-secondary-candy-red-err !bg-secondary-candy-fill-err text-secondary-candy-red-err":
                isInvalidInput,
              "!border-secondary-k-gray-tab": !isInvalidInput,
            },
          )}
          data-testid="phone-input"
          type="text"
          name="phone"
          placeholder={t("mobile-input-placeholder")}
          onBlur={handleBlur}
          onChange={handlePhoneInputChange}
          value={values.phone}
        />
        <div className="!absolute z-10 flex h-5 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link"> {countries[country].flag}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {Object.entries(countries).map((ele: any, index) => {
                return (
                  <React.Fragment key={index}>
                    <DropdownMenuItem
                      defaultValue={index}
                      className="flex items-center justify-between  gap-2 px-2 focus:border-primary-k-navey focus:outline-none"
                      onClick={() => handleCountryChange(ele[0])}
                    >
                      <p className="flex">
                        {ele[1].flag}
                        <label className="k-font-regular size-16px mx-2 cursor-pointer whitespace-nowrap">
                          {t(`${ele[0]}`)}
                        </label>
                      </p>
                      <p className="m-2 ">{ele[1].countryCode}</p>
                    </DropdownMenuItem>
                    {index !== Object.entries(countries).length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                  </React.Fragment>
                );
              })}
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {isInvalidInput && !hideInvalideMessage && (
        <p
          data-testid="phone-input-invalid-message"
          className="k-font-regular leading-30 size-16px my-2 h-[30px] font-normal text-secondary-candy-red-err"
        >
          {errors.phone}
        </p>
      )}
    </>
  );
};

export default PhoneInput;
