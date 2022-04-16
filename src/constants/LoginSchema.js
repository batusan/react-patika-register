import * as yup from "yup";

export const LoginSchema = yup.object({
  username: yup.string().required("Kullanıcı alanı zorunludur."),
  email: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz.")
    .required("Eposta alanı zorunludur."),
  password: yup
    .string()
    .typeError("Her karakteri kullanamazsın.")
    .min(8, "Şifreniz 8 karakterden az olamaz.")
    .max(32, "Şifreniz 32 karakterden fazla olamaz.")
    .required("Şifre alanı zorunludur."),
  passwordConfirm: yup
    .string()
    .required("Şifre doğrulama alanı zorunludur.")
    .oneOf(
      [yup.ref("password"), null],
      "Girdiğiniz şifreler uyuşmuyor. Tekrar deneyin."
    ),
  acceptTerms: yup.bool().oneOf([true], "Sözleşmeyi kabul etmelisin."),
});
