// serviceWorkerRegistration.js
export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('SW зарегистрирован: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW ошибка регистрации: ', registrationError);
          });
      });
    }
  }
  