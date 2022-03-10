const words = [
    "Hello",
    "Halo",
    "Ola",
    "Ahoy",
    "Pozdrav",
    "Hai",
    "Ola",
    "Salut",
    "Ohayo",
    "Hemwoo"
]

export function generateWord() {
    const random = Math.floor(Math.random() * words.length);
    return words[random]
}