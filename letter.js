const text = `
Mahh  Humiii,
on this special day of urs, I js wanna let u know From the moment u came into my life, everything started feeling lighterr, softer, and a little bit more magical even tho i dont believe in magic 😭
uuu r the first person I want to text when smth good happens and the only person I need when everything feels heavy 😔 ur text makes my worst days feel survivable frrr I want more latenytee talks,
more stupid jokes nd a lottttt cringyyy stufffff 😋, And thanks for readinggg this shyttt that i wrote 😭😭😭 I LOVEEEEEEE UUH SOMUCH and u gonna see ts in every slide hehehehehehehheheeee Aurr kuchh kahu to Meri zindagi mei aane ke liye bahot shukriya 💋💓😘 allah ka jitna shukr adah kru kamm hai bacchawww 😭🤚🏻 Thanks ke aap mujhe itna pyaar krte ho merii itni care krte ho mera itna khayal rakhte ho 💘🥹🧸 I'm sooooo soooo soooo lucky bacchawww ke mere paas tumho 🥹💘 aur jab aaj aapka day hai to chlo milkr isko special bnate hai ke ye life time memory ki tarah hamari life ka beautiful part banjaye bacchawww 💋🥹
Happy Birthday, my bbyyyyy💖
`;

let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 40);
    }
}

typeText();


function continueNext() {
    window.location.href = "cake.html"; // change later if needed
}
 