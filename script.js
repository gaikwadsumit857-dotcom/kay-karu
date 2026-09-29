const problems = {

  pan: {
    title: "PAN Card कसा काढायचा?",
    intro: "PAN (Permanent Account Number) हा Income Tax Department कडून दिला जाणारा unique tax identification number आहे. PAN ची गरज अनेक financial आणि tax-related कामांसाठी पडते.",
    documents: [
      "ओळख पुरावा",
      "पत्ता पुरावा",
      "जन्मतारीख पुरावा",
      "अर्जदाराचा योग्य mobile number आणि email ID"
    ],
    steps: [
      "PAN साठी अधिकृत Income Tax e-Filing / PAN service वापरा.",
      "नवीन PAN application किंवा लागू असलेली PAN service निवडा.",
      "नाव, जन्मतारीख, पत्ता आणि इतर माहिती documents प्रमाणेच भरा.",
      "आवश्यक documents आणि authentication प्रक्रिया पूर्ण करा.",
      "Application submit करण्यापूर्वी प्रत्येक spelling आणि date पुन्हा तपासा.",
      "Acknowledgement/Application number जतन करा.",
      "Application status अधिकृत portal वरून तपासा."
    ],
    mistakes: [
      "नाव documents पेक्षा वेगळे लिहू नका.",
      "जन्मतारीख चुकीची भरू नका.",
      "Duplicate PAN साठी नवीन PAN application करू नका.",
      "अनधिकृत PAN websites वर personal information किंवा payment देऊ नका."
    ],
    official: "https://www.incometax.gov.in/"
  },

  aadhaar: {
    title: "Aadhaar Card मध्ये Update कसा करायचा?",
    intro: "Aadhaar मध्ये काही demographic आणि document-related updates online करता येतात. प्रत्येक प्रकारचा update online उपलब्ध असेलच असे नाही.",
    documents: [
      "Update च्या प्रकारानुसार valid supporting document",
      "Aadhaar number",
      "Registered mobile number — online service साठी आवश्यक असल्यास"
    ],
    steps: [
      "UIDAI ची अधिकृत website उघडा.",
      "Aadhaar update service उपलब्ध आहे का ते तपासा.",
      "तुम्हाला कोणता detail बदलायचा आहे ते निवडा.",
      "नवीन माहिती documents प्रमाणे अचूक भरा.",
      "आवश्यक supporting document submit करा.",
      "Online authentication/payment लागू असल्यास ते पूर्ण करा.",
      "Update Request Number (URN/SRN) किंवा acknowledgement जतन करा.",
      "नंतर update status तपासा."
    ],
    offline: [
      "ज्या update साठी centre visit आवश्यक आहे त्यासाठी Aadhaar Seva Kendra/authorised enrolment centre वापरा.",
      "Original documents सोबत घेऊन जा.",
      "Operator ने भरलेली माहिती submit करण्यापूर्वी तपासा.",
      "Acknowledgement slip जतन करा."
    ],
    mistakes: [
      "नाव किंवा address spelling चुकीची ठेवू नका.",
      "अवैध किंवा अस्पष्ट document upload करू नका.",
      "OTP कोणालाही सांगू नका.",
      "फक्त UIDAI ची official website वापरा."
    ],
    official: "https://uidai.gov.in/"
  },

  income: {
    title: "Income Certificate कसं काढायचं?",
    intro: "Income Certificate मध्ये अर्जदाराच्या कुटुंबाच्या/उत्पन्नाशी संबंधित माहिती अधिकृतरीत्या प्रमाणित केली जाते. Scholarship, admission, fee benefits किंवा इतर सरकारी योजनांसाठी याची आवश्यकता असू शकते.",
    documents: [
      "ओळख पुरावा",
      "पत्ता/रहिवास पुरावा",
      "उत्पन्नाशी संबंधित उपलब्ध पुरावा",
      "आवश्यक असल्यास self-declaration/affidavit",
      "अर्जाच्या प्रकारानुसार इतर supporting documents"
    ],
    steps: [
      "Maharashtra Aaple Sarkar portal उघडा.",
      "Citizen registration/login करा.",
      "Revenue Department मधील Income Certificate service शोधा.",
      "Application form मध्ये अर्जदाराची माहिती भरा.",
      "उत्पन्नाची माहिती योग्य पद्धतीने भरा.",
      "मागितलेले documents upload करा.",
      "Application submit करा.",
      "Application ID/receipt जतन करा.",
      "Portal वरून application status तपासा.",
      "Certificate उपलब्ध झाल्यावर ते download करा."
    ],
    mistakes: [
      "उत्पन्नाची चुकीची माहिती देऊ नका.",
      "Documents मधील नाव आणि application मधील नाव तपासा.",
      "अर्ज submit केल्यानंतर acknowledgement जतन करा.",
      "फक्त अधिकृत government portal वापरा."
    ],
    official: "https://aaplesarkar.mahaonline.gov.in/"
  },

  caste: {
    title: "Caste Certificate कसं काढायचं?",
    intro: "Caste Certificate हे संबंधित सक्षम प्राधिकरणाकडून जारी केलेले प्रमाणपत्र आहे. Reserved category benefits, education, scholarship आणि इतर सरकारी कामांसाठी त्याची आवश्यकता असू शकते.",
    documents: [
      "ओळख पुरावा",
      "पत्ता पुरावा",
      "जात सिद्ध करणारे उपलब्ध पुरावे",
      "वडील/आजोबा/कुटुंबातील जुन्या records उपलब्ध असल्यास",
      "अर्जाच्या प्रकारानुसार इतर supporting documents"
    ],
    steps: [
      "Maharashtra Aaple Sarkar portal उघडा.",
      "Citizen Login/Registration करा.",
      "Revenue Department मधील Caste Certificate service निवडा.",
      "अर्जदाराची personal information भरा.",
      "Caste-related information documents प्रमाणे भरा.",
      "मागितलेले documents upload करा.",
      "Application submit करा.",
      "Application ID सुरक्षित ठेवा.",
      "Application status नियमित तपासा.",
      "Certificate उपलब्ध झाल्यावर official portal वरून download करा."
    ],
    mistakes: [
      "जात किंवा category चुकीची निवडू नका.",
      "जुने supporting records असल्यास त्यातील माहिती तपासा.",
      "खोटी किंवा बनावट documents वापरू नका.",
      "Application submit करण्यापूर्वी सर्व details तपासा."
    ],
    official: "https://aaplesarkar.mahaonline.gov.in/"
  },

  casteValidity: {
    title: "Caste Validity Certificate कसं काढायचं?",
    intro: "Caste Certificate आणि Caste Validity Certificate हे वेगवेगळे आहेत. Maharashtra मध्ये caste certificate verification साठी CCVIS system वापरला जातो.",
    documents: [
      "Caste Certificate",
      "ओळख आणि पत्ता संबंधित documents",
      "जुन्या caste records उपलब्ध असल्यास",
      "Education/Service/Election/Other purpose नुसार संबंधित documents",
      "Education purpose साठी institution-related certificate/form लागू असल्यास"
    ],
    steps: [
      "BARTI च्या official CCVIS portal वर जा.",
      "New User असल्यास registration करा.",
      "तुमचा purpose निवडा — Education, Service, Election किंवा Other.",
      "Online application form काळजीपूर्वक भरा.",
      "Original documents च्या scans आवश्यक format मध्ये upload करा.",
      "Application submit करा.",
      "Submitted application ची print/required documents तयार ठेवा.",
      "CCVIS च्या instructions नुसार संबंधित Scrutiny Committee कडे documents सादर करा.",
      "Application ID सुरक्षित ठेवा.",
      "CCVIS वर application status track करा.",
      "Validity मंजूर झाल्यास certificate मिळण्याची प्रक्रिया portal/instructions प्रमाणे पूर्ण करा."
    ],
    important: [
      "खोटी किंवा बनावट कागदपत्रे वापरू नका.",
      "Purpose योग्य निवडा.",
      "Original documents आणि self-attested copies बाबत portal च्या current instructions follow करा.",
      "Education applications साठी college/institution कडून लागणारे forms आधी तपासा."
    ],
    official: "https://bartievalidity.maharashtra.gov.in/"
  },

  domicile: {
    title: "Domicile / Residence Certificate कसं काढायचं?",
    intro: "Domicile/Residence related certificate महाराष्ट्रातील विविध शासकीय, educational किंवा अन्य प्रक्रियांमध्ये मागितले जाऊ शकते.",
    documents: [
      "ओळख पुरावा",
      "पत्ता पुरावा",
      "महाराष्ट्रातील residence संबंधित documents",
      "आवश्यक असल्यास self-declaration",
      "Service नुसार इतर supporting documents"
    ],
    steps: [
      "Maharashtra Aaple Sarkar portal उघडा.",
      "Citizen registration/login करा.",
      "Revenue Department मधील संबंधित Domicile/Age-Nationality-Domicile service शोधा.",
      "Application form पूर्ण भरा.",
      "Residence/address information documents प्रमाणे भरा.",
      "मागितलेले documents upload करा.",
      "Application submit करा.",
      "Application number जतन करा.",
      "Status track करा.",
      "Certificate उपलब्ध झाल्यावर download करा."
    ],
    mistakes: [
      "Address मध्ये चुकीची माहिती देऊ नका.",
      "Supporting documents मधील address तपासा.",
      "Application number हरवू देऊ नका."
    ],
    official: "https://aaplesarkar.mahaonline.gov.in/"
  },

  drivingLicence: {
    title: "Driving Licence कसं काढायचं?",
    intro: "Driving Licence मिळवण्यासाठी सामान्यतः Learner's Licence पासून प्रक्रिया सुरू होते आणि त्यानंतर लागू असलेली driving test प्रक्रिया पूर्ण करावी लागते.",
    documents: [
      "ओळख पुरावा",
      "पत्ता पुरावा",
      "वयाचा पुरावा",
      "फोटो/इतर documents — service नुसार",
      "Medical certificate लागू असल्यास"
    ],
    steps: [
      "Parivahan ची अधिकृत website उघडा.",
      "Online Services मधून Driving Licence related service निवडा.",
      "तुमचे State निवडा.",
      "Learner's Licence साठी लागू application process सुरू करा.",
      "Personal details आणि documents भरा.",
      "लागू असल्यास fee payment करा.",
      "Appointment/test instructions follow करा.",
      "Learner's Licence मिळाल्यानंतर permanent Driving Licence साठी eligibility period पूर्ण झाल्यावर apply करा.",
      "Driving test साठी appointment घ्या.",
      "Test pass झाल्यानंतर licence issue/delivery status तपासा."
    ],
    mistakes: [
      "Driving test साठी आवश्यक documents घेऊन जा.",
      "Application मध्ये vehicle class चुकीची निवडू नका.",
      "फक्त official Parivahan portal वापरा."
    ],
    official: "https://parivahan.gov.in/"
  },

  voter: {
    title: "Voter ID / Voter Registration कसं करायचं?",
    intro: "मतदार नोंदणी, correction आणि इतर voter services साठी Election Commission च्या official voter services वापरता येतात.",
    documents: [
      "वयाचा पुरावा",
      "पत्ता पुरावा",
      "Passport-size photograph/online photo requirement असल्यास",
      "आवश्यक declaration"
    ],
    steps: [
      "Election Commission च्या official voter service portal वर जा.",
      "Registration/Login करा.",
      "New Voter Registration किंवा योग्य service निवडा.",
      "Personal आणि address details भरा.",
      "Documents upload करा.",
      "Application submit करा.",
      "Reference/Application number जतन करा.",
      "Application status track करा.",
      "गरज असल्यास verification प्रक्रिया पूर्ण करा."
    ],
    mistakes: [
      "एकाच व्यक्तीसाठी duplicate voter registration करू नका.",
      "Address आणि date of birth अचूक भरा.",
      "Application number जतन करा."
    ],
    official: "https://voters.eci.gov.in/"
  },

  passport: {
    title: "Passport कसा काढायचा?",
    intro: "Fresh किंवा Re-issue Passport साठी Passport Seva च्या official portal वरून online application करून appointment घ्यावी लागते.",
    documents: [
      "ओळख पुरावा",
      "पत्ता पुरावा",
      "जन्मतारीख पुरावा",
      "Fresh/Re-issue आणि applicant category नुसार इतर documents"
    ],
    steps: [
      "Passport Seva ची official website उघडा.",
      "Register करून account तयार करा.",
      "Login करा.",
      "Apply for Fresh Passport/Re-issue of Passport निवडा.",
      "योग्य Passport Office/RPO निवडा.",
      "Application form मधील personal, family, address आणि इतर details भरा.",
      "Application submit करा.",
      "Application Reference Number/receipt जतन करा.",
      "Applicable fee भरा.",
      "PSK/POPSK appointment schedule करा.",
      "Appointment च्या दिवशी आवश्यक original documents घेऊन जा.",
      "Passport Seva Kendra येथे verification/biometric प्रक्रिया पूर्ण करा.",
      "Application status official portal वर track करा."
    ],
    mistakes: [
      "Application submit करण्यापूर्वी spelling आणि address तपासा.",
      "Appointment चुकवू नका.",
      "Original documents सोबत घेऊन जा.",
      "Fake passport websites टाळा."
    ],
    official: "https://www.passportindia.gov.in/"
  },

  birth: {
    title: "Birth Certificate कसं काढायचं?",
    intro: "Birth registration आणि Birth Certificate संबंधित local registration authority मार्फत केली जाते. Online availability स्थानिक प्रशासनानुसार बदलू शकते.",
    documents: [
      "Birth-related hospital/medical record उपलब्ध असल्यास",
      "पालकांचे identity/address documents",
      "Hospital birth record किंवा registration details",
      "स्थानिक authority ने मागितलेले supporting documents"
    ],
    steps: [
      "जन्म ज्या ठिकाणी नोंदवला जातो त्या संबंधित local authority ची service शोधा.",
      "Birth registration/certificate service निवडा.",
      "Applicant आणि birth details अचूक भरा.",
      "आवश्यक documents submit करा.",
      "Registration/Application number जतन करा.",
      "Verification/approval process पूर्ण होऊ द्या.",
      "Certificate उपलब्ध झाल्यावर official source मधून download/collect करा."
    ],
    mistakes: [
      "जन्मतारीख आणि नाव spelling तपासा.",
      "Hospital record आणि application details जुळतात का पाहा.",
      "Late registration असल्यास वेगळी प्रक्रिया लागू होऊ शकते."
    ],
    official: "https://crsorgi.gov.in/"
  },

  scholarship: {
    title: "Maharashtra Scholarship Form कसा भरायचा?",
    intro: "Maharashtra मध्ये विविध scholarship आणि DBT schemes साठी MahaDBT portal वापरला जातो. योग्य scheme निवडणे आणि application documents पूर्ण ठेवणे महत्त्वाचे आहे.",
    documents: [
      "Aadhaar",
      "Bank account details",
      "Income Certificate — scheme नुसार",
      "Caste Certificate — scheme नुसार",
      "Caste Validity — scheme नुसार",
      "Marksheet",
      "Admission/Bonafide details — scheme नुसार",
      "इतर scheme-specific documents"
    ],
    steps: [
      "MahaDBT च्या official portal वर जा.",
      "Registration/Login करा.",
      "Profile मधील personal, academic आणि bank details पूर्ण करा.",
      "Find Eligible Schemes/योग्य scholarship scheme तपासा.",
      "तुमच्या eligibility नुसार scheme निवडा.",
      "Application form मधील प्रत्येक section पूर्ण करा.",
      "Required documents upload करा.",
      "Application Preview मध्ये सर्व details तपासा.",
      "Final submit करा.",
      "Application ID जतन करा.",
      "Application status आणि institute verification status तपासा.",
      "Correction/deficiency आली असल्यास portal वर दिलेल्या instructions प्रमाणे action घ्या."
    ],
    mistakes: [
      "Bank account details चुकीचे भरू नका.",
      "Aadhaar-linked information mismatch असल्यास ते तपासा.",
      "Wrong scholarship scheme निवडू नका.",
      "Documents अस्पष्ट upload करू नका.",
      "Final submit करण्यापूर्वी preview नक्की तपासा."
    ],
    official: "https://mahadbt.maharashtra.gov.in/"
  },

  upi: {
    title: "UPI Payment Failed झालं तर काय करायचं?",
    intro: "UPI transaction failed, pending किंवा debited-but-not-received अशा वेगवेगळ्या स्थिती असू शकतात. आधी transaction status तपासणे महत्त्वाचे आहे.",
    steps: [
      "तुमच्या UPI app मध्ये Transaction History उघडा.",
      "Failed/Pending/Successful status तपासा.",
      "Bank account मधून amount debit झाला आहे का तपासा.",
      "Transaction ID/UTR number जतन करा.",
      "Pending transaction असल्यास bank/app कडून status update होण्याची प्रतीक्षा करा.",
      "Amount debit झाला पण receiver ला मिळाला नसेल तर transaction details मधून complaint/raise dispute option वापरा.",
      "UPI app support किंवा bank customer care कडे UTR number देऊन complaint करा.",
      "Unknown/fraud transaction असल्यास त्वरित bank आणि योग्य cyber-fraud reporting channel वापरा."
    ],
    mistakes: [
      "OTP किंवा UPI PIN कोणालाही सांगू नका.",
      "UPI PIN पैसे receive करण्यासाठी आवश्यक नसतो.",
      "Unknown payment link वर click करू नका.",
      "Transaction ID/UTR जतन करा."
    ],
    official: "https://www.npci.org.in/"
  }

};


