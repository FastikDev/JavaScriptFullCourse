export const asyncCalcularor = number => new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Initial value: ${number}`);
    resolve(number);
  }, 500);
})
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
        }, 500)
    }))
    .then(value => {
        const result = value *2;
        console.log(`Doubled value: ${result}`);
    });
