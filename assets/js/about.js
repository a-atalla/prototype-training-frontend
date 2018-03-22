const sayHello = () => {
  $('#mngJobs').click(() =>{
    console.log('Managerial Jobs')
  });
  $('#devJobs').click(() =>{
    console.log('Development Jobs')
  });
  $('#allJobs').click(() =>{
    console.log('All Jobs')
  });
};

export default sayHello;
