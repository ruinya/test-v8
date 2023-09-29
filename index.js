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

  // step 5

  const oldHairdress = data.filter((hairdress) => Number(hairdress[3]) > 5);
  // console.log(oldHairdress);

  // Вычисляем средние цены для каждой старой парикмахерской
  const averagePrices = oldHairdress.map((hairdresser) => {
    const priceRange = hairdresser[1].split('-').map((price) => Number(price.trim()));
    const [minPrice, maxPrice] = priceRange;
    return (minPrice + maxPrice) / 2;
  });

  // Находим наименьшую среднюю цену и соответствующую парикмахерскую
  const minAveragePrice = _.min(averagePrices);
  const bestBarbershop = oldHairdress.find((hairdresser) => {
    const priceRange = hairdresser[1].split('-').map((price) => Number(price.trim()));
    const [minPrice, maxPrice] = priceRange;
    const averagePrice = (minPrice + maxPrice) / 2;
    return averagePrice === minAveragePrice;
  });

  const bestBarberName = bestBarbershop[0];

  console.log(`Best barbershop: ${bestBarberName}`);
}
