const names = ['sabbir', 'ahmed', 'shawon'];
  const fullNames = names.map(function(name) {
    return `${name} ahmed`;
  });

  const fullNames2 = names.map((name)=> {
    return `${name} ahmed`;
  });

  const fullNames3 = names.map(name=> {
    return `${name} ahmed`;
  });

  
  const fullNames4 = names.map(name => `${name} ahmed`);

  console.log(fullNames4);


  const fullNames5 = names.map(() => `cool ahmed`);
  const sayMyName = (name) => {
    alert(`Hello ${name}!`)
  }
  sayMyName('Sabbir');
