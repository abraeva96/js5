let a = +prompt(" Son kiriting juft va toq sonligini tekshiramiz ")
while (isNaN(a) || a == 0) {
    a = +prompt("Siz notog'ri kiritdingiz, sonni qaytadan kiriting")
}
if (a % 2 == 0) {
    alert("juft son " + a)
} else {
    alert("toq son " + a)
}