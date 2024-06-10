export const delay = time => new Promise((resolve, reject) => 
    setTimeout(() => {
    const result = 'Done';
    resolve(result);
}, time));