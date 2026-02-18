/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  "C0mpl3x#Pwd"
  let counter = 0;
  let passwordLength_regex = /.{8,}/;
  if (passwordLength_regex.test(password)) counter += 1;

  let OneUpperCase = /[A-Z]/;
  let OneLowerCase = /[a-z]/;
  if (OneUpperCase.test(password)) {
    counter += 1;
  }
  if (OneLowerCase.test(password)) counter += 1;

  

  let atleastOneNumber = /[0-9]/;
  if (atleastOneNumber.test(password)) counter += 1;

  let specialCharacters =/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/


  if (specialCharacters.test(password)) counter += 1;

  

  if(password!==null && password!==''){
   if (counter === 0 || counter === 1) {
      return "weak";
    } 
    else if (counter === 2 || counter == 3) {
      return "medium";
    }
     else if (counter === 4) return "strong";
    else return "very strong";
  } else {
    return 'weak'
  }
  //pehle mai esko array banadunga
  // let arr_password = password.split("");
  // let criteria_matched_count = 0;

  // if (password.length >= 1 && typeof password === "string") {
  //   ("C0mpl3x#Pwd");

  //   let arr_password = password.split("");

  //   let num_arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //   if (password.length >= 8) {
  //     criteria_matched_count += 1;
  //   }

  //   let small = password.toLowerCase();
  //   if (!(small === password)) {
  //     criteria_matched_count += 1;
  //   }

  //   let uppercase_password = password.toUpperCase();
  //   if (!(uppercase_password === password)) {
  //     criteria_matched_count += 1;
  //   }

  //   arr_password.forEach((value) => {
  //     if (num_arr.includes(value)) criteria_matched_count += 1;
  //   });

  //   let specialCharacters = /[!@#$%^&*()_+-=[]{}|;:,.<>?]/;

  //   if (specialCharacters.test(password)) criteria_matched_count += 1;

   
  } 

