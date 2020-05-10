import React from 'react';
import Alien from '../../../assets/avatar/alien.svg';

class SectionSell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    const mascot = document.querySelector('.mascot');
    const eye = mascot.querySelector('.eye');

    document.addEventListener('mousemove', e => {
      const { x, y } = this.state;

      const windowX = (e.clientX * 100) / window.innerWidth;
      const windowY = (e.clientY * 100) / window.innerHeight;
      if (windowX >= 40 && windowX <= 80) {
        this.setState({
          x: -25 + (windowX * 50) / 100,
        });
      }
      if (windowY >= 20 && windowY <= 80) {
        this.setState({
          y: -25 + (windowY * 50) / 100,
        });
      }
      eye.style.transform = `translate(${x}px,${y}px)`;
    });
  }

  render() {
    const { className } = this.props;
    return (
      <>
        <Alien className={`mascot ${className}`} />
      </>
    );
  }
}

export default SectionSell;
