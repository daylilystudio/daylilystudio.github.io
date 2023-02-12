// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getDatabase, ref, onValue, set, push } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfwO4EKrTNr4T5TzdEgCHRJOAGMQtX9uk",
    authDomain: "portfolio-e5a2f.firebaseapp.com",
    databaseURL: "https://portfolio-e5a2f-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "portfolio-e5a2f",
    storageBucket: "portfolio-e5a2f.appspot.com",
    messagingSenderId: "796343837277",
    appId: "1:796343837277:web:bd65cb8453db6266d923b4",
    measurementId: "G-SYNG02HPTX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get a reference to the database service
const db = getDatabase(app);
const starCountRef = ref(db, 'msg');

const vueApp = {
    el: '#app',
    data() {
        return {
            msgData: [],
            msgName: "",
            msgText: "",
            msgColor: "#9B414B",
            msgAlert: "",
            options: myFullpage,
            habit: database.habit,
            experience: database.experience,
            skill: database.skill,
            works: database.works
        }
    },
    methods: {
        writeUserData : function(){
            const newPostRef = push(starCountRef);
            // const newPostKey = newPostRef.key;
            const date = new Date()
            const newPostDate = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
            const postData = {
                date: newPostDate,
                name: this.msgName,
                text: this.msgText,
                color: this.msgColor
            };
            if(!this.msgName || !this.msgText){
                this.msgAlert = "All required !"
                return
            } else if (this.msgName.length>10) {
                this.msgAlert = "Name up to 10 characters"
                return
            }
            set(newPostRef, postData);
            this.msgName = "";
            this.msgText = "";
            this.msgColor = "#9B414B";
            this.msgAlert = "Message Success :-)";
        },
        readData: function () {
            onValue(starCountRef, (snapshot) => {
                this.msgData = []
                snapshot.forEach(item => {
                    this.msgData.unshift( item.val() );
                });
                //留言區swiper
                Window.msgSwiper = new Swiper(".msgSwiper", {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                    freeMode: true,
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                        hide: true,
                    },
                    breakpoints: {
                        500: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                        },
                        768: {
                        slidesPerView: 3.5,
                        spaceBetween: 15,
                        },
                        1025: {
                        slidesPerView: 4.5,
                        spaceBetween: 15,
                        }
                    }
                });
            });
        }
    },
    mounted() {
        this.readData()
    },
    updated() {
        Window.msgSwiper.update()
    },
}
// Vue.createApp(vueApp).mount('#vueApp')
new Vue(vueApp)