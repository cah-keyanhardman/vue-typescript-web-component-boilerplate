import Vue from 'vue';

//vue-custom-element & IE11 polyfill
import VueCustomElement from 'vue-custom-element';
import 'document-register-element/build/document-register-element';
Vue.use(VueCustomElement);

//Styles
import './styles/global.scss';

//Create custom element
import MyWebComponent from '@/MyWebComponent.vue';
Vue.customElement('my-web-component', (new MyWebComponent().$options));
