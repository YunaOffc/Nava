import { getApps, initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import { getDatabase, ref, set, get, remove, update } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let db;
  try {
      const co = getApps().length;
      if (co) {
      db = getDatabase;
      } else {
  const firebaseConfig = {
    apiKey: "AIzaSyAuZVc1lAqJQY2pStcfKK0MrXoPiAp-o4Y",
    authDomain: "dann-871ca.firebaseapp.com",
    databaseURL: "https://dann-871ca-default-rtdb.firebaseio.com",
    projectId: "dann-871ca",
    storageBucket: "dann-871ca.firebasestorage.app",
    messagingSenderId: "266247753707",
    appId: "1:266247753707:web:dbe66fd00ae679a40013ae",
    measurementId: "G-1C45Y0TKPJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app)
  }
  } catch (e) {
      alert("Ada masalah dengan db")
  }
  export function tambahVerif(nomer, nama, kode) {
  const userReference = ref(db, `verif/${nomer}`);
  const userData = { nama, kode };

  try {
     set(userReference, userData);
    alert('Kode berhasil dikirim!')
  } catch (error) {
    console.error("Error saat menambahkan user:", error);
    throw error;
  }
}
export function tambahUser(nomer, nama, birthday, pin, saldo = 0) {
const now = new Date();
const ta = now.getDate();
const bulan = now.getMonth() + 1;
const tahun = now.getFullYear();
let regT = `${tahun}-${bulan}-${ta}`;
  const userReference = ref(db, `users/${nomer}`);
  let rek = `001${nomer}`
  const userData = { nama, rek, birthday, yak, saldo, regT, pin };

  try {
     set(userReference, userData);
    alert('Kode berhasil dikirim!')
  } catch (error) {
    console.error("Error saat menambahkan user:", error);
    throw error;
  }
}
