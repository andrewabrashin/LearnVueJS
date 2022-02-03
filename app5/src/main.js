import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/MyInput.vue';
import MyDialog from '@/components/ui/MyDialog.vue';
import MyRadio from '@/components/ui/MyRadio.vue';
import MyRadio2 from '@/components/ui/MyRadio2.vue';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4m_M5w-2_62to3eIMYnma80S4hsl0pow",
  authDomain: "learnvuejsapp.firebaseapp.com",
  databaseURL: "https://learnvuejsapp-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "learnvuejsapp",
  storageBucket: "learnvuejsapp.appspot.com",
  
  messagingSenderId: "271718158509",
  appId: "1:271718158509:web:45fa9958b2a2562c1ff624",
  measurementId: "G-F8FJQVC5KW"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

const path = '/posts';
onValue(ref(db, path), (snapshot) => {
  store.commit('posts/clear');
  const postsObject = snapshot.val();
  for (const [key, value] of Object.entries(postsObject)) {
    store.commit('posts/addPost', value);
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit('user/setUser', user);
  } else {
    store.dispatch('user/logout');
  }
});

const app = createApp(App);
app.use(router);
app.use(store);
app.component('MyInput', MyInput);
app.component('MyDialog', MyDialog);
app.component('MyRadio', MyRadio);
app.component('MyRadio2', MyRadio2);
app.mount('#app')


