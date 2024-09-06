import ClassRoom from './0-classroom';

export default function initialize() {
  const clases = [];
  clases.push(new ClassRoom(19));
  clases.push(new ClassRoom(20));
  clases.push(new ClassRoom(34));

  return clases;
}
