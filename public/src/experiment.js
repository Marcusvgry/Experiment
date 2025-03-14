let currentStep = 0;
const TOTAL_STEPS = 740;

// Hilfsfunktion zum Erhöhen des Fortschritts
function incrementProgress() {
  if (currentStep < TOTAL_STEPS) {
    currentStep++;
    jsPsych.progressBar.progress = currentStep / TOTAL_STEPS;
  }
  
}


// -- Initialisierung jsPsych und timeline----------------------------------------------------------------------------
var timeline = [];
const jsPsych = initJsPsych({
     //Progress Bar anzeigen und manuell steuern
    
    message_progress_bar: "Fortschritt",
    show_progress_bar: true,
    auto_update_progress_bar: false,
    on_finish: function () {

        // Zusätzliche Daten
        var csv = jsPsych.data.get().csv();


        // 
        // Sende Daten An Server

        /*
        console.log("CSV data to be sent:", csv);
        $.ajax({
            type: "POST",
            url: "/experiment-data",
            data: csv,
            contentType: "text/csv",
            success: function () {
                alert("Data Upload sucessfull");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX error: ", textStatus, errorThrown);
            },
            on_start: function(trial) {
                document.getElementById('face-image').src = jsPsych.timelineVariable('face', true);
            }
        });
        */
        /*
        var n = 2;
        var data = jsPsych.data.get().last(n);
        console.log(data);
        */

        jsPsych.data.addProperties({
            Teilnahme_Pilotstudie: Teilnahme_Pilotstudie, 
            mean_correct_responses_bad_Arabic_Muslims: mean_bad_Arabic,
            mean_correct_responses_bad_White_European: mean_bad_White,
            sd: sd,
            d: d,
            co_ans_be_corr_be_we: co_ans_be_corr_be_we,
            co_ans_str_corr_str_we: co_ans_str_corr_str_we,
            fa_ans_neu_corr_be_we: fa_ans_neu_corr_be_we,
            fa_ans_str_corr_be_we: fa_ans_str_corr_be_we,
            fa_ans_neu_corr_str_we: fa_ans_neu_corr_str_we,
            fa_ans_be_corr_str_we: fa_ans_be_corr_str_we,
            co_ans_be_corr_be_na: co_ans_be_corr_be_na,
            co_ans_str_corr_str_na: co_ans_str_corr_str_na,
            fa_ans_neu_corr_be_na: fa_ans_neu_corr_be_na,
            fa_ans_str_corr_be_na: fa_ans_str_corr_be_na,
            fa_ans_neu_corr_str_na: fa_ans_neu_corr_str_na,
            fa_ans_be_corr_str_na: fa_ans_be_corr_str_na,
            co_ans_neu_corr_neu_na: co_ans_neu_corr_neu_na,
            co_ans_neu_corr_neu_we: co_ans_neu_corr_neu_we,
            fa_ans_be_corr_neu_na: fa_ans_be_corr_neu_na,
            fa_ans_str_corr_neu_na: fa_ans_str_corr_neu_na,
            fa_ans_be_corr_neu_we: fa_ans_be_corr_neu_we,
            fa_ans_str_corr_neu_we: fa_ans_str_corr_neu_we
        });


        jsPsych.data.displayData();


    }
});


function startExperiment() {
    jsPsych.run(timeline);
}
// -- Variablen---------------------------------------------------------------------------------------------------------


// Variablen Daten Antworten
var co_ans_be_corr_be_we = 0;
var co_ans_str_corr_str_we = 0;
var fa_ans_neu_corr_be_we = 0;
var fa_ans_str_corr_be_we = 0;
var fa_ans_neu_corr_str_we = 0;
var fa_ans_be_corr_str_we = 0;

var co_ans_be_corr_be_na = 0;
var co_ans_str_corr_str_na = 0;
var fa_ans_neu_corr_be_na = 0;
var fa_ans_str_corr_be_na = 0;
var fa_ans_neu_corr_str_na = 0;
var fa_ans_be_corr_str_na = 0;

var co_ans_neu_corr_neu_na = 0;
var co_ans_neu_corr_neu_we = 0;
var fa_ans_be_corr_neu_na = 0;
var fa_ans_str_corr_neu_na = 0;
var fa_ans_be_corr_neu_we = 0;
var fa_ans_str_corr_neu_we = 0;

var Teilnahme_Pilotstudie = 'Nein';

// Variablen IAT

var bad_Arabic_Muslims;
var mean_bad_Arabic;
var bad_White_European;
var mean_bad_White;
var combinedData;
var sd;
var d;



// -- Arrays ---------------------------------------------------------------------------------------------------------
// Arrays Gesichter + Randomisierung
var faces_weisz_europaeisch = [
    "../img/025_y_m_n_a-resized.jpg", "../img/041_y_m_n_a-resized.jpg", "../img/049_y_m_n_a-resized.jpg", "../img/057_y_m_n_a-resized.jpg",
    "../img/062_y_m_n_a-resized.jpg", "../img/066_y_m_n_a-resized.jpg", "../img/072_y_m_n_a-resized.jpg", "../img/081_y_m_n_a-resized.jpg",
    "../img/089_y_m_n_a-resized.jpg", "../img/099_y_m_n_a-resized.jpg", "../img/105_y_m_n_a-resized.jpg", "../img/109_y_m_n_a-resized.jpg",
    "../img/114_y_m_n_a-resized.jpg", "../img/119_y_m_n_a-resized.jpg", "../img/123_y_m_n_a-resized.jpg", "../img/127_y_m_n_a-resized.jpg",
    "../img/135_y_m_n_a-resized.jpg", "../img/144_y_m_n_a-resized.jpg", "../img/147_y_m_n_a-resized.jpg", "../img/167_y_m_n_a-resized.jpg",
    "../img/170_y_m_n_a-resized.jpg", "../img/175_y_m_n_a-resized.jpg", "../img/031_y_m_n_a-resized.jpg", "../img/037_y_m_n_a-resized.jpg"
];
var faces_weisz_europaeisch_randomized = jsPsych.randomization.repeat(faces_weisz_europaeisch, 1);

var faces_weisz_europaeisch_old = [
];
for (let i = 0; i < 12; i++) {
    faces_weisz_europaeisch_old.push(faces_weisz_europaeisch_randomized[i]);
};
var faces_weisz_europaeisch_new = [
];
for (let i = 12; i < 24; i++) {
    faces_weisz_europaeisch_new.push(faces_weisz_europaeisch_randomized[i]);
};

var faces_nahost_arabisch = [
    "../img/7-resized.jpg", "../img/8-resized.jpg", "../img/14-resized.jpg", "../img/44resize.jpg",
    "../img/21-resized.jpg", "../img/28-resized.jpg", "../img/36-resized.jpg", "../img/51-resized.jpg",
    "../img/59-resized.jpg", "../img/67-resized.jpg", "../img/75-resized.jpg", "../img/82-resized.jpg",
    "../img/90-resized.jpg", "../img/107-resized.jpg", "../img/114-resized.jpg", "../img/121-resized.jpg",
    "../img/128-resized.jpg", "../img/154-resized.jpg", "../img/162-resized.jpg", "../img/188-resized.jpg",
    "../img/196-resized.jpg", "../img/235-resized.jpg", "../img/242-resized.jpg", "../img/277-resized.jpg"
];
var faces_nahost_arabisch_randomized = jsPsych.randomization.repeat(faces_nahost_arabisch, 1);

