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
  const ID = document.getElementById("loginid").value;
  const passwd = document.getElementById("loginpasswd").value;
  //alert("你的帳號是 " + ID + "\n密碼是 " + passwd);
  firebase.auth().signInWithEmailAndPassword(ID, passwd)
  .then((userCredential) => {
    var user = userCredential.user;
    alert("登入成功");
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("  Email: " + profile.email);
        if(profile.email == "admin@gmail.com"){
          alert("你是管理員");
          self.location.href = "admin.html";
        }
        else{
          alert("你是使用者");
          self.location.href = "user.html";        
        }
      });
    }
    
  })
  .catch((error) => {
    alert("登入失敗！" + "\n帳號或密碼錯誤，請重新輸入。");
    self.location.href = "Home.html"; 
  });
}