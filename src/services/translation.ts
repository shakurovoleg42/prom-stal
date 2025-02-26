// export const translateText = async (text: string, lang: string): Promise<string> => {
//     try {
//         // Замените API-ключ на значение из защищённого хранилища или переменной среды
//         const apiKey = '632c8bf6-6edd-4221-82fe-bd6ff618cbb3:fx';

//         const response = await fetch("https://api-free.deepl.com/v2/translate", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 "Authorization": `DeepL-Auth-Key ${apiKey}`
//             },
//             body: new URLSearchParams({
//                 text: text,
//                 target_lang: lang,
//             }).toString(),
//         });

//         if (!response.ok) {
//             throw new Error("Ошибка при обращении к API перевода");
//         }

//         const data = await response.json();
//         return data.translations[0].text || text; // Возвращаем перевод или оригинал в случае ошибки
//     } catch (error) {
//         console.error("Ошибка при переводе текста:", error);
//         return text; // Возвращаем оригинальный текст в случае ошибки
//     }
// };
