const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(function onSuccess1(data) {
    console.log(data);
    throw new Error('Error with data'); // (1)
  })
  .catch(function onError1(error) {
    console.error('onError1', error.message);
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(function onError2(error) {
    console.log('onError2', error.message);
    throw new Error('Server error'); // (2)
  })
  .then(function onSuccess2() {
    console.log('not work');
  })
  .catch(function onError3(error) {
    console.error('onError3', error.message);
  });