import _ from 'lodash';

const showInfo = (content) => {
  const data = content.split('\n').slice(1).map((row) => row.split(',').map((el) => el.trim()));

  console.log(`Count: ${data.length}`);

  const barbershops = data.map((row) => row[0]);
  console.log(`Barbershops: ${_.sortBy(barbershops).join(', ')}`);

  const ratings = data.map((row) => parseFloat(row[4]));
  console.log(`Ratings: Min: ${_.min(ratings)} Max: ${_.max(ratings)}`);
};

export default showInfo;
