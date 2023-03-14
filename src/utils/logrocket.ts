import LogRocket from 'logrocket';

export const initLogRocket = () => {
  if (process.env.NODE_ENV === 'production') {
    LogRocket.init('vuqxpj/uiportifolio');
  }
};