export default (str: string) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
