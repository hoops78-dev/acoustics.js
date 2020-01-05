const RAfTerms0 = bandFreq => Math.pow(12194, 2) * Math.pow(bandFreq, 4);
const RAfTerms1 = bandFreq => Math.pow(bandFreq, 2) + Math.pow(20.6, 2);
const RAfTerms2 = bandFreq => Math.pow(bandFreq, 2) + Math.pow(107.7, 2);
const RAFTerms3 = bandFreq => Math.pow(bandFreq, 2) + Math.pow(737.9, 2);
const RAFTerms4 = bandFreq => Math.pow(bandFreq, 2) + Math.pow(12194, 2);

const RAf = bandFreq => RAfTerms0(bandFreq) / (RAfTerms1(bandFreq) * (Math.sqrt(RAfTerms2(bandFreq) * RAFTerms3(bandFreq) * RAFTerms4(bandFreq))));

const Af = bandFreq => (20 * Math.log10(RAf(bandFreq))) - (20 * Math.log10(RAf(1000)));

const aWeighting = (bandFreq) => Af(bandFreq);

export { aWeighting };