var faces_nahost_arabisch_old = [
];
for (let i = 0; i < 12; i++) {
    faces_nahost_arabisch_old.push(faces_nahost_arabisch_randomized[i]);
}

var faces_nahost_arabisch_new = [
];
for (let i = 12; i < 24; i++) {
    faces_nahost_arabisch_new.push(faces_nahost_arabisch_randomized[i]);
}

var faces_new_all = faces_weisz_europaeisch_new.concat(faces_nahost_arabisch_new);

var imgrt = ["../img/blue.png", "../img/orange.png"]; // Bilder für die Reaktionszeitaufgabe

// Arrays Berufe und Straftaten

// Berufsgruppen und Straftaten für nahöstlich-arabisches Erscheinungsbild
var Berufe_nahoestlich_arabisch = [
    "Diese Person ist von Beruf Lkw-Fahrer.",
    "Diese Person ist von Beruf Maurer.",
    "Diese Person ist von Beruf Schneider.",
    "Diese Person ist von Beruf Geologe.",
    "Diese Person ist von Beruf Jurist.",
    "Diese Person ist von Beruf Steuerberater."
];
var Straftaten_nahoestlich_arabisch = [
    "Diese Person wurde wegen Taschendiebstahls verurteilt.",
    "Diese Person wurde wegen Körperverletzung verurteilt.",
    "Diese Person wurde wegen eines Verstoßes gegen das Waffengesetz verurteilt.",
    "Diese Person wurde wegen einer Urheberrechtsverletzung verurteilt.",
    "Diese Person wurde wegen Korruption verurteilt.",
    "Diese Person wurde wegen eines Verstoßes gegen das Arzneimittelgesetz verurteilt."
];

var berstr_nahoestlich_arabisch = Berufe_nahoestlich_arabisch.concat(Straftaten_nahoestlich_arabisch);

// Berufsgruppen und Straftaten für weiß-europäisches Erscheinungsbild
var Berufe_weisz_europaeisch = [
    "Diese Person ist von Beruf Steuerberater.",
    "Diese Person ist von Beruf Jurist.",
    "Diese Person ist von Beruf Wirtschaftswissenschaftler.",
    "Diese Person ist von Beruf Gebäudereiniger.",
    "Diese Person ist von Beruf Buchbinder.",
    "Diese Person ist von Beruf Fliesenleger."
];
var Straftaten_weisz_europaeisch = [
    "Diese Person wurde wegen Stalkings verurteilt.",
    "Diese Person wurde wegen Beleidigung verurteilt.",
    "Diese Person wurde wegen Veruntreuung von Geldern verurteilt.",
    "Diese Person wurde wegen Bedrohung verurteilt.",
    "Diese Person wurde wegen Mordes verurteilt.",
    "Diese Person wurde wegen eines Verstoßes gegen das Waffengesetz verurteilt."
];

var berstr_weisz_europaeisch = Berufe_weisz_europaeisch.concat(Straftaten_weisz_europaeisch);

// Codes Pilotstudie
const codes = [
    "5HC4", "0WR7", "5NI4", "1EU6", "1mna", "1AI6", "1DI8", "1IN7", "0SD3",
    "2HN7", "0BR6", "5IS7", "9UR3", "2HE5", "3AU7", "3AT7", "1CE5", "0UN5",
    "3AU5", "1IL5", "2UT3", "2TI7", "1AC8", "1PI7", "8BC4", "2AN3", "1JH7",
    "1JN5", "1KM8", "5JR6", "1GR7", "1EC8", "2ND4", "2NG5", "0ND6", "3PC5",
    "0AE5", "1SE6", "2AN6", "1KO9", "1FM8", "1ST4"
];

// Initialisierung und Zuweisung Memory und Recogniton Timeline Variables
var timeline_extinction = [];
var timeline_test = [];


// Extinction-Timeline füllen
for (let i in faces_nahost_arabisch_old) {
    timeline_extinction.push({
        face: faces_nahost_arabisch_old[i],
        berstr: berstr_nahoestlich_arabisch[i]
    },);
}

for (let i in faces_weisz_europaeisch_old) {
    timeline_extinction.push({
        face: faces_weisz_europaeisch_old[i],
        berstr: berstr_weisz_europaeisch[i]
    },);
}

// Test-Timeline füllen
for (let i in faces_nahost_arabisch_old) {
    timeline_test.push({
        face: faces_nahost_arabisch_old[i],
        berstr: berstr_nahoestlich_arabisch[i]
    },);
}

for (let i in faces_weisz_europaeisch_old) {
    timeline_test.push({
        face: faces_weisz_europaeisch_old[i],
        berstr: berstr_weisz_europaeisch[i]
    },);
}

for (let i in faces_new_all) {
    timeline_test.push({
        face: faces_new_all[i],
        berstr: "kein BeStr"
    },);
}



// -- Timeline----------------------------------------------------------------------------------------------------------------
// Preload
var preload = {
    type: jsPsychPreload,
    auto_preload: true
};


// Erste Instruktionen

const instructions = {
    type: jsPsychInstructions,
    pages: [
        ` <div class="instructions">
        <b><h3> Vielen Dank für Ihr Interesse an dieser Studie. </h3></b>
        In dieser Studie möchten wir untersuchen, wie Informationen über Berufsgruppen und 
        Straftaten die Wahrnehmung und Sympathie gegenüber verschiedenen Personen beeinflussen. <br> <br>
        Die Ergebnisse dieser Studie können dazu beitragen, unser Verständnis darüber zu vertiefen,
        wie Kontextinformationen unsere Einstellungen beeinflussen. Ihre Teilnahme ist daher von 
        großer Bedeutung für die Forschung im Bereich der Einstellungsforschung. <br> <br>
        Die Befragung wird etwa 45 Minuten in Anspruch nehmen. <br> <br>
        Psychologiestudierende der Universität Heidelberg haben die Möglichkeit, für ihre Teilnahme 
        0,75 Versuchspersonenstunden zu erhalten. <br> <br>
        Bitte wählen Sie für die Durchführung einen ruhigen Ort, an dem Sie nicht gestört werden,
        und führen Sie die Studie auf einem Laptop durch. </div>`,
    ],
    show_clickable_nav: true,
    button_label_next: "Weiter",
    allow_backward: false,
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
      }
}

var codeErstellen = {
    type: jsPsychSurveyHtmlForm,
    preamble:
      `<div class="instructions"><h3> <b>Teilnahmevoraussetzungen</b> </h3>  
        Um an der Studie teilzunehmen, bitten wir Sie, einen vierstelligen Code zu erstellen,
        basierend auf den nachfolgend gestellten Fragen. Dieser Code dient der Anonymisierung Ihrer 
        Daten. <br> <br>
        Mit Hilfe dieses Codes können wir Psychologiestudierenden der Universität Heidelberg Ihre 
        Versuchspersonenstunden zukommen lassen, ohne dass Ihre Daten mit Ihrer Person in
        Verbindung gebracht werden können. <b> Bitte notieren Sie sich diesen Code schriftlich für 
        später! </b> <br><br>
        1. Wie lautet die erste Ziffer Ihres Geburtsdatums ? <br>
            2. Wie lautet der erste Buchstabe des Vornamens Ihrer Mutter ? <br>
            3. Wie lautet der dritte Buchstabe Ihres Geburtsorts ? <br>
            4. Wie viele Buchstaben hat der Vorname Ihres Vaters ?
        </div>`
    ,   
    html: `
    <div class="instructions">
    <p> Code: <input name="code" type="text" required="true"/>
    </div>`,
    on_finish: function(data) {
        // Zugriff auf die Eingabe
        var eingabe = data.response.code.toUpperCase();
        
        // Verarbeiten der Eingabe (hier z.B. Überprüfung, ob der Code in codes enthalten ist)
        if (codes.includes(eingabe)) {
            Teilnahme_Pilotstudie = 'Ja';
        }
        
        // Entfernen der sensiblen Eingabe aus dem finalen Datensatz
        data.response = {};

        // Fortschritt erhöhen
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
}



var einverstaendniserklaerung = {
    type: jsPsychSurveyHtmlForm,
    preamble: ` <div class="instructions">
    <h3> <b> Erhebung und Verarbeitung personenbezogener Daten </b> </h3>  
        Die Teilnahme an dieser Studie erfordert die Erhebung und Verarbeitung personenbezogener 
        Daten . <br> <br> Alle erhobenen Daten werden vertraulich behandelt und anonymisiert. Es können 
        keine Rückschlüsse auf einzelne <br> Teilnehmer * innen gezogen werden. <br> <br> 
        Die erhobenen Daten werden ausschließlich für wissenschaftliche Zwecke verwendet. 
        Die Teilnahme an dieser Studie ist freiwillig. <br> <br>  Sie können Ihre Teilnahme jederzeit ohne 
        Angabe von Gründen beenden. <br> <br> Das vorzeitige Beenden dieser Studie hat zudem keine 
        negativen Konsequenzen für Sie. <br> <br> <br> </div>
        `,
    html: ` <div class="instructions"> <i> Ich erkläre mich mit der Erhebung und Verarbeitung meiner personenbezogenen Daten einverstanden <i>.
     <input type="checkbox" id="consent-checkbox" required>
         <br> <br>
         </div>`,
         on_finish: function(){
            for (let i = 0; i < 4; i++) {
                incrementProgress();
            }
          }

}

const instructions_1 = {
    type: jsPsychInstructions,
    pages: [
        `<div class="instructions">
        <h3> Instruktionen </h3> 
        Im Folgenden werden Ihnen nacheinander Bilder von verschiedenen Personen gezeigt. 
        Zusätzlich erhalten Sie Informationen darüber, ob die Person einer bestimmten Berufsgruppe 
        angehört oder ob sie eine bestimmte Straftat begangen hat. Danach sollen Sie auf einer 7-
        stufigen Ratingskala angeben, wie sympathisch Sie die Person finden. <br> <br> 
        Bitte versuchen Sie spontan und ehrlich zu antworten. Es gibt keine richtigen oder falschen 
        Antworten. Falls Sie unsicher sind, wählen Sie bitte die Antwortmöglichkeit, die Ihrer 
        Einschätzung am nächsten kommt.
        Auf der nächsten Seite wird Ihnen eine Beispielfrage präsentiert, um Sie mit dem Format 
        vertraut zu machen. <br> <br> 
        Nachdem Sie die Instruktionen gelesen haben, geben Sie bitte an, ob Sie sie verstanden 
        haben <br> <br> 
       </div>`
    ],
    show_clickable_nav: true,
    button_label_next: "Zur Beispielaufgabe",
    allow_backward: false,
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
      }

}

var instruktionenVerstanden = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<div class="instructions">
    <h3> <b> Beispielaufgabe </b> </h3>  
        Im Folgenden wird Ihnen ein Beispiel für das Frageformat gezeigt. <br> <br> 
        Bitte bewerten Sie zu dem dargebotenen Bild die folgende Aussage: <br> <br> 
        <img src="../img/foto_beispielaufgabe.jpg"> <br> <br>
        „Diese Person ist sympathisch." <br> <br>
        Die möglichen Antwortmöglichkeiten sind: <br> 1 = stimme überhaupt nicht zu <br>  2 = stimme gar 
        nicht zu 3 <br>  = stimme nicht zu <br>  4 = neutral <br>  5 = stimme zu <br>  6 = stimme stark zu <br> 7 = stimme 
        absolut zu
        </div>`,
    html: `<i> Ich habe die Instruktionen der Studie verstanden. <i>
     <input type="checkbox" id="consent-checkboxInstructions" required>
         <br> <br>
         `,
         on_finish: function(){
            for (let i = 0; i < 4; i++) {
                incrementProgress();
            }
          }
        }

var instructions1_2 = {
    type: jsPsychInstructions,
    pages: [
        `<div class="instructions">
        <h3> <b> Beginn der Untersuchung </b> </h3>
        Jetzt beginnt die eigentliche Untersuchung. Es werden Ihnen nacheinander Bilder und 
        zusätzliche Informationen zu den abgebildeten Personen präsentiert. Bitte bewerten Sie nach 
        der Betrachtung jedes Bildes die darunter stehende Aussage. Nachdem Sie alle Bilder 
        bewertet haben, erhalten Sie weitere Informationen zu den folgenden Aufgaben.
        </div>`
    ],
    show_clickable_nav: true,
    button_label_next: "Untersuchung beginnen",
    allow_backward: false,
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
      }

}

var preload2 = {
    type: jsPsychPreload,
    images: timeline_extinction.map(variable => variable.face)
};

// Trial-Sequenz für jedes Bild-Wort-Paar
const extinction_phase = {
    timeline: [
        {
            type: jsPsychHtmlSliderResponse,
            stimulus: function() {
                const html = `
            <img src="${jsPsych.evaluateTimelineVariable('face', true)}">
            <p style="font-size: 20px; margin-top: -10px">${jsPsych.evaluateTimelineVariable('berstr', true)}</p>
            <p style="font-size: 16px; margin-bottom: 5px">Diese Person ist mir sympathisch</p>`;
                return html;
            },
            labels: ['<div style="font-size: 10px;"> stimme überhaupt nicht zu</div>',
                 '<div style="font-size: 10px;">stimme gar nicht zu</div>', 
                 '<div style="font-size: 10px;">stimme nicht zu</div>', 
                 '<div style="font-size: 10px;">neutral</div>', 
                 '<div style="font-size: 10px;">stimme zu</div>', 
                 '<div style="font-size: 10px;">stimme stark zu</div>', 
                 '<div style="font-size: 10px;">stimme absolut zu</div>'],
            min: 1,
            max: 7,
            slider_start: 4,
            slider_width: 800,
            require_movement: true,
            on_finish: function(){
                for (let i = 0; i < 4; i++) {
                    incrementProgress();
                }
              }
        }
    ],
    timeline_variables: timeline_extinction,
    randomize_order: true
};


// Reaktionszeit-Aufgabe
// Instruktion Reaktionszeit-Aufgabe
var instructions_2 = {
    type: jsPsychInstructions,
    // HTML der Instruktionsseite --> Anzeigen der Kreise
    pages: [` 
<div class="instruction-container">
  <h3> Instruktion Arbeitsgedächtnisaufgabe</h3> 
