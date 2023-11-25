import { useEffect, useRef, useState } from 'react';
import { Complex, getSpirograph } from './spirograph';

export type Prop = {
  enable?: boolean;
  onChangeEnable?: (enable?: boolean) => void;
};

export const SpirographCanvas = (prop: Prop) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const [frameCount, setFrameCount] = useState(0);
  const [dgree, setDgree] = useState(0);
  const [first, setFirst] = useState<Complex>(undefined);

  useEffect(() => {
    const f = async () => {
      if (!prop.enable) {
        return;
      }

      if (frameCount % 3 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1));
      }

      const c = getSpirograph(100, 54, 44, dgree);
      if (!first) {
        setFirst(c);
      }

      const canvas = canvasRef.current;
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'red';
      ctx.fillRect(200 + c.a, 200 + c.b, 1, 1);

      setDgree(dgree + 1 > 1000000 ? 0 : dgree + 1);
      setFrameCount(frameCount + 1 > 1000000 ? 0 : frameCount + 1);
    };
    f();
  }, [frameCount, prop.enable]);

  return <canvas ref={canvasRef} width={500} height={500}></canvas>;
};
