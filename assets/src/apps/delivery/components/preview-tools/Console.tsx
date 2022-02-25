import { defaultGlobalEnv, evalScript } from 'adaptivity/scripting';
import React, { useEffect, useState } from 'react';
import { ReactTerminal } from 'react-terminal';

const Console: React.FC<any> = () => {
  const evalExpression = (expression: string) => {
    const result = evalScript(expression, defaultGlobalEnv);
    console.log('result', result);
    return 'ok';
  };

  const commands: any = {
    eval: evalExpression,
  };

  return (
    <div>
      <ReactTerminal showControlBar={false} commands={commands} />
    </div>
  );
};

export default Console;
