import axios from 'axios';

import { SEARCH_TRACKS } from '../actions/types';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'http://api.musixmatch.com/ws/1.1/';
const API_KEY = `&apikey=${process.env.REACT_APP_MM_KEY}`;