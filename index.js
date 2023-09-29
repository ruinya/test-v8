import _ from 'lodash';

export default function showInfo(content) {
  const data = content.trim().split('\n').slice(1).map((row) => row.split(',').slice(0));
  // console.log(data);

  // test 1
  console.log(`Coun: ${data.length}`);

  // step 2
  const barberShops = data.map(((shops) => shops[0]));
  const sortBarberShops = _.sortBy(barberShops);

  console.log(`Barbershops: ${(sortBarberShops).join(', ')}`);

  // step 3

  const minRate = _.minBy(data.map((shop) => shop[4]));
  const maxRate = _.maxBy(data.map((shop) => shop[4]));

  console.log(`Ratings: Min: ${minRate} Max: ${maxRate}`);

  // step 4

  const yearsLive = _.maxBy(data, (year) => Number(year[3]));

  const maxLiveYears = yearsLive[0];

  console.log(`Oldest barbershop: ${maxLiveYears}`);
}
