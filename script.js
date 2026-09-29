const problems = {

  pan: {
    title: "PAN Card कसा काढायचा?",
    text: "PAN Card साठी online application करता येतो. योग्य form भरून आवश्यक माहिती आणि documents submit करावे लागतात.",
    steps: [
      "PAN Card साठी अधिकृत application portal उघडा.",
      "नवीन PAN application निवडा.",
      "तुमची personal माहिती काळजीपूर्वक भरा.",
      "आवश्यक documents आणि photograph/signature requirements पूर्ण करा.",
      "Application submit करून acknowledgement/reference number जतन करा."
    ]
  },

  aadhaar: {
    title: "Aadhaar Card मध्ये बदल कसा करायचा?",
    text: "Aadhaar मधील काही माहिती online update करता येते, तर काही बदलांसाठी Aadhaar centre ला भेट द्यावी लागू शकते.",
    steps: [
      "Aadhaar ची अधिकृत website उघडा.",
      "तुमच्या गरजेनुसार update service निवडा.",
      "आवश्यक माहिती आणि documents तयार ठेवा.",
      "Online update उपलब्ध असल्यास request submit करा.",
      "Request number जतन करून status check करा."
    ]
  },

  upi: {
    title: "UPI Payment Failed झालं तर काय करावं?",
    text: "UPI payment failed झाल्यास transaction status तपासा आणि पैसे परत आले आहेत का ते पाहा.",
    steps: [
      "तुमच्या UPI app मध्ये transaction history उघडा.",
      "Payment चा status तपासा.",
      "Bank account मधून पैसे debit झाले आहेत का ते पाहा.",
      "Failed transaction असल्यास काही वेळ account check करा.",
      "पैसे परत न आल्यास bank किंवा UPI app support शी संपर्क करा."
    ]
  },

  income: {
    title: "Income Certificate कसं काढायचं?",
    text: "Income Certificate साठी राज्याच्या अधिकृत online service portal किंवा संबंधित कार्यालयामार्फत अर्ज करता येतो.",
    steps: [
      "अधिकृत government service portal उघडा.",
      "Income Certificate service शोधा.",
      "Application form मध्ये योग्य माहिती भरा.",
      "आवश्यक documents upload करा.",
      "Application submit करून application number जतन करा."
    ]
  },

  caste: {
    title: "Caste Certificate कसं काढायचं?",
    text: "Caste Certificate साठी अधिकृत government portal किंवा संबंधित तहसील/महसूल कार्यालयाच्या प्रक्रियेचा वापर करावा.",
    steps: [
      "अधिकृत government service portal उघडा.",
      "Caste Certificate service निवडा.",
      "आवश्यक personal आणि caste-related माहिती भरा.",
      "मागितलेले documents upload किंवा submit करा.",
      "Application number जतन करून application status तपासा."
    ]
  },

  licence: {
    title: "Driving Licence कसं काढायचं?",
    text: "Driving Licence साठी learner licence आणि त्यानंतर driving test यांसारख्या प्रक्रियेतून जावे लागू शकते.",
    steps: [
      "अधिकृत transport service portal उघडा.",
      "Driving Licence संबंधित service निवडा.",
      "तुमची माहिती भरून application submit करा.",
      "आवश्यक appointment किंवा test प्रक्रिया पूर्ण करा.",
      "Application/appointment details जतन करून ठेवा."
    ]
  },

  voter: {
    title: "Voter ID कसं काढायचं?",
    text: "नवीन मतदार नोंदणीसाठी अधिकृत Election Commission service वापरता येते.",
    steps: [
      "अधिकृत voter service portal उघडा.",
      "New Voter Registration service निवडा.",
      "आवश्यक personal information भरा.",
      "मागितलेले documents submit करा.",
      "Application status track करा."
    ]
  },

  passport: {
    title: "Passport कसा काढायचा?",
    text: "Passport साठी online application करून appointment आणि आवश्यक verification प्रक्रिया पूर्ण करावी लागते.",
    steps: [
      "अधिकृत passport service portal उघडा.",
      "Registration करून login करा.",
      "Passport application form भरा.",
      "Application submit करून fee/appointment प्रक्रिया पूर्ण करा.",
      "Appointment च्या दिवशी आवश्यक documents घेऊन जा."
    ]
  },

  scholarship: {
    title: "Scholarship Form कसा भरायचा?",
    text: "Scholarship application भरताना योग्य scheme निवडणे आणि आवश्यक documents तयार ठेवणे महत्त्वाचे आहे.",
    steps: [
      "तुमच्या राज्याचे अधिकृत scholarship portal उघडा.",
      "Registration/Login करा.",
      "तुमच्यासाठी योग्य scholarship scheme निवडा.",
      "Application form आणि documents पूर्ण करा.",
      "Final submit करण्यापूर्वी सर्व माहिती तपासा."
    ]
  },

  bank: {
    title: "Bank Account मध्ये mobile number update कसा करायचा?",
    text: "Mobile number update करण्याची प्रक्रिया bank नुसार वेगळी असू शकते.",
    steps: [
      "तुमच्या bank ची अधिकृत service तपासा.",
      "Online update उपलब्ध आहे का ते पाहा.",
      "Online उपलब्ध नसल्यास bank branch ला भेट द्या.",
      "आवश्यक identification documents घेऊन जा.",
      "Update झाल्यानंतर registered mobile number तपासा."
    ]
  },

  sim: {
    title: "SIM Card हरवल्यास काय करावे?",
    text: "SIM Card हरवल्यास misuse टाळण्यासाठी लगेच telecom operator शी संपर्क करणे योग्य आहे.",
    steps: [
      "तुमच्या telecom operator शी त्वरित संपर्क करा.",
      "हरवलेला SIM block करा.",
      "गरज असल्यास duplicate/replacement SIM मागा.",
      "Banking आणि UPI services सुरक्षित आहेत का ते तपासा.",
      "संशयास्पद activity असल्यास संबंधित संस्थेला कळवा."
    ]
  },

  rc: {
    title: "Vehicle RC कशी मिळवायची?",
    text: "Vehicle Registration Certificate संबंधित transport service द्वारे मिळवता किंवा तपासता येते.",
    steps: [
      "अधिकृत transport service portal उघडा.",
      "Vehicle/RC संबंधित service निवडा.",
      "Vehicle registration details भरा.",
      "Available service किंवा document option निवडा.",
      "Application/status details जतन करा."
    ]
  },

  birth: {
    title: "Birth Certificate कसं काढायचं?",
    text: "Birth Certificate साठी संबंधित स्थानिक authority किंवा अधिकृत online service वापरता येते.",
    steps: [
      "तुमच्या क्षेत्रातील अधिकृत birth registration service शोधा.",
      "Birth registration/certificate service निवडा.",
      "मागितलेली माहिती भरा.",
      "आवश्यक documents submit करा.",
      "Application किंवा certificate status तपासा."
    ]
  },

  death: {
    title: "Death Certificate कसं काढायचं?",
    text: "Death Certificate संबंधित स्थानिक registration authority मार्फत मिळवता येते.",
    steps: [
      "संबंधित local authority ची अधिकृत service तपासा.",
      "Death registration/certificate service निवडा.",
      "आवश्यक माहिती भरा.",
      "मागितलेले documents submit करा.",
      "Application status किंवा certificate availability तपासा."
    ]
  },

  domicile: {
    title: "Domicile Certificate कसं काढायचं?",
    text: "Domicile Certificate साठी राज्याच्या अधिकृत citizen service portal किंवा संबंधित महसूल कार्यालयाची प्रक्रिया वापरावी.",
    steps: [
      "अधिकृत government service portal उघडा.",
      "Domicile/Residence Certificate service शोधा.",
      "Application form भरा.",
      "आवश्यक documents submit करा.",
      "Application number जतन करून status तपासा."
    ]
  },

  job: {
    title: "Government Job ची माहिती कुठे मिळेल?",
    text: "सरकारी नोकरीसाठी संबंधित विभागाच्या अधिकृत recruitment notifications तपासणे महत्त्वाचे आहे.",
    steps: [
      "संबंधित government department ची official website तपासा.",
      "Recruitment/Careers section उघडा.",
      "Eligibility आणि application dates तपासा.",
      "Official notification पूर्ण वाचा.",
      "फक्त अधिकृत portal वरून application करा."
    ]
  },

  password: {
    title: "Password विसरलो तर काय करावे?",
    text: "बहुतेक online services मध्ये Forgot Password किंवा Reset Password option उपलब्ध असतो.",
    steps: [
      "संबंधित website/app च्या login page वर जा.",
      "Forgot Password निवडा.",
      "Registered mobile/email वापरून verification करा.",
      "नवीन strong password तयार करा.",
      "नवीन password सुरक्षित ठिकाणी जतन करा."
    ]
  },

  otp: {
    title: "OTP येत नसेल तर काय करावे?",
    text: "OTP उशिरा येणे network, server किंवा registered mobile number मुळे होऊ शकते.",
    steps: [
      "Mobile network तपासा.",
      "Registered mobile number बरोबर आहे का तपासा.",
      "थोडा वेळ थांबून Resend OTP करा.",
      "SMS inbox/block settings तपासा.",
      "तरीही OTP न आल्यास संबंधित service provider च्या support शी संपर्क करा."
    ]
  }

};


