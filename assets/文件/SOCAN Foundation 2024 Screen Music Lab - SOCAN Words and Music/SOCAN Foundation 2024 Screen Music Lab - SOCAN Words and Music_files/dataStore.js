const dataTags = document.getElementsByTagName('data');

Array.from(dataTags)
.forEach(ele => {
  const key = 'data-socan-key';
  if(ele.getAttribute(key)){
    dataKey = ele.getAttribute(key);
    dataValue = ele.getAttribute('data-value');
    dataType = ele.getAttribute('data-type');
    //   console.log(dataKey, dataValue);
    if(dataType === 'json'){
        window[`${dataKey}`] = JSON.parse(`${dataValue}`);
    } else {
        window[`${dataKey}`] = `${dataValue}`;
    }
  }

});