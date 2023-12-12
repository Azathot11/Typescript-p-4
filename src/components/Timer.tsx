import {useState,useEffect} from "react";
import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers-context.tsx';


export default function Timer({ name, duration }: TimerProps) {
    const [remainingTime, setRemainingTime] = useState<number>(duration*  1000);


    useEffect(() => {
        if (remainingTime > 0) {
          const timer =   setInterval(() => {
                setRemainingTime(prevState => prevState - 50);

            }, 50);

            return () => {
                clearInterval(timer);
            }
        }

        console.log(remainingTime)
    }, [remainingTime]);
   const  formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime}/></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
