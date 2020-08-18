module.exports = function(environment) {
  let myGlobal = environment === 'production' ? process.env.MY_GLOBAL : 'testing';
 
  return {
    sandboxGlobals: {
      myGlobal
    }
  };
}