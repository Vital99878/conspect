const str = 'word 1 **** with another';
const onlyCh = str.replace(/[^a-z0-9]/gi, '');
export { onlyCh };
