{
    const name = 'Sabbir';
    console.log(name);
}

for(let i = 1; i<=10; i++)
{
    console.log(i);
    setTimeout(function(){
        console.log('The number is '+i);
    },1000)
}
