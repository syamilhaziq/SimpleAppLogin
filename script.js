function login(){
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  //alert();

  const isCorrectUsername = usernameInput.value === 'admin'
  const isCorrectPassword = passwordInput.value === 'password'

  if (isCorrectUsername && isCorrectPassword){
    result.innerHTML = `Welcome ` + usernameInput.value;
  }
  else if(isCorrectUsername){
    result.innerHTML = `Incorrect password`;
  }
  else{
    result.innerHTML = `Wrong password/username`;
  }
  
}

