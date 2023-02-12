import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

const onPlay = function (e) {
  localStorage.setItem(KEY, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
