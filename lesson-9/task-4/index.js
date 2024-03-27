function addPropertyV1(userData, userId) {
// put your code here
userData. id = userId;
return userData;
}
function addPropertyV2 (userData, userid) {
return Object.assign(userData, {id: userId});
}
function addPropertyV3 (userData, userid) {
return Object.assign({}, userData, {id: userId});
｝
function addPropertyV4(userData, userld)  {
return {...userData, id: userId};
}