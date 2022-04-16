import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

function RegisterForm() {
  const LoginSchema = yup.object({
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

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      surname: "",
      username: "",
      password: "",
      passwordConfirm: "",
      acceptTerms: false,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form id="registerForm" className="flex" onSubmit={formik.handleSubmit}>
        <div className="double-input flex">
          <div className="registerGroup split">
            <label htmlFor="firstName" className="font">
              İSİM
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="İsmini gir"
              className="font"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="form-error font">{formik.errors.firstname}</div>
            ) : null}
          </div>
          <div className="registerGroup split">
            <label htmlFor="surname" className="font">
              SOYİSİM
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="Soyismini gir"
              className="font"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className="form-error font">{formik.errors.surname}</div>
            ) : null}
          </div>
        </div>
        <div className="registerGroup">
          <label htmlFor="email" className="font required">
            EPOSTA
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-posta adresini gir"
            className="font"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="form-error font">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="registerGroup">
          <label htmlFor="username" className="font required">
            KULLANICI ADI
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="font"
            placeholder="Kullanıcı adını gir"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="form-error font">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="registerGroup">
          <label htmlFor="password" className="font required">
            ŞİFRE
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Şifreni gir"
            className="font"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="form-error font">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="registerGroup">
          <label htmlFor="password" className="font required">
            ŞİFRENİ TEKRAR GİR
          </label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="Şifreni doğrula"
            className="font"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <div className="form-error font">
              {formik.errors.passwordConfirm}
            </div>
          ) : null}
        </div>
        <div className="registerGroup">
          <div class="round">
            <input
              type="checkbox"
              name="acceptTerms"
              id="checkbox"
              onChange={formik.handleChange}
              value={formik.values.acceptTerms}
            />
            <label for="checkbox"></label>
          </div>
          <label
            htmlFor="acceptTerms"
            id="form-checkbox-label"
            className="font"
          >
            Sözleşmeyi kabul ediyorum
          </label>
          {formik.touched.passwordConfirm && formik.errors.acceptTerms ? (
            <div className="form-error font">{formik.errors.acceptTerms}</div>
          ) : null}
        </div>

        <button type="submit" id="registerButton">
          KAYIT OL
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
