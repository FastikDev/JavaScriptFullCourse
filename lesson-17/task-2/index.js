'use strict';

export const callbackPrompt = {
  // put your code here
  message: 'Tell me your number',
  showPrompt() {
    prompt(this.message);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
