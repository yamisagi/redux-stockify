const EMAILERROR = 'Email doğru formatta değil';
const EMAILREQ = 'Email doldurulması zorunlu';
const PASSWORDREQ = 'Şifre doldurulması zorunlu';
const REGEXERROR =
  'Şifre en az 1 büyük harf, 1 küçük harf ve 1 özel karakter içermelidir.';
const MINLENGTH = 'Şifre en az 8 karakter olmalı';
const REGEX = /^(?=.*[A-Z])(?=.*[.,!?-])(?=.*[a-z]).*$/;

export {
    EMAILERROR,
    EMAILREQ,
    PASSWORDREQ,
    REGEXERROR,
    MINLENGTH,
    REGEX
}
