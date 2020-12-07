import Vue from 'vue';
import { money } from './money';
import { formatDate } from './date';

Vue.filter('money', money);
Vue.filter('formatDate', formatDate);
