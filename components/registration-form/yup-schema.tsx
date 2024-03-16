import { object, string } from "yup";

import { isPossiblePhoneNumber, isValidNumber } from "libphonenumber-js";

// User validation schema using Yup
const userSchema = (t: any) => {
  let schema = object({
    name: string().required("Required").min(3, t("name-input-invalid-message")),
    // @ts-ignore
    phone: string(t("mobile-input-invalid-message"))
      .required("Required")
      .test("valid-phone", t("mobile-input-invalid-message"), function (value) {
        if (!value) {
          return true;
        }
        // Validate the phone number using libphonenumber-js
        let countryCode = this.parent.phone_country?.toUpperCase();
        return (
          isValidNumber(value, countryCode) &&
          isPossiblePhoneNumber(value, countryCode)
        );
      }),
    email: string()
      .required("Required")
      .email(t("email-input-invalid-message")),
    password: string()
      .required("Required")
      .test(function (password) {
        // Check if the password meets all the requirements
        const hasCapitalLetter = /[A-Z]/.test(password);
        const hasSmallLetter = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[@#$%&]/.test(password);
        const isLengthValid = password?.length >= 8;

        if (!password) {
          return true;
        }
        return (
          hasCapitalLetter &&
          hasSmallLetter &&
          hasDigit &&
          hasSpecialChar &&
          isLengthValid
        );
      }),
    password_confirmation: string()
      .required("Required")
      .test(
        "password-match",
        t("confirm-password-input-invalid-message"),
        function (value) {
          if (!value) {
            return true;
          }
          return value === this.parent.password;
        }
      ),
  });

  return schema;
};

export default userSchema;
