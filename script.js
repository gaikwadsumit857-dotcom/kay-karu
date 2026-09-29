const problems = {

    pan: {
        title: "PAN Card हरवलं आहे — काय करायचं?",
        text: "PAN Card हरवल्यास संबंधित अधिकृत PAN service चा वापर करा.",
        steps: [
            "तुमचा PAN Number उपलब्ध असल्यास तो शोधून ठेवा.",
            "अधिकृत PAN service portal वर जा.",
            "Reprint किंवा संबंधित service निवडा.",
            "आवश्यक माहिती भरून application submit करा."
        ]
    },

    aadhaar: {
        title: "Aadhaar संबंधित समस्या",
        text: "Aadhaar मध्ये माहिती update करण्यासाठी अधिकृत UIDAI प्रक्रियेचा वापर करा.",
        steps: [
            "कुठली माहिती बदलायची आहे ते निश्चित करा.",
            "Online service उपलब्ध आहे का ते तपासा.",
            "आवश्यक असल्यास Aadhaar centre ला भेट द्या.",
            "Update request ची पावती जतन करा."
        ]
    },

    upi: {
        title: "UPI Payment अडकलं आहे",
        text: "UPI payment pending किंवा failed असल्यास transaction status आधी तपासा.",
        steps: [
            "तुमच्या UPI app मध्ये transaction status तपासा.",
            "Transaction ID किंवा UTR number जतन करा.",
            "Bank account मधून पैसे deduct झाले आहेत का तपासा.",
            "समस्या कायम असल्यास bank किंवा UPI app support कडे complaint करा."
        ]
    },

    income: {
        title: "Income Certificate काढायचं आहे",
        text: "Income Certificate साठी तुमच्या राज्यातील अधिकृत online किंवा government service वापरा.",
        steps: [
            "अधिकृत government service portal तपासा.",
            "आवश्यक documents तयार ठेवा.",
            "Application form काळजीपूर्वक भरा.",
            "Application number किंवा acknowledgement जतन करा."
        ]
    },

    caste: {
        title: "Caste Certificate काढायचं आहे",
        text: "Caste Certificate साठी संबंधित राज्याच्या अधिकृत प्रक्रियेचा वापर करा.",
        steps: [
            "अधिकृत application process तपासा.",
            "आवश्यक identity आणि address documents तयार ठेवा.",
            "Application submit करा.",
            "Application status तपासत राहा."
        ]
    },

    licence: {
        title: "Driving Licence Renewal",
        text: "Driving Licence renewal साठी अधिकृत transport service portal वापरा.",
        steps: [
            "Licence ची validity तपासा.",
            "अधिकृत transport portal वर renewal service शोधा.",
            "आवश्यक माहिती आणि documents submit करा.",
            "Application acknowledgement जतन करा."
        ]
    }

};


function setProblem(text) {

    const input = document.getElementById("problemInput");

    input.value = text;

    input.focus();

    document.querySelector(".search-box").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function findSolution() {

    const input = document
        .getElementById("problemInput")
        .value
        .trim()
        .toLowerCase();

    if (!input) {

        alert("कृपया तुमची समस्या लिहा.");

        return;
    }


    let result = null;


    if (
        input.includes("pan") ||
        input.includes("पॅन")
    ) {

        result = problems.pan;

    } else if (
        input.includes("aadhaar") ||
        input.includes("आधार")
    ) {

        result = problems.aadhaar;

    } else if (
        input.includes("upi") ||
        input.includes("payment") ||
        input.includes("पेमेंट")
    ) {

        result = problems.upi;

    } else if (
        input.includes("income") ||
        input.includes("उत्पन्न")
    ) {

        result = problems.income;

    } else if (
        input.includes("caste") ||
        input.includes("जात")
    ) {

        result = problems.caste;

    } else if (
        input.includes("driving") ||
        input.includes("licence") ||
        input.includes("license") ||
        input.includes("लायसन्स")
    ) {

        result = problems.licence;

    }


    showResult(result);

}


function showResult(result) {

    const section =
        document.getElementById("resultSection");

    const title =
        document.getElementById("resultTitle");

    const text =
        document.getElementById("resultText");

    const steps =
        document.getElementById("resultSteps");


    section.style.display = "block";


    if (result) {

        title.textContent = result.title;

        text.textContent = result.text;


        steps.innerHTML = `

            <div style="margin-top:20px;">

                ${result.steps.map((step, index) => `

                    <div style="
                        padding:14px;
                        margin-bottom:10px;
                        background:#f8f9fc;
                        border-radius:10px;
                    ">

                        <strong>${index + 1}.</strong>
                        ${step}

                    </div>

                `).join("")}

            </div>

        `;

    } else {

        title.textContent =
            "ही समस्या अजून उपलब्ध नाही.";

        text.textContent =
            "समस्या थोड्या वेगळ्या शब्दांत लिहून पुन्हा search करा.";

        steps.innerHTML = `

            <div style="
                margin-top:20px;
                padding:15px;
                background:#f8f9fc;
                border-radius:10px;
            ">

                💡 उदाहरण:
                "माझं PAN Card हरवलं आहे"

            </div>

        `;

    }


    section.scrollIntoView({
        behavior: "smooth"
    });

}