<p> Vielen Dank für die Bewertung der dargebotenen Bilder. Da wir in unserer Studie unter 
anderem Arbeitsgedächtnisprozesse erfassen möchten, bitten wir Sie, nun folgende Aufgabe 
zu bearbeiten: </p> 
<p> In dieser Aufgabe erscheint ein Kreis in der Mitte des Bildschirms.
  <div class="circle-container">
    <div class="circle-item">
      <img src="../img/blue.png" alt="Blue Circle" width="200" height="200"> <!-- Increased size of circle image -->
      <p class="small"><strong>Wenn der Kreis blau ist, <br>drücken Sie so schnell wie möglich die Taste F auf der Tastatur.</strong></p>
    </div>
    <div class="circle-item">
      <img src="../img/orange.png" alt="Orange Circle" width="200" height="200"> <!-- Increased size of circle image -->
      <p class="small"><strong>Wenn der Kreis orange ist, <br> drücken Sie so schnell wie möglich die Taste J</strong></p>
    </div>
  </div>
</div>
`],
    button_label_next: "Aufgabe starten",
    show_clickable_nav: true,
    allow_backward: false,
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
      }
};



// Initialisierung und Zuweisung der Stimuli
var test_stimuli = [
    { stimulus: "../img/blue.png", correct_response: 'f' },
    { stimulus: "../img/orange.png", correct_response: 'j' }
];

// Initialisierung und Zuweisung der Stimuli
var test_stimuli = [
    { stimulus: "../img/blue.png", correct_response: 'f' },
    { stimulus: "../img/orange.png", correct_response: 'j' }
];

// Fixationskreuz
var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: "NO_KEYS",
    trial_duration: function () {
        return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
    }

};

var incrementRT = 0;
// Kreis
var test = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['f', 'j'],
};


// Durchführen des Trials für 3 Minuten
var ProgressRTTask = 0;
var RestProgressRTTask = 0;
var startTime = null;
var test_procedure = {
    timeline: [fixation, test],
    timeline_variables: test_stimuli,
    randomize_order: true,
    loop_function: function () {
        if (!startTime) {
            startTime = new Date().getTime();
        }
        var currentTime = new Date().getTime();
        var elapsedTime = (currentTime - startTime);
        if (elapsedTime >= 10000) { // Zeit in Millisekunden die der Trial geht (Verzögerung beachten, 176000!)
            return false;
        }
        return true;
    },
    on_finish: function(){
        if (ProgressRTTask % 3 === 0 && ProgressRTTask < 150) {
            incrementProgress();
            RestProgressRTTask++;

        }
        ProgressRTTask++;
    }
};


var instructions_3 = {
    type: jsPsychInstructions,
    pages: [
        `<div class="instructions">
        <p> Vielen Dank! Wir kommen nun zur letzten Aufgabe. </p>
        <p> Im Folgenden interessiert uns, wie gut Sie sich an die zuvor gezeigten Gesichter erinnern 
        können. Die Gesichter werden dafür unter anderem mit Bildern von neuen Gesichtern 
        durchmischt und einzeln nacheinander präsentiert. </p>
        <p> Nach jedem Bild werden Sie gebeten anzugeben, ob Sie das Gesicht bereits zuvor gesehen 
        haben und falls ja, aus welchem Kontext. Sollten Sie sich unsicher sein, wählen Sie bitte die 
        Antwort, die am ehesten zutrifft. </p>
</div>`
    ],
    button_label_next: "Aufgabe starten",
    show_clickable_nav: true,
    allow_backward: false,
    on_start: function(trial) {
        var restProgress = (50 - RestProgressRTTask);
        for (let i = 0; i < restProgress; i++) {
            incrementProgress();
        }
    },
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
      }
};

var preload3 = {
    type: jsPsychPreload,
    images: timeline_test.map(variable => variable.face)
};

var test_phase = {
    timeline: [
        {
                type: jsPsychImageButtonResponse,
                stimulus: jsPsych.timelineVariable('face'),
                prompt: '<p>Haben Sie diese Person im ersten Durchgang gesehen?</p>',
                choices: ['Nein', 'Ja, ich habe etwas über deren Straftat erfahren', 'Ja, ich habe etwas über deren Beruf erfahren.'],
                // Hier werden die Timeline-Variablen explizit in den Trial-Daten gespeichert:
                data: {
                    face: jsPsych.timelineVariable('face'),
                    berstr: jsPsych.timelineVariable('berstr')
                },
                on_finish: function (data) {
                    for (let i = 0; i < 4; i++) {
                        incrementProgress();
                    }
                    
                    var currentface = data.face;
                    var isBerOrStr = data.berstr;
                    var response = parseInt(data.response);
                    
                    
                
                    if (faces_new_all.includes(currentface)) {
                        if (response === 0) { // Antwort "Neu"
                            if (faces_nahost_arabisch_new.includes(currentface)) {
                                co_ans_neu_corr_neu_na++;
                            } else if (faces_weisz_europaeisch_new.includes(currentface)) {
                                co_ans_neu_corr_neu_we++;
                            }
                        } else if (response === 1) { // Antwort "Straftat"
                            if (faces_nahost_arabisch_new.includes(currentface)) {
                                fa_ans_str_corr_neu_na++;
                            } else if (faces_weisz_europaeisch_new.includes(currentface)) {
                                fa_ans_str_corr_neu_we++;
                            }
                        } else if (response === 2) { // Antwort "Beruf"
                            if (faces_nahost_arabisch_new.includes(currentface)) {
                                fa_ans_be_corr_neu_na++;
                            } else if (faces_weisz_europaeisch_new.includes(currentface)) {
                                fa_ans_be_corr_neu_we++;
                            }
                        }
                    } else if (faces_weisz_europaeisch_old.includes(currentface)) {
                        if (response === 0) { // Antwort "Neu"
                            if (Berufe_weisz_europaeisch.includes(isBerOrStr)) {
                                fa_ans_neu_corr_be_we++;
                            } else if (Straftaten_weisz_europaeisch.includes(isBerOrStr)) {
                                fa_ans_neu_corr_str_we++;
                            }
                        } else if (response === 1) { // Antwort "Straftat"
                            if (Berufe_weisz_europaeisch.includes(isBerOrStr)) {
                                fa_ans_str_corr_be_we++;
                            } else if (Straftaten_weisz_europaeisch.includes(isBerOrStr)) {
                                co_ans_str_corr_str_we++;
                            }
                        } else if (response === 2) { // Antwort "Beruf"
                            if (Berufe_weisz_europaeisch.includes(isBerOrStr)) {
                                co_ans_be_corr_be_we++;
                            } else if (Straftaten_weisz_europaeisch.includes(isBerOrStr)) {
                                fa_ans_be_corr_str_we++;
                            }
                        }
                    } else if (faces_nahost_arabisch_old.includes(currentface)) {
                        if (response === 0) { // Antwort "Neu"
                            if (Berufe_nahoestlich_arabisch.includes(isBerOrStr)) {
                                fa_ans_neu_corr_be_na++;
                            } else if (Straftaten_nahoestlich_arabisch.includes(isBerOrStr)) {
                                fa_ans_neu_corr_str_na++;
                            }
                        } else if (response === 1) { // Antwort "Straftat"
                            if (Berufe_nahoestlich_arabisch.includes(isBerOrStr)) {
                                fa_ans_str_corr_be_na++;
                            } else if (Straftaten_nahoestlich_arabisch.includes(isBerOrStr)) {
                                co_ans_str_corr_str_na++;
                            }
                        } else if (response === 2) { // Antwort "Beruf"
                            if (Berufe_nahoestlich_arabisch.includes(isBerOrStr)) {
                                co_ans_be_corr_be_na++;
                            } else if (Straftaten_nahoestlich_arabisch.includes(isBerOrStr)) {
                                fa_ans_be_corr_str_na++;
                            }
                        }
                    }
                }
            }      
    ],
    timeline_variables: timeline_test,
    randomize_order: true,
   
};

// IAT 
// Block: Einführung & Kategorien
var instructions_iat = {
    type: jsPsychInstructions,
    pages: [
        `<div class="instructions">
        Im Folgenden bitten wir Sie, verschiedene Begriffe den passenden Kategorien zuzuordnen.<br><br>
        Versuchen Sie bitte so schnell und genau wie möglich zu entscheiden, welcher Begriff zu welcher Kategorie gehört. Ihre Auswahl treffen Sie durch das Drücken der Computertasten <b>E</b> und <b>I</b>.<br><br>
        Vor jedem Durchgang erhalten Sie eine kurze Anleitung, welche Taste für welche Kategorie steht. Bitte lesen Sie diese Instruktionen sorgfältig durch. In einigen Durchgängen sind die Tasten jeweils mit zwei Kategorien verknüpft. Anschließend werden Ihnen die Begriffe nacheinander angezeigt.<br><br>
        Auf der nächsten Seite lernen Sie zunächst die Begriffe und Kategorien kennen.
        </div>`
    ],
    show_clickable_nav: true,
    button_label_next: "Weiter",
    allow_backward: false,
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var category_block = {
    type: jsPsychInstructions,
    pages: [
        `<div class="instructions">
        Als Nächstes werden Sie die Computertasten <b> E </b> und <b> I </b> verwenden, um die Begriffe so schnell wie möglich den entsprechenden Kategorien zuzuordnen.<br><br>
        Dies sind die vier Kategorien und die dazugehörigen Begriffe:<br><br>
        <strong>Gut:</strong><br>
        Triumph, Freundschaft, Fröhlich, Lachen, Freude, Glücklich, Freudig, Freund<br><br>
        <strong>Schlecht:</strong><br>
        Schmerz, Verletzend, Hass, Schrecklich, Schmutzig, Hässlich, Misserfolg, Wütend<br><br>
        <strong>Arabisch-muslimische Namen:</strong><br>
        Hakim, Sharif, Youssef, Wahib, Akbar, Muhsin, Salim, Karim, Habib, Ashraf<br><br>
        <strong>Weiße europäische Namen:</strong><br>
        Ernesto, Matthias, Maarten, Phillipe, Guillaume, Benoît, Takuya, Kazuki, Chaiyo, Marcelo
        </div>`
    ],
    show_clickable_nav: true,
    button_label_next: "Weiter",
    allow_backward: false,
    on_finish: function() {
        for (let i = 0; i < 2; i++) {
            incrementProgress();
        }
    }
};

// Block 1: Instruktion Block 1 & zugehöriger Trial-Block
var instructions_block = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="instructions">
    Legen Sie einen Finger der linken Hand auf die <b>E</b>-Taste für Begriffe, die zur Kategorie <strong>Arabisch-muslimische Namen</strong> gehören.<br><br>
    Legen Sie einen Finger der rechten Hand auf die <b>I</b>-Taste für Begriffe, die zur Kategorie <strong>Weiße europäische Namen</strong> gehören.<br><br>
    Die Begriffe erscheinen nacheinander.<br><br>
    Falls Sie einen Fehler machen, wird ein rotes <b>X</b> angezeigt. Drücken Sie die unten angegebene Taste, um fortzufahren. Versuchen Sie, so schnell wie möglich zu sein, während Sie genau bleiben.<br><br>
    Drücken Sie <b>Enter</b>, wenn Sie bereit sind zu starten.
    </div>`,
    choices: ['Enter'],
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var trial_block = {
    timeline: [
        {
            type: jsPsychIatHtml,
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>Falls Sie einen Fehler machen, erscheint ein rotes <b>X</b>. Drücken Sie die andere Taste, um fortzufahren.</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000,
            left_category_key: 'e',
            right_category_key: 'i',
            left_category_label: ['Arabisch-muslimische Namen'],
            right_category_label: ['Weiße europäische Namen'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { stimulus: "Hakim", stim_key_association: "left" },
        { stimulus: "Sharif", stim_key_association: "left" },
        { stimulus: "Youssef", stim_key_association: "left" },
        { stimulus: "Wahib", stim_key_association: "left" },
        { stimulus: "Akbar", stim_key_association: "left" },
        { stimulus: "Muhsin", stim_key_association: "left" },
        { stimulus: "Salim", stim_key_association: "left" },
        { stimulus: "Habib", stim_key_association: "left" },
        { stimulus: "Ashraf", stim_key_association: "left" },
        { stimulus: "Muhsin", stim_key_association: "left" },
        { stimulus: "Ernesto", stim_key_association: "right" },
        { stimulus: "Matthias", stim_key_association: "right" },
        { stimulus: "Maarten", stim_key_association: "right" },
        { stimulus: "Phillipe", stim_key_association: "right" },
        { stimulus: "Guillaume", stim_key_association: "right" },
        { stimulus: "Benoît", stim_key_association: "right" },
        { stimulus: "Takuya", stim_key_association: "right" },
        { stimulus: "Kazuki", stim_key_association: "right" },
        { stimulus: "Chaiyo", stim_key_association: "right" },
        { stimulus: "Marcelo", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 2,
    on_finish: function(){
        incrementProgress();
    } 
};

// Block 2: Instruktion Block 2 & zugehöriger Trial-Block
var instructions_block2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="instructions">
    Legen Sie einen Finger der <b>linken Hand</b> auf die <b>E</b>-Taste für Begriffe, die zur Kategorie <strong>Schlecht</strong> gehören.<br><br>
    Legen Sie einen Finger der <b>rechten Hand</b> auf die <b>I</b>-Taste für Begriffe, die zur Kategorie <strong>Gut</strong> gehören.<br><br>
    Die Begriffe erscheinen nacheinander.<br><br>
    Falls Sie einen Fehler machen, wird ein rotes <b>X</b> angezeigt. Drücken Sie die unten angegebene Taste, um fortzufahren. Versuchen Sie, so schnell wie möglich zu sein, während Sie genau bleiben.<br><br>
    Drücken Sie <b>Enter</b>, wenn Sie bereit sind zu starten.
    </div>`,
    choices: ['Enter'],
    on_finish: function(){
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var trial_block2 = {
    timeline: [
        {
            type: jsPsychIatHtml,
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>Falls Sie einen Fehler machen, erscheint ein rotes <b>X</b>. Drücken Sie die andere Taste, um fortzufahren.</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000,
            left_category_key: 'e',
            right_category_key: 'i',
            left_category_label: ['Schlecht'],
            right_category_label: ['Gut'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { stimulus: "Schmerz", stim_key_association: "left" },
        { stimulus: "Verletzend", stim_key_association: "left" },
        { stimulus: "Hass", stim_key_association: "left" },
        { stimulus: "Schmutzig", stim_key_association: "left" },
        { stimulus: "Misserfolg", stim_key_association: "left" },
        { stimulus: "Wütend", stim_key_association: "left" },
        { stimulus: "Schrecklich", stim_key_association: "left" },
        { stimulus: "Hässlich", stim_key_association: "left" },
        { stimulus: "Triumph", stim_key_association: "right" },
        { stimulus: "Freundschaft", stim_key_association: "right" },
        { stimulus: "Fröhlich", stim_key_association: "right" },
        { stimulus: "Lachen", stim_key_association: "right" },
        { stimulus: "Freude", stim_key_association: "right" },
        { stimulus: "Glücklich", stim_key_association: "right" },
        { stimulus: "Freudig", stim_key_association: "right" },
        { stimulus: "Freund", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 2,
    on_finish: function(){
        incrementProgress();
    } 
};

// Block 3: Instruktion Block 3 & zugehöriger Trial-Block
var instructions_block3 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="instructions">
    Verwenden Sie die Taste <strong>E</strong> für <strong>Schlecht</strong> und für <strong>Arabisch-muslimische Namen</strong>.<br><br>
    Verwenden Sie die Taste <strong>I</strong> für <strong>Gut</strong> und für <strong>Weiße europäische Namen</strong>.<br><br>
    Jeder Begriff gehört nur zu einer Kategorie.<br><br>
    Falls Sie einen Fehler machen, wird ein rotes <b>X</b> angezeigt. Drücken Sie die unten angegebene Taste, um fortzufahren. Versuchen Sie, so schnell wie möglich zu sein, während Sie genau bleiben.<br><br>
    Drücken Sie <b>Enter</b>, wenn Sie bereit sind zu starten.
    </div>`,
    choices: ['Enter'],
    on_finish: function(){
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var trial_block3 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>Falls Sie einen Fehler machen, erscheint ein rotes <b>X</b>. Drücken Sie die andere Taste, um fortzufahren.</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000,
            left_category_key: 'e',
            right_category_key: 'i',
            left_category_label: ['Schlecht', 'Arabisch-muslimische Namen'],
            right_category_label: ['Gut', 'Weiße europäische Namen'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { type: jsPsychIatHtml, stimulus: "Hakim", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Sharif", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Youssef", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Wahib", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Akbar", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Salim", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Habib", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Ashraf", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Ernesto", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Matthias", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Maarten", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Phillipe", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Guillaume", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Benoît", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Takuya", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Kazuki", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Chaiyo", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Marcelo", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Schmerz", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Verletzend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hass", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schmutzig", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Misserfolg", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Wütend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schrecklich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hässlich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Triumph", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freundschaft", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Fröhlich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Lachen", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freude", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Glücklich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freudig", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freund", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 1,
    on_finish: function(){
        incrementProgress();
    }
};

// Block 4: Instruktion Block 4 & zugehöriger Trial-Block
var instructions_block4 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="instructions">
    Verwenden Sie die Taste <strong>E</strong> für <strong>Schlecht</strong> und für <strong>Arabisch-muslimische Namen</strong>.<br><br>
    Verwenden Sie die Taste <strong>I</strong> für <strong>Gut</strong> und für <strong>Weiße europäische Namen</strong>.<br><br>
    Jeder Begriff gehört nur zu einer Kategorie.<br><br>
    Falls Sie einen Fehler machen, wird ein rotes <b>X</b> angezeigt. Drücken Sie die unten angegebene Taste, um fortzufahren. Versuchen Sie, so schnell wie möglich zu sein, während Sie genau bleiben.<br><br>
    Drücken Sie <b>Enter</b>, wenn Sie bereit sind zu starten.
    </div>`,
    choices: ['Enter'],
    on_finish: function(){
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var trial_block4 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>Falls Sie einen Fehler machen, erscheint ein rotes <b>X</b>. Drücken Sie die andere Taste, um fortzufahren.</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000,
            left_category_key: 'e',
            right_category_key: 'i',
            left_category_label: ['Schlecht', 'Arabisch-muslimische Namen'],
            right_category_label: ['Gut', 'Weiße europäische Namen'],
            response_ends_trial: true,
            data: { iat_type: 'bad-Arabic Muslims' }
        }
    ],
    timeline_variables: [
        { type: jsPsychIatHtml, stimulus: "Hakim", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Sharif", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Youssef", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Wahib", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Akbar", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Salim", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Habib", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Ashraf", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Ernesto", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Matthias", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Maarten", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Phillipe", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Guillaume", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Benoît", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Takuya", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Kazuki", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Chaiyo", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Marcelo", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Schmerz", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Verletzend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hass", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schmutzig", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Misserfolg", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Wütend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schrecklich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hässlich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Triumph", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freundschaft", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Fröhlich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Lachen", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freude", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Glücklich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freudig", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freund", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 2,
    on_finish: function(){
        incrementProgress();
    }
};

// Block 5: Instruktion Block 5 & zugehöriger Trial-Block
var instructions_block5 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="instructions">
    <b>Achtung, die Zuordnungen haben sich geändert!</b><br><br>
    Verwenden Sie die Taste <strong>E</strong> für <strong>Weiße europäische Namen</strong>.<br><br>
    Verwenden Sie die Taste <strong>I</strong> für <strong>Arabisch-muslimische Namen</strong>.<br><br>
    Falls Sie einen Fehler machen, wird ein rotes <b>X</b> angezeigt. Drücken Sie die unten angegebene Taste, um fortzufahren. Versuchen Sie, so schnell wie möglich zu sein, während Sie genau bleiben.<br><br>
    Drücken Sie <b>Enter</b>, wenn Sie bereit sind zu starten.
    </div>`,
    choices: ['Enter'],
    on_finish: function(){
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var trial_block5 = {
    timeline: [
        {
            type: jsPsychIatHtml,
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>Falls Sie einen Fehler machen, erscheint ein rotes <b>X</b>. Drücken Sie die andere Taste, um fortzufahren.</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000,
            left_category_key: 'e',
            right_category_key: 'i',
            left_category_label: ['Weiße europäische Namen'],
            right_category_label: ['Arabisch-muslimische Namen'],
            response_ends_trial: true,
            data: { iat_type: 'umgekehrt' }
        }
    ],
    timeline_variables: [
        { type: jsPsychIatHtml, stimulus: "Hakim", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Sharif", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Youssef", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Wahib", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Akbar", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Salim", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Habib", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Ashraf", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Ernesto", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Matthias", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Maarten", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Phillipe", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Guillaume", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Benoît", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Takuya", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Kazuki", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Chaiyo", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Marcelo", stim_key_association: "left" }
    ],
    randomize_order: true,
    repetitions: 2,
    on_finish: function(){
        incrementProgress();
    }
};

// Block 6: Instruktion Block 6 & zugehöriger Trial-Block
var instructions_block6 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="instructions">
    Verwenden Sie die Taste <strong>E</strong> für <strong>Schlecht</strong> und für <strong>weiße europäische Namen</strong>.<br><br>
    Verwenden Sie die Taste <strong>I</strong> für <strong>Gut</strong> und für <strong>Arabisch-muslimische Namen</strong>.<br><br>
    Falls Sie einen Fehler machen, wird ein rotes <b>X</b> angezeigt. Drücken Sie die unten angegebenen Tasten, um fortzufahren. Versuchen Sie, so schnell wie möglich zu sein, während Sie genau bleiben.<br><br>
    Drücken Sie <b>Enter</b>, wenn Sie bereit sind zu starten.
    </div>`,
    choices: ['Enter'],
    on_finish: function(){
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var trial_block6 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>Falls Sie einen Fehler machen, erscheint ein rotes <b>X</b>. Drücken Sie die andere Taste, um fortzufahren.</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000,
            left_category_key: 'e',
            right_category_key: 'i',
            left_category_label: ['Schlecht', 'weiße europäische Namen'],
            right_category_label: ['Gut', 'Arabisch-muslimische Namen'],
            response_ends_trial: true,
            data: { iat_type: 'gemischt' }
        }
    ],
    timeline_variables: [
        { type: jsPsychIatHtml, stimulus: "Hakim", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Sharif", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Youssef", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Wahib", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Akbar", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Salim", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Habib", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Ashraf", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Ernesto", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Matthias", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Maarten", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Phillipe", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Guillaume", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Benoît", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Takuya", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Kazuki", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Chaiyo", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Marcelo", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Takuya", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Kazuki", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Chaiyo", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Marcelo", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schmerz", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Verletzend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hass", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schmutzig", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Misserfolg", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Wütend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schrecklich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hässlich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Triumph", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freundschaft", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Fröhlich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Lachen", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freude", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Glücklich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freudig", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freund", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 1,
    on_finish: function(){
        incrementProgress();
    }
};

// Block 7: Instruktion Block 7 & zugehöriger Trial-Block
var instructions_block7 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="instructions">
    <b>Dies ist die gleiche Tastenzuweisung wie im vorherigen Abschnitt.</b><br><br>
    Verwenden Sie die Taste <strong>E</strong> für <strong>Schlecht</strong> und für <strong>weiße europäische Namen</strong>.<br><br>
    Verwenden Sie die Taste <strong>I</strong> für <strong>Gut</strong> und für <strong>Arabisch-muslimische Namen</strong>.<br><br>
    Jeder Begriff gehört nur zu einer Kategorie.<br><br>
    Falls Sie einen Fehler machen, wird ein rotes <b>X</b> angezeigt. Drücken Sie die unten angegebene Taste, um fortzufahren. Versuchen Sie, so schnell wie möglich zu sein, während Sie genau bleiben.<br><br>
    Drücken Sie <b>Enter</b>, wenn Sie bereit sind zu starten.
    </div>`,
    choices: ['Enter'],
    on_finish: function(){
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
    }
};

var trial_block7 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>Falls Sie einen Fehler machen, erscheint ein rotes <b>X</b>. Drücken Sie die andere Taste, um fortzufahren.</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000,
            left_category_key: 'e',
            right_category_key: 'i',
            left_category_label: ['Schlecht', 'weiße europäische Namen'],
            right_category_label: ['Gut', 'Arabisch-muslimische Namen'],
            response_ends_trial: true,
            data: { iat_type: 'bad-White European' }
        }
    ],
    timeline_variables: [
        { type: jsPsychIatHtml, stimulus: "Hakim", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Sharif", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Youssef", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Wahib", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Akbar", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Salim", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Habib", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Ashraf", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Muhsin", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Ernesto", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Matthias", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Maarten", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Phillipe", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Guillaume", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Benoît", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Takuya", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Kazuki", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Chaiyo", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Marcelo", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schmerz", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Verletzend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hass", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schmutzig", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Misserfolg", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Wütend", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Schrecklich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Hässlich", stim_key_association: "left" },
        { type: jsPsychIatHtml, stimulus: "Triumph", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freundschaft", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Fröhlich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Lachen", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freude", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Glücklich", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freudig", stim_key_association: "right" },
        { type: jsPsychIatHtml, stimulus: "Freund", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 2,
    on_finish: function(){
        incrementProgress();
    }
};

// Gesamttimeline des IAT
var IAT_trial = {
    timeline: [
        instructions_iat,
        category_block,
        instructions_block,
        trial_block,
        instructions_block2,
        trial_block2,
        instructions_block3,
        trial_block3,
        instructions_block4,
        trial_block4,
        instructions_block5,
        trial_block5,
        instructions_block6,
        trial_block6,
        instructions_block7,
        trial_block7
    ]
};

const survey_trial = {
    type: jsPsychSurvey,
    survey_json: {
      showQuestionNumbers: false,
      title: 'Demografische Daten', // Haupttitel
      completeText: 'Weiter',
      pageNextText: 'Continue',
      pagePrevText: 'Previous',
      pages: [
        {
          name: 'page1',
          title:  `Bevor wir die Studie abschließen, bitten wir Sie, die nachfolgenden Fragen zu Ihrer Person zu beantworten. 
Ihre Angaben werden anonym erfasst und sind nicht auf Ihre Person zurückführbar.`, // Zusätzlicher Titel für die Seite
          description:'',
          elements: [
            {
              type: 'text',
              title: 'Wie alt sind Sie?',
              placeholder: 'Alter',
              name: 'Alter',
              size: 30,
              isRequired: true,
              inputType: 'number',
              min: 1,
              max: 100,
            },
            {
              type: 'radiogroup',
              title: "Mit welcher Geschlechtsidentität identifizieren Sie sich?",
              choices: ['Männlich', 'Weiblich', 'Nicht-binär', 'Andere', 'keine Angabe'],
              colCount: 0,
              name: 'Geschlechtsidentität',
              isRequired: true,
            },
            {
              type: 'text',
              name: 'AndereGeschlechtsidentität',
              visibleIf: "{Geschlechtsidentität} = 'Andere'", 
              title: "Bitte geben Sie Ihre Geschlechtsidentität an:",
              isRequired: true,
            },
            {
              type: 'radiogroup',
              title: "Was ist Ihr höchster Bildungsabschluss?",
              choices: ['Kein Abschluss', 'Hauptschulabschluss', 'Realschulabschluss', 'Fachhochschulreife', 'Allgemeine Hochschulreife (Abitur)', 'Bachelor', 'Master'],
              colCount: 1,
              name: 'Bildungsabschluss',
              isRequired: true,
            },
            {
              type: 'text',
              name: 'BachelorIn',
              visibleIf: "{Bildungsabschluss} = 'Bachelor'", 
              title: "Bachelor in:",
              isRequired: true,
            },
            {   
              type: 'text',
              name: 'MasterIn',
              visibleIf: "{Bildungsabschluss} = 'Master'", 
              title: "Master in:",
              isRequired: true,
            },
            {
              type: 'radiogroup',
              title: "Bitte geben Sie an, ob Sie sich selbst in einem der in dieser Studie dargestellten ethnischen Erscheinungsbilder gelesen fühlen.",
              choices: ['Ja, ich werde als Person mit einem weiß-europäischen Erscheinungsbild gelesen.', 
                'Ja, ich werde als Person mit einem nahöstlichen Erscheinungsbild gelesen.',
                 'Nein, ich werde in keinem der beiden Erscheinungsbilder gelesen.'],
              colCount: 1,
              name: 'Ethnie',
              isRequired: true,
            },
          ]
        }

      ]

    },
    on_finish: function(){
        for (let i = 0; i < 6; i++) {
            incrementProgress();
        }
      }

  };
  
  var debrief = {
    type: jsPsychInstructions,
    pages: [
      `<div class="instructions" style="max-width: 650px; margin: 0 auto; line-height:1.6;">
        <p>Vielen Dank für Ihre Teilnahme an unserer Studie!</p>
  
        <p>
          Diese Studie untersucht, wie kriminelle (Verbrechen) und nicht kriminelle (Berufe)
            Verhaltensbeschreibungen zusammen mit dem äußeren Erscheinungsbild einer Person das
            Wiedererkennen und Zuordnen deren Gesichter beeinflussen. Dabei überprüfen wir,
            inwieweit stereotypische Annahmen über bestimmte Personengruppen die Gedächtnisleistung
            von Personen beeinflussen und möglicherweise zu Verzerrungen führen.
        </p>
        
        <p>
          In einer vorherigen Pilotstudie wurde hierfür untersucht, welche Berufe und Verbrechen von
            einer weißen deutschen Person als stereotypisch für verschiedene Personen wahrgenommen
            werden, die aufgrund ihres äußeren Erscheinungsbildes zu bestimmten ethnischen Gruppen
            zugeordnet werden. <br>
            Die Darbietung der Gesichter in Verbindung mit bestimmten Berufsgruppen und Verbrechen
            spiegelt somit nur die stereotypischen Annahmen aus der Pilotstudie wider und stellt <b>keine
            tatsächlichen Zusammenhänge</b> dar. 
        </p>
        
        <p>
          Bitte beachten Sie, dass die verwendeten Stereotype rassistische Vorurteile und Narrative
            widerspiegeln können, die in dieser Studie untersucht werden. 
        </p>
        
        <p>
          Die Erforschung solcher Stereotype ist besonders wichtig, da sie das Gedächtnis von
            Augenzeug*innen einer Straftat beeinflussen können und somit zu falschen Aussagen und
            Fehlurteilen vor Gericht führen können.
        </p>
        
        <p>
          Unser Ziel ist es daher genauer zu untersuchen, wie das Erscheinungsbild einer Person und
            stereotypische Annahmen zu deren Verhalten das Gedächtnis von Augenzeug*innen
            beeinflussen, um somit Fehlverurteilungen von unschuldigen Personen besser vorbeugen und
            zu können. 
        </p>

        <p>
            Ihre Teilnahme ist daher ein wichtiger Beitrag zu dieser Forschung. Wir danken Ihnen
            vielmals für Ihre Unterstützung. 
        </p>

        <p>
            Wir bitten Sie, mit Personen, die noch an dieser Studie teilnehmen möchten, <b>nicht</b> über deren
            Inhalte zu sprechen, bis diese Personen die Studie selbst abgeschlossen haben. Vielen Dank. 
        </p>

        <p>
        Auf der folgenden Seite können Sie auswählen, ob Sie an der Verlosung der OnlineGutscheine teilnehmen oder als Psychologiestudierende*r der Universität Heidelberg 0,75
        Versuchspersonenstunden erhalten möchten
        </p>

        Für Rückfragen stehen wir Ihnen gerne zur Verfügung unter 
          <a href="mailto:luca.bieling@stud.uni-heidelberg.de">luca.bieling@stud.uni-heidelberg.de</a>.

        <p><strong>Falls Sie Anmerkungen zur Studie haben, können Sie diese gerne im folgenden Feld anonym angeben:</strong></p>
        <p>
          <textarea id="feedbackBox" 
          style="
            width: 95%; 
            height: 120px; 
            font-size: 1em; 
            padding: 10px; 
            border: 2px solid #999; 
            border-radius: 5px;
            resize: vertical;"
></textarea>

        </p>
  
      </div>`
    ],
    show_clickable_nav: true,
    button_label_next: "Weiter",
    allow_backward: false,
  
    // Hier werden deine IAT-Werte ausgelesen und in den Daten gespeichert
    on_start: function() {
      bad_Arabic_Muslims = jsPsych.data.get()
        .filter({ iat_type: 'bad-Arabic Muslims' })
        .filterCustom(x => x.rt < 10000);
      mean_bad_Arabic = bad_Arabic_Muslims.count() > 0 
        ? bad_Arabic_Muslims.filter({ correct: true }).select('rt').mean() 
        : 0;
  
      bad_White_European = jsPsych.data.get()
        .filter({ iat_type: 'bad-White European' })
        .filterCustom(x => x.rt < 10000);
      mean_bad_White = bad_White_European.count() > 0 
        ? bad_White_European.filter({ correct: true }).select('rt').mean() 
        : 0;
  
      combinedData = bad_Arabic_Muslims
        .join(bad_White_European)
        .filter({ correct: true });
      sd = combinedData.count() > 0 
        ? combinedData.select('rt').sd() 
        : 1;
  
      d = sd > 0 
        ? (mean_bad_White - mean_bad_Arabic) / sd 
        : 0;
  
      // Speichern der IAT-Auswertung in den jsPsych-Daten
 
    },
    on_finish: function() {
        for (let i = 0; i < 4; i++) {
            incrementProgress();
        }
      }
  

  };
  

const mail_trial = {
    type: jsPsychSurvey,
    survey_json: {
      showQuestionNumbers: false,
      title: 'Verlosung und VPN-Stunden', // Haupttitel
      completeText: 'Weiter',
      pageNextText: 'Continue',
      pagePrevText: 'Previous',
      pages: [
        {
          name: 'page1',
          title:  `Im Folgenden können Sie auswählen, ob Sie an der Verlosung der Online-Gutscheine im Wert von 30 € teilnehmen oder als Psychologiestudierende*r der Universität Heidelberg 0,75 Versuchspersonenstunden erhalten möchten. Ihre angegebene E-MailAdresse wird getrennt von den in der Studie erhobenen Daten gespeichert und kann nicht mit diesen in Verbindung gebracht werden.`, // Zusätzlicher Titel für die Seite
          description:'',
          elements: [
            {
                type: "text",
                name: "mailVerlosung",
                inputType: "email",
                id: "Verlosung",
                placeholder: "E-Mail-Adresse",
                title: "Ja, ich möchte an der Verlosung der Online-Gutscheine im Wert von 30 € teilnehmen.",
            },
            {
                type: "text",
                name: "mailVPN",
                inputType: "email",
                id: "VPN",
                placeholder: "E-Mail-Adresse",
                title: "Ja, ich bin Psychologiestudierende*r der Universität Heidelberg und möchte 0,75 Versuchspersonenstunden erhalten."
            },
          ]
        }
      ]
    },
    on_finish: function(){
        while (currentStep < TOTAL_STEPS) {
            incrementProgress();
          }
      }
  };

timeline.push(preload);
timeline.push(instructions)
timeline.push(codeErstellen);
timeline.push(einverstaendniserklaerung);
timeline.push(instructions_1);
timeline.push(instruktionenVerstanden);
timeline.push(instructions1_2);
timeline.push(preload2);
timeline.push(extinction_phase);
timeline.push(instructions_2);
timeline.push(test_procedure);
timeline.push(instructions_3);
timeline.push(preload3);
timeline.push(test_phase);
timeline.push(IAT_trial);
timeline.push(survey_trial);
timeline.push(debrief);
timeline.push(mail_trial);