function setProblem(text) {
  const input = document.getElementById("problemInput");

  if (input) {
    input.value = text;
    input.focus();

    document.getElementById("search")?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}


function findSolution() {

  const input = document.getElementById("problemInput");
  const problem = input.value.trim().toLowerCase();

  if (!problem) {
    alert("कृपया तुमची समस्या लिहा.");
    return;
  }

  let result = null;

  if (
    problem.includes("pan") ||
    problem.includes("पॅन")
  ) {
    result = problems.pan;

  } else if (
    problem.includes("aadhaar") ||
    problem.includes("aadhar") ||
    problem.includes("आधार")
  ) {
    result = problems.aadhaar;

  } else if (
    problem.includes("upi") ||
    problem.includes("gpay") ||
    problem.includes("phonepe") ||
    problem.includes("paytm")
  ) {
    result = problems.upi;

  } else if (
    problem.includes("income") ||
    problem.includes("उत्पन्न")
  ) {
    result = problems.income;

  } else if (
    problem.includes("caste") ||
    problem.includes("जात")
  ) {
    result = problems.caste;

  } else if (
    problem.includes("driving") ||
    problem.includes("licence") ||
    problem.includes("license") ||
    problem.includes("ड्रायव्हिंग")
  ) {
    result = problems.licence;

  } else if (
    problem.includes("voter") ||
    problem.includes("मतदार")
  ) {
    result = problems.voter;

  } else if (
    problem.includes("passport")
  ) {
    result = problems.passport;

  } else if (
    problem.includes("scholarship") ||
    problem.includes("शिष्यवृत्ती")
  ) {
    result = problems.scholarship;

  } else if (
    problem.includes("bank") ||
    problem.includes("बँक")
  ) {
    result = problems.bank;

  } else if (
    problem.includes("sim") ||
    problem.includes("सिम")
  ) {
    result = problems.sim;

  } else if (
    problem.includes("rc") ||
    problem.includes("vehicle") ||
    problem.includes("गाडी")
  ) {
    result = problems.rc;

  } else if (
    problem.includes("birth") ||
    problem.includes("जन्म")
  ) {
    result = problems.birth;

  } else if (
    problem.includes("death") ||
    problem.includes("मृत्यू")
  ) {
    result = problems.death;

  } else if (
    problem.includes("domicile") ||
    problem.includes("रहिवासी")
  ) {
    result = problems.domicile;

  } else if (
    problem.includes("job") ||
    problem.includes("नोकरी")
  ) {
    result = problems.job;

  } else if (
    problem.includes("password") ||
    problem.includes("पासवर्ड")
  ) {
    result = problems.password;

  } else if (
    problem.includes("otp")
  ) {
    result = problems.otp;
  }


  if (result) {
    showResult(result);
  } else {
    showResult({
      title: "तुमच्या समस्येसाठी अजून माहिती जोडलेली नाही.",
      text: "तुमची समस्या वेगळ्या शब्दांत लिहून पुन्हा search करा.",
      steps: [
        "समस्या थोडक्यात आणि स्पष्ट लिहा.",
        "उदाहरणार्थ: Aadhaar update, PAN Card, UPI failed.",
        "English किंवा Marathi दोन्हीमध्ये search करून पाहा."
      ]
    });
  }
}


function showResult(result) {

  const section = document.getElementById("resultSection");
  const title = document.getElementById("resultTitle");
  const text = document.getElementById("resultText");
  const steps = document.getElementById("resultSteps");

  if (!section || !title || !text || !steps) {
    return;
  }

  title.textContent = result.title;
  text.textContent = result.text;

  steps.innerHTML = "";

  result.steps.forEach((step, index) => {

    const li = document.createElement("li");

    li.textContent = step;

    steps.appendChild(li);

  });

  section.style.display = "block";

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
