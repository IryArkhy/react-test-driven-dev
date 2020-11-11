// eslint-disable-next-line no-unused-vars
import requestAnimationFrame from './tempPolyfills';
import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });