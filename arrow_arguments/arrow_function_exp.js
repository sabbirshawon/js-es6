const race = '100m Run';
const winners = ['Sabbir Ahmed', 'Md Nurul Islam', 'Olid Hasan'];
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
const ages = [12,22,25,60,2,29,35,62,34];
const old = ages.filter(age => age >= 20);
console.log(old);
