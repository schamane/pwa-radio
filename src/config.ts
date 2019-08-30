import { RadioModel } from './models/RadioModel';

const RadioList: RadioModel[] = [
  {
    name: 'Львівська хвиля',
    description: 'Радіо "Львівська хвиля"',
    stream: 'http://onair.lviv.fm:8000/lviv.fm'
  },
  {
    name: 'Radio "Subasio"',
    description: 'Радіо Subasio',
    stream: 'https://icy.unitedradio.it/Subasio.mp3'
  }
];

export interface ConfigType {
  radios: RadioModel[];
}

export const CONFIG: ConfigType = {
  radios: RadioList
};
