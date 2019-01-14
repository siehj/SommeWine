
module.exports = {
  shapePreferences: (list) => {
    let result = {
      'type' : [],
      'flavor' : [],
      'Country' : {
        'North America' : [],
        'South America' : [],
        'Europe' : [],
        'Asia' : [],
        'Oceania' : [] 
      }
    };

    list.forEach(item => {
      if(item.category === 'type' || item.category === 'flavor') result[item.category].push(item);
      else {
        result["Country"][item.region].push(item);
      }
    });
    return result;
  }

};