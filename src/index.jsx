import { Component } from 'react';
import React from 'react';
import { render } from 'react-dom';

const style = {
  container: {
    position: 'absolute',
    background: 'rgba(37,150,231,0.9)',
    pieBackground: 'rgba(37,150,231,0.9)',
    height: '100%',
    width: '100%'
  },

  content: {
    display: 'block',
    backgroundImage: 'url(//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/howto-startup/howto-header-bg-2.original.png)',
    background: 'rgba(37,150,231,0.9)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    behavior: 'url(//d9hhrg4mnvzow.cloudfront.net/backgroundsize.min.htc)',
    borderStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: 0
  },

  logoText: {
    display: 'block',
    background: 'rgba(255,255,255,0)',
    pieBackground: 'rgba(255,255,255,0)',
    borderStyle: 'none',
    left: 0,
    top: 126,
    zIndex: 21,
    width: '100%',
    height: 84,
    position: 'absolute'
  },

  logoTextP: {
    fontSize: 80,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'lato'
  },

  imgDiv: {
    display: 'block',
    background: 'rgba(255,255,255,0)',
    left: 208,
    top: 185,
    zIndex: 3,
    position: 'absolute',
    text: 'center'
  },

  img: {
    display: 'inline-block'
  }
}

class Labx extends Component {
  render () {
    return (
      <div style={style.container}>
        <div style={style.content}>
          <div style={style.logoText}>
            <p style={style.logoTextP}>
              LabX
            </p>
          </div>
          <div style={style.imgDiv}>
              
          </div>
        </div>
      </div>
    )
  }
}

render(<Labx />, document.getElementById('labx'));
console.log('by @duyetdev');
