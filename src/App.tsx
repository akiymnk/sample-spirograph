import { useState } from 'react';
import { SpirographCanvas } from './spirograph/SpirographCanvas';

export const App = () => {
  const [enable, setEnable] = useState(false);
  return (
    <div>
      <p>test</p>
      <div>
        <button type="button" onClick={(e) => setEnable(!enable)}>
          Start, Stop
        </button>
      </div>
      <div>
        <SpirographCanvas
          enable={enable}
          onChangeEnable={(e) => setEnable(e)}
        />
      </div>
    </div>
  );
};
