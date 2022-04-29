const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
  }

  encrypt(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    message = message.toUpperCase();
    key = key.toUpperCase();    
    let ind_key = 0;
    if (
      arguments.length < 2 ||
      arguments[0] == undefined ||
      arguments[0] == null 
       
    ) {
      throw new Error('Incorrect arguments!');
    }
    let str = "";
    for (let i = 0; i < message.length; i++) {
      if (/\d/.test(message[i]) == true) {
        str += message[i];
      } else if (/\W/.test(message[i]) == false) {
        let numInd =
          alphabet.indexOf(message[i]) + alphabet.indexOf(key[ind_key]);
        ind_key++;
        if (ind_key > key.length - 1) {
          ind_key = 0;
        }
        if (numInd > alphabet.length - 1) {
          numInd = numInd - alphabet.length;
        }
        str += alphabet.charAt(numInd);
      } else if (/\W/.test(message[i]) == true) {
        str += message[i];
      }
    }
    return str;
  }

  decrypt(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; ///'XVPNECTXKTFU'
    message = message.toUpperCase();
    key = key.toUpperCase();
    let ind_key = 0;
    if (
      arguments.length < 2 ||
      arguments[0] == undefined ||
      arguments[0] == null 
      
    ) {
      throw new Error('Incorrect arguments!');
    } 
    let str = "";
    for (let i = 0; i < message.length; i++) {
      if (/\d/.test(message[i]) == true) {
        str += message[i];
      } else if (/\W/.test(message[i]) == false) {
        let numInd =
          alphabet.indexOf(message[i]) - alphabet.indexOf(key[ind_key]);
        ind_key++;
        if (ind_key > key.length - 1) {
          ind_key = 0;
        }
        if (numInd < 0) {
          numInd = alphabet.length + numInd;
        }
        str += alphabet.charAt(numInd);
      } else if (/\W/.test(message[i]) == true) {
        str += message[i];
      }
    }
    return str;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

/* const directMachine = new VigenereCipheringMachine();
directMachine.encrypt('alphonse')  */
