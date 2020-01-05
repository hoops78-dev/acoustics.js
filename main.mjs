import { levelLin } from './modules/levelLin.mjs';
import { levelLog } from './modules/levelLog.mjs';
import { logSum } from './modules/logSum.mjs';
import { aWeighting } from './modules/aWeighting.mjs';

console.log(levelLin(100));
console.log(levelLog(10000000000));

const bandLevels = [100, 100, 100, 100];
console.log(logSum(bandLevels));

const bandFreq = 1000;
console.log(aWeighting(bandFreq));