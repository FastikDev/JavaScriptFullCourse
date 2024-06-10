const getRandomNumber = (from, to) =>
    from + Math.random() * (to - from);

const request = url => new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000, 3000);
    
    setTimeout(() => {
        resolve({
            userData: {
                name: 'TOM',
                age: 17,
                source: url,
            }
        });
    }, randomDelay);
});

const servers = [
    'https://server.com/us',
    'https://server.com/eu',
    'https://server.com/au',
    
]

export const getUserASAP = userId => {
    const usersUrls = servers
        .map(serverUrl => `${serverUrl}/users/${userId}`);

    const requests = usersUrls 
        .map(userUrl => request(userUrl))

    return Promise.race(requests)
};



 