import moment from 'moment';
const responses = [
  'Hi, How can I help you?',
  moment().format('mmmm do yyyy'),
  moment().format('h:mm:ss:a'),
  'https://www.google.com',
  'Thanks for contacting me',
  'I cant get you'
];

export const analyze = (text) => {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return getRandomItem(responses);
};
