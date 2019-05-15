import Component from "./components/component";
import Image from "./components/image";
import './styles/styles.less';
import Foto from './images/image-small.png'

document.body.appendChild(Component('Hello World'))
document.body.appendChild(Image(Foto))