function rankCalculate(n, gender) {

  let rank = ['老大', '老二', '老三', '老四', '老五', '老六', '老七', '老八', '老九', '老十', '老十一', '老十二', '老十三', '老十四', '老十五', '老十六', '老十七', '老十八', '老十九', '老二十']

  return n > 20 ? rank : !n || n < 2 ? gender === 0 ? ['独子'] : ['独女'] : rank.slice(0, n)
}

function shuffle(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  let index = -1
  const lastIndex = length - 1
  const result = copyArray(array)
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return result
}

function copyArray(source, array) {
  let index = -1
  const length = source.length

  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

function getRandomArrayElements(arr, count) { //随机选出数组中指定个数的元素
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}


function guid() { //生成uuid
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function createTreeTitle(n) {
  let data = [{
      level: 1,
      img: '',
      title: '相亲相爱',
      desc: ''
    }, {
      level: 2,
      img: '',
      title: '人丁兴旺',
      desc: ''
    }, {
      level: 3,
      img: '',
      title: '子孙满堂',
      desc: ''
    }, {
      level: 4,
      img: '',
      title: '家大业大',
      desc: ''
    }, {
      level: 5,
      img: '',
      title: '名门望族',
      desc: ''
    }],
    level = null;
  if (n < 20 || n == 20) {
    level = 1
  } else
  if ((n > 20 && n < 40) || n == 40) {
    level = 2
  } else if ((n > 40 && n < 60) || n == 60) {
    level = 3
  } else if ((n > 60 && n < 80) || n == 80) {
    level = 4
  } else if (n > 80) {
    level = 5
  }

  return { ...data[level - 1],
    next: level == 5 ? '' : data[level].title
  }
}

export {
  rankCalculate,
  shuffle,
  getRandomArrayElements,
  guid,
  createTreeTitle
}
