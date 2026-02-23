export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  color: "--light-blue" | "--accent";
  textColor: "--base" | "--accent";
  gridClass: string;
  height?: string;
  image?: string;
  imageAlt?: string;
  textWidth?: string;
  imageWidth?: string;
}