function setProblem(text) {
  const input = document.getElementById("problemInput");

  if (!input) return;

  input.value = text;
  input.focus();

  document.getElementById("search")?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}


function findSolution() {

  const input = document.getElementById("problemInput");

  if (!input) return;

  const query = input.value.trim().toLowerCase();

  if (!query) {
    alert("कृपया तुमची समस्या लिहा.");
    return;
  }

  let result = null;

  const keywordMap = {

    pan: [
      "pan", "पॅन", "pancard", "pan card"
    ],

    aadhaar: [
      "aadhaar", "aadhar", "आधार"
    ],

    income: [
      "income certificate",
      "income",
      "उत्पन्न प्रमाणपत्र",
      "उत्पन्न"
    ],

    caste: [
      "caste certificate",
      "caste",
      "जात प्रमाणपत्र",
      "जात प्रमाणपत्र काढायचं"
    ],

    casteValidity: [
      "caste validity",
      "जात वैधता",
      "जात वैधता प्रमाणपत्र",
      "validity certificate"
    ],

    domicile: [
      "domicile",
      "residence certificate",
      "रहिवासी",
      "अधिवास"
    ],

    drivingLicence: [
      "driving licence",
      "driving license",
      "licence",
      "license",
      "ड्रायव्हिंग लायसन्स",
      "ड्रायव्हिंग"
    ],

    voter: [
      "voter",
      "voter id",
      "मतदार",
      "मतदार ओळखपत्र"
    ],

    passport: [
      "passport",
      "पासपोर्ट"
    ],

    birth: [
      "birth certificate",
      "birth",
      "जन्म प्रमाणपत्र",
      "जन्म दाखला"
    ],

    scholarship: [
      "scholarship",
      "महाडीबीटी",
      "mahadbt",
      "शिष्यवृत्ती",
      "scholarship form"
    ],

    upi: [
      "upi",
      "gpay",
      "google pay",
      "phonepe",
      "paytm",
      "upi payment",
      "payment failed",
      "payment fail",
      "पेमेंट फेल"
    ]

  };


  for (const key in keywordMap) {

    if (
      keywordMap[key].some(keyword =>
        query.includes(keyword)
      )
    ) {
      result = problems[key];
      break;
    }

  }


  if (!result) {

    result = {
      title: "या समस्येसाठी अजून solution उपलब्ध नाही.",
      intro: "तुमची समस्या थोडी अधिक स्पष्टपणे लिहा. उदाहरणार्थ: Aadhaar mobile number update, caste validity कशी काढायची, UPI payment failed इ.",
      documents: [],
      steps: [
        "समस्या शक्य तितक्या स्पष्ट शब्दांत लिहा.",
        "Marathi किंवा English मध्ये search करून पाहा.",
        "उदाहरण: 'Aadhaar mobile number change', 'Caste validity', 'Passport कसा काढायचा?'"
      ],
      mistakes: []
    };

  }

  showResult(result);
}


