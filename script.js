function waitForElementToDisplay(selector, time) {
      var element = document.querySelector(selector);
        if(element) {
          element.parentElement.removeChild(element);
          element = document.querySelector('div.tp-backdrop.tp-active');
	  if (element)
              element.parentElement.removeChild(element);
          return;
        }
        else {
            console.log('Removedor de laprensa!')
            setTimeout(function() {
                waitForElementToDisplay(selector, time);
            }, time);
        }
    }
waitForElementToDisplay('div.tp-modal',2000);
