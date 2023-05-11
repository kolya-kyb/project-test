import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'News',
    link: '/news',
  },
  {
    id: nanoid(),
    text: 'Find Pet',
    link: '/notices',
  },
  {
    id: nanoid(),
    text: 'Our friends',
    link: '/friends',
  },

];

export default items;
