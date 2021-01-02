import { Interface } from "readline"

export interface IFlash {
    question: string;
    answer: string;
    show: boolean;
    id: number;
    remembered?: 'correct' | 'incorrect';
  }