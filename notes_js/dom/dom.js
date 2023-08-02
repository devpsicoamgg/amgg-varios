let texto = `Mi Vivis del alma Quisiera tenerte siempre conmigo, pero no puedo, así que hoy prometo llevarte siempre en mi corazón, 
  los buenos momentos, los malos momentos, todo, siempre estarán en mi corazón”`;
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
