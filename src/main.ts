import Vue from 'vue';

//vue-custom-element & IE11 polyfill
import VueCustomElement from 'vue-custom-element';
import 'document-register-element/build/document-register-element';
Vue.use(VueCustomElement);

//Weld
import './styles/weld.scss';
Vue.config.ignoredElements = [ 'weld-icon', 'weld-tabs', 'weld-tab' ];

//Create custom element
import ConnectPlusPatientInfo from './ConnectPlusPatientInfo.vue';
Vue.customElement('connect-plus-patient-info', (new ConnectPlusPatientInfo().$options));
