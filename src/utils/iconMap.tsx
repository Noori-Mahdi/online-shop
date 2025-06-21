// utils/iconMap.ts

import { FaHeadphonesAlt } from 'react-icons/fa';
import { MdPhoneIphone, MdLaptopChromebook } from 'react-icons/md';
import { IoWatch, IoCameraOutline, IoGameControllerOutline } from 'react-icons/io5';
import { GiPc } from 'react-icons/gi';
import type { IconType } from 'react-icons'; 

const iconMap: Record<string, IconType> = {
  iphone: MdPhoneIphone,
  smartwatch: IoWatch,
  macbook: MdLaptopChromebook,
  pc: GiPc,
  camera: IoCameraOutline,
  headphone: FaHeadphonesAlt,
  gaming: IoGameControllerOutline,
};

export function getIconByTitle(title: string) {
  const IconComponent = iconMap[title.toLowerCase()];
  return IconComponent && <IconComponent />;
}

