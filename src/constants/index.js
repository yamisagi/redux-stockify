const EMAILERROR = 'Email doğru formatta değil';
const EMAILREQ = 'Email doldurulması zorunlu';
const PASSWORDREQ = 'Şifre doldurulması zorunlu';
const REGEXERROR =
  'Şifre en az 1 büyük harf, 1 küçük harf ve 1 özel karakter içermelidir.';
const MINLENGTH = 'Şifre en az 8 karakter olmalı';
const REGEX = /^(?=.*[A-Z])(?=.*[!,?{}><%&$#£+-.])(?=.*[a-z]).*$/;
const NAMEERROR = 'İsim doldurulması zorunlu';
const SURNAMEERROR = 'Soyisim doldurulması zorunlu';
const USERNAMEERROR = 'Kullanıcı adı doldurulması zorunlu';
const USERNAMELENGTH = 'Kullanıcı adı en fazla 10 karakter olmalı';
const NAMELENGTH = 'İsim en fazla 20 karakter olmalı';
const SURNAMELENGTH = 'Soyisim en fazla 30 karakter olmalı';
const PASSWORDLENGTH = 'Şifre en fazla 20 karakter olmalı';

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
