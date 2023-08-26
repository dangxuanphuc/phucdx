import React from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import AppMusic from '../../utils/AppMusic';
import { Element, scroller } from 'react-scroll';
import './NewYear.css';
import AppString from '../../utils/AppString';
import { MAX_SCREEN_MOBILE_WIDTH } from '../../utils/AppOtherValues';

export default class NewYear extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
      screenSize: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
      startAnimTransitions: false,
    };
    this.music = AppMusic.getRandom();
  }

  componentDidMount() {
    document.title = 'Happy New Year 2024';

    window.addEventListener('resize', () =>
      this.setState({
        screenSize: {
          height: window.innerHeight,
          width: window.innerWidth,
        },
      })
    );
  }

  render() {
    const { showContent } = this.state;

    return (
      <div>
        <audio ref={(ref) => (this.audioPlayer = ref)} loop>
          <source type='audio/mp3' src={this.music} />
        </audio>
        {showContent ? (
          <Element className='main-view'>
            <Element name='firstpage'>
              <FirstPage />
            </Element>
            <Element
              name='secondpage'
              className='gift-wrapper'
              style={{
                backgroundSize: `${this.state.screenSize.width}px auto`,
              }}
            >
              <SecondPage />
            </Element>
          </Element>
        ) : (
          this._renderClickToPlay()
        )}
      </div>
    );
  }

  _renderClickToPlay() {
    const { screenSize, startAnimTransitions } = this.state;
    const maxHeight =
      screenSize.width < MAX_SCREEN_MOBILE_WIDTH ? '35%' : '10%';
    const maxWidth = screenSize.width < MAX_SCREEN_MOBILE_WIDTH ? '35%' : '10%';
    return (
      <div
        className={`tap-to-open-main-view ${
          startAnimTransitions ? 'tap-to-open-main-view-with-anim' : ''
        }`}
      >
        <img
          alt='click-to-play'
          onClick={this._onClickToPlay}
          style={{ maxHeight, maxWidth, marginRight: 10, cursor: 'pointer' }}
          src={require('../../assets/images/new_year/animal_of_year.png')}
        />
        <span className='click-to-play'>{AppString.get('click_to_play')}</span>
      </div>
    );
  }

  _onClickToPlay = () => {
    this.setState({ startAnimTransitions: true }, () => {
      setTimeout(() => this.setState({ showContent: true }), 700);
      this.audioPlayer.play();
    });
    setTimeout(
      () =>
        scroller.scrollTo('secondpage', {
          duration: 1000,
          smooth: 'easeInOutQuart',
        }),
      5000
    );
  };
}
