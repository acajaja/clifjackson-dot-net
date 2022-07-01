import HTML5AudioPlayer from './HTML5AudioPlayer';
import Debugger from './Debugger';

window.onload = (e) => {
    const d = new Debugger();
    const playa = new HTML5AudioPlayer('my-boom-box', d);
    playa.init();
}
