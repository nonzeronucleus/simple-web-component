import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


var proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function (a) {
            this.mountPoint = this
                .attachShadow({ mode: 'open' })

            this.render();
        }
    },
    attributeChangedCallback:{
        value: function (a) {
            this.render();
        }
    },
    onClick: {
        value: function(clicks) {
            const evt=new CustomEvent('newclick', {
                clicks,
            });
            this.dispatchEvent(evt);
        }
    },
    render: {
        value: function (a) {
            console.log(this)
            const name=this.getAttribute('name')
            // const onClick=this.getAttribute('onclick')
            ReactDOM.render(
                <App name={name} onClick={this.onClick.bind(this)} />, this.mountPoint);
        }
    }
});

console.log(proto);

document.registerElement('test-comp', {prototype: proto});

// import React from 'react';
// import ReactWebComponent from 'react-web-component';

// class MyComponent extends React.Component {
//   render() {
//     return <div>Hello World!</div>;
//   }
// }

// class AnotherComponent extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}!</div>;
//   }
// }

// ReactWebComponent.create(<MyComponent />, 'my-component');
// ReactWebComponent.create(<AnotherComponent name="Mars" />, 'another-component');

