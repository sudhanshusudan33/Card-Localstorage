// Function to get data from local storage or prompt the user to enter it
function getDataOrPrompt(key, message) {
    let data = localStorage.getItem(key);
    if (!data) {
      data = prompt(message);
      localStorage.setItem(key, data);
    }
    return data;
  }
  
  // Function to load data from local storage and display it
  function loadData() {
    document.querySelector(
      ".first_name"
    ).innerText = `First Name: ${getDataOrPrompt(
      "first_name",
      "Enter your first name"
    )}`;
    document.querySelector(
      ".last_name"
    ).innerText = `Last Name: ${getDataOrPrompt(
      "last_name",
      "Enter your last name"
    )}`;
    document.querySelector(".country").innerText = `Country: ${getDataOrPrompt(
      "country",
      "Enter your country"
    )}`;
    document.querySelector(".phone").innerText = `Phone Number: ${getDataOrPrompt(
      "phone",
      "Enter your phone number"
    )}`;
    document.querySelector(".state").innerText = `State: ${getDataOrPrompt(
      "state",
      "Enter your state"
    )}`;
    document.querySelector(".city").innerText = `City: ${getDataOrPrompt(
      "city",
      "Enter your city"
    )}`;
    document.querySelector(".village").innerText = `Village: ${getDataOrPrompt(
      "village",
      "Enter your village"
    )}`;
  }
  
  // Function to clear data from local storage
  function clearData() {
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("country");
    localStorage.removeItem("phone");
    localStorage.removeItem("state");
    localStorage.removeItem("city");
    localStorage.removeItem("village");
    location.reload();
  }
  
  // Event listener for the clear data button
  document.querySelector("#clear-data").addEventListener("click", clearData);
  
  // Load data when the page is loaded
  window.addEventListener("load", loadData);