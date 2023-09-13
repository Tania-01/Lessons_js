// - створити блок,
//         - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const originalBlock = document.querySelector('.wrap');
document.body.appendChild(originalBlock.cloneNode(true));