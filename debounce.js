function logger() {
  console.log(new Date().toString());
}

function emulateUserEvet() {
  let interval = setInterval(logger, 100);

  setTimeout(function () {
    clearInterval(interval);
  }, 2000);
}

// emulateUserEvet();

// ** Debouncing ** //
function debounceFunc(fn, wait) {
  let timeout;
  let debounced = () => {
    let args = arguments,
      that = this;
    let later = () => {
      fn.call(that, args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
  return debounced;
}

let debouncedLogger = debounceFunc(logger, 500);

function emulateDebouncedUserEvet() {
  let interval = setInterval(debouncedLogger, 100);
  setTimeout(function () {
    clearInterval(interval);
  }, 2000);
}
emulateDebouncedUserEvet();
