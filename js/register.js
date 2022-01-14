const firebaseConfig = {
    apiKey: "AIzaSyDuw6OYKLkqaIWN4QbcK_6uImzdH1Db2DI",
    authDomain: "ntut-web-f329c.firebaseapp.com",
    projectId: "ntut-web-f329c",
    storageBucket: "ntut-web-f329c.appspot.com",
    messagingSenderId: "212539430060",
    appId: "1:212539430060:web:a6fbf021e2a55b4eca7b09"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
function processData() {
    const email = document.getElementById("registerid").value;
    const password = document.getElementById("registerpasswd").value;
    const password2 = document.getElementById("registerpasswd2").value;
    if(password != password2){
      alert("兩次密碼輸入錯誤！" + "\n請重新註冊");
      window.location.reload();
    }
    //alert("你的帳號是 " + email + "\n密碼是 " + password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        alert("註冊成功" + "\n你的帳號是 " + email + "\n密碼是 " + password);
        self.location.href = "Home.html"; 
    })
      .catch((error) => {
    });
}