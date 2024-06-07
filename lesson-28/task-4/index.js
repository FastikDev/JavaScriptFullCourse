export const compose = (...funcs) => value => {
    return funcs.reduce((acc, func) => func(acc), value);
}