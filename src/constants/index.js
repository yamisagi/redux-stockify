const EMAILERROR = 'Email is not valid';
const EMAILREQ = 'Email is required';
const PASSWORDREQ = 'Password is required';
const REGEXERROR =
  'Password must contain at least one uppercase letter, one lowercase letter and one special character';
const MINLENGTH = 'Password must be at least 8 characters long';
const REGEX = /^(?=.*[A-Z])(?=.*[!,?{}><%&$#£+-.])(?=.*[a-z]).*$/;
const NAMEERROR = 'Name is required';
const SURNAMEERROR = 'Surname is required';
const USERNAMEERROR = 'Username is required';
const USERNAMELENGTH = 'Username must be max 10 characters long';
const NAMELENGTH = 'Name must be max 20 characters long';
const SURNAMELENGTH = 'Surname must be max 20 characters long';
const PASSWORDLENGTH = 'Password must be max 20 characters long';

export {
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
};
