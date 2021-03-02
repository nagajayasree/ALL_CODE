import React from 'react';

function OurApp(){
  return React.createElement('div',null,[
    React.createElement('h1',null,'Hello'),
    // React.createElement('p',null,`The the time is ${new Date().toUTCString()}.`),
    React.createElement('p',null,`The time is ${new Date().toLocaleString()}.`),
    React.createElement('small',null,'Have a nice day!')
  ]);
}

// setInterval(function(){
//   ReactDOM.render(React.createElement(OurApp),document.getElementById('root'))
// },1000);

function Message() {
    return (
      <>
        <h1 className="message">Our Amazing App Header</h1>
        <p>The current time is {new Date().toLocaleString()}.</p>
        <small>Copyright Footer Text</small>
      </>
    )
}

// setInterval(function() {
//     ReactDOM.render(<Message />, document.querySelector("root"))
// }, 1000);
