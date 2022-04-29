const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

 //chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain()

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '(  )') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.length || position < -1 || typeof position == NaN) {
      this.chain = [];      
      throw new NotImplementedError(`You can't remove incorrect link!`);
    } else {
    this.chain.splice(position - 1);   
  }
    return this;  
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.join("~~");
  },
};

module.exports = {
  chainMaker,
};
