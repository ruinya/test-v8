import _ from 'lodash';

export default function showInfo(content) {

    const data = content.trim().split('\n').slice(1).map((row) => row.split(',').slice(0));;
    // console.log(data);
    
    // test 1
    console.log(`Coun: ${data.length}`);
}
