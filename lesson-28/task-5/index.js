export const shmoment = date => {
    let newDate = new Date(date);

    return {
        add(key, value) {
            switch (key) {
                case 'years':
                    newDate.setFullYear(newDate.getFullYear() + value);
                    break;
                case 'months':
                    newDate.setMonth(newDate.getMonth() + value);
                    break;
                case 'days':
                    newDate.setDate(newDate.getDate() + value);
                    break;
                case 'hours':
                    newDate.setHours(newDate.getHours() + value);
                    break;
                case 'minutes':
                    newDate.setMinutes(newDate.getMinutes() + value);
                    break;
                case 'seconds':
                    newDate.setSeconds(newDate.getSeconds() + value);
                    break;
                case 'milliseconds':
                    newDate.setMilliseconds(newDate.getMilliseconds() + value);
                    break;
            }
            return this;
        },
        subtract(key, value) {
            switch (key) {
                case 'years':
                    newDate.setFullYear(newDate.getFullYear() - value);
                    break;
                case 'months':
                    newDate.setMonth(newDate.getMonth() - value);
                    break;
                case 'days':
                    newDate.setDate(newDate.getDate() - value);
                    break;
                case 'hours':
                    newDate.setHours(newDate.getHours() - value);
                    break;
                case 'minutes':
                    newDate.setMinutes(newDate.getMinutes() - value);
                    break;
                case 'seconds':
                    newDate.setSeconds(newDate.getSeconds() - value);
                    break;
                case 'milliseconds':
                    newDate.setMilliseconds(newDate.getMilliseconds() - value);
                    break;
            }
            return this;
        },
        result() {
            return newDate;
        },
    };
};

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('days', 8)
    .subtract('years', 1)
    .result();
console.log(result);