function showResult(result) {

  const section = document.getElementById("resultSection");
  const title = document.getElementById("resultTitle");
  const text = document.getElementById("resultText");
  const steps = document.getElementById("resultSteps");

  if (!section || !title || !text || !steps) return;

  title.textContent = result.title;
  text.innerHTML = "";

  const intro = document.createElement("p");
  intro.textContent = result.intro || "";
  text.appendChild(intro);


  steps.innerHTML = "";


  if (result.documents && result.documents.length) {

    const heading = document.createElement("h3");
    heading.textContent = "📄 आवश्यक Documents";
    steps.appendChild(heading);

    const list = document.createElement("ul");

    result.documents.forEach(item => {

      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);

    });

    steps.appendChild(list);

  }


  if (result.steps && result.steps.length) {

    const heading = document.createElement("h3");
    heading.textContent = "📝 Step-by-Step Process";
    steps.appendChild(heading);

    const list = document.createElement("ol");

    result.steps.forEach(item => {

      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);

    });

    steps.appendChild(list);

  }


  if (result.offline && result.offline.length) {

    const heading = document.createElement("h3");
    heading.textContent = "🏢 Offline Process";
    steps.appendChild(heading);

    const list = document.createElement("ul");

    result.offline.forEach(item => {

      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);

    });

    steps.appendChild(list);

  }


  if (result.important && result.important.length) {

    const heading = document.createElement("h3");
    heading.textContent = "⚠️ महत्त्वाच्या सूचना";
    steps.appendChild(heading);

    const list = document.createElement("ul");

    result.important.forEach(item => {

      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);

    });

    steps.appendChild(list);

  }


  if (result.mistakes && result.mistakes.length) {

    const heading = document.createElement("h3");
    heading.textContent = "❌ या चुका टाळा";
    steps.appendChild(heading);

    const list = document.createElement("ul");

    result.mistakes.forEach(item => {

      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);

    });

    steps.appendChild(list);

  }


  if (result.official) {

    const heading = document.createElement("h3");
    heading.textContent = "🔗 Official Website";
    steps.appendChild(heading);

    const link = document.createElement("a");

    link.href = result.official;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Official Website उघडा →";

    steps.appendChild(link);

  }


  section.style.display = "block";

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}
