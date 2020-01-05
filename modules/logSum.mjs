import { levelLin } from './levelLin.mjs';
import { levelLog } from './levelLog.mjs';

const reducer = (accumulator, currentValue) => accumulator + levelLin(currentValue);

const logSum = bandLevels => levelLog(bandLevels.reduce(reducer, 0));

export { logSum };
