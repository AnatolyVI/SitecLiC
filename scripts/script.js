"use strict"

// Создаем объект Audio и указываем путь к аудиофайлу
const audio = new Audio('../sounds/Limbus Company - In Hell We Live, Lament (Instrumental).mp3');

let playing = 1
// Функция для воспроизведения аудио
function playAudio() {
    audio.volume = 0.1;  // Устанавливаем громкость на максимум
    audio.play();
}
// Воспроизводим аудио автоматически при загрузке страницы или по какому-то событию
playAudio();