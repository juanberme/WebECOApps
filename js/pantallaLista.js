const database = firebase.database();
const auth = firebase.auth();
const logOut = document.getElementById('logOut');

logOut.addEventListener('click', () => {
    auth.signOut().then(
        ()=>{
            window.location.href="SignIn.html";
        }
    ).catch (
        (error) => {
            alert(error.message);
        }
    );
});