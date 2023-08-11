import {
  EMAILERROR,
  EMAILREQ,
  PASSWORDREQ,
  REGEXERROR,
  MINLENGTH,
  REGEX,
  NAMEERROR,
  SURNAMEERROR,
  USERNAMEERROR,
  USERNAMELENGTH,
  NAMELENGTH,
  SURNAMELENGTH,
  PASSWORDLENGTH,
} from '.';
import { object, string } from 'yup';

export const registerSchema = object({
  username: string().max(10, USERNAMELENGTH).required(USERNAMEERROR),
  first_name: string().max(20, NAMELENGTH).required(NAMEERROR),
  last_name: string().max(20, SURNAMELENGTH).required(SURNAMEERROR),

  email: string().email().required(EMAILREQ),
  password: string()
    .required(PASSWORDREQ)
    .min(8, MINLENGTH)
    .max(20, PASSWORDLENGTH)
    .matches(REGEX, REGEXERROR),
});

export const loginSchema = object({
  email: string().email(EMAILERROR).required(EMAILREQ),
  password: string()
    .required(PASSWORDREQ)
    .min(8, MINLENGTH)
    .max(16, 'En fazla 16 karakter girilmelidir')
    .matches(REGEX, REGEXERROR),
});
