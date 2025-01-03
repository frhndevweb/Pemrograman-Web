const questions = [
    // Level 1: Mudah (HTML, CSS, JS)
    {
        question: "Apa kepanjangan dari HTML?",
        choices: ["HyperText Markup Language", "HyperTool Markup Language", "HyperText Markdown Language"],
        answer: 0
    },
    {
        question: "Apa fungsi utama dari CSS?",
        choices: ["Mengatur struktur halaman", "Mengatur gaya tampilan halaman", "Mengatur interaksi pengguna"],
        answer: 1
    },
    {
        question: "Tag mana yang digunakan untuk membuat link?",
        choices: ["<a>", "<link>", "<href>"],
        answer: 0
    },
    // Level 2: Menengah (JavaScript)
    {
        question: "Apa itu JavaScript?",
        choices: ["Bahasa pemrograman untuk backend", "Bahasa pemrograman untuk interaktivitas di web", "Bahasa pemrograman untuk styling halaman"],
        answer: 1
    },
    {
        question: "Metode mana yang digunakan untuk menambah elemen ke array di JavaScript?",
        choices: [".add()", ".push()", ".append()"],
        answer: 1
    },
    {
        question: "Manakah cara untuk memilih elemen dengan id di JavaScript?",
        choices: ["document.querySelector('#id')", "document.getElementsByClassName('id')", "document.getElementByTagName('id')"],
        answer: 0
    },
    // Level 3: Sulit (PHP)
    {
        question: "Apa itu PHP?",
        choices: ["Bahasa pemrograman untuk frontend", "Bahasa pemrograman server-side", "Bahasa pemrograman untuk database"],
        answer: 1
    },
    {
        question: "Manakah yang benar untuk menampilkan teks di PHP?",
        choices: ["echo 'Hello World';", "print('Hello World');", "write('Hello World');"],
        answer: 0
    },
    {
        question: "Bagaimana cara mendeklarasikan variabel di PHP?",
        choices: ["var x = 5;", "$x = 5;", "let x = 5;"],
        answer: 1
    },
    // Level 4: Sangat Sulit (Python)
    {
        question: "Apa yang dimaksud dengan 'list' dalam Python?",
        choices: ["Tipe data yang digunakan untuk menyimpan satu nilai", "Tipe data yang digunakan untuk menyimpan banyak nilai", "Tipe data untuk menyimpan hanya angka"],
        answer: 1
    },
    {
        question: "Bagaimana cara mendeklarasikan fungsi di Python?",
        choices: ["function nama_fungsi():", "def nama_fungsi():", "func nama_fungsi():"],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan 'self' dalam Python?",
        choices: ["Nama variabel", "Referensi objek dalam metode kelas", "Fungsi built-in Python"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Set();

function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const nextButton = document.getElementById("next-button");
    const liveScoreElement = document.getElementById("live-score");

    questionElement.textContent = `Level ${Math.ceil((currentQuestion + 1) / 3)}: ${questions[currentQuestion].question}`;
    choicesElement.innerHTML = "";
    liveScoreElement.textContent = `Skor saat ini: ${score}`;

    questions[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(index);
        choicesElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function selectAnswer(selectedIndex) {
    if (answeredQuestions.has(currentQuestion)) {
        alert("Kamu sudah menjawab soal ini!");
        return;
    }

    answeredQuestions.add(currentQuestion);
    const correctIndex = questions[currentQuestion].answer;
    if (selectedIndex === correctIndex) {
        score++;
        alert("Benar!");
    } else {
        alert("Salah!");
    }

    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `Skor Kamu: ${score} dari ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions.clear();
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

document.getElementById("next-button").addEventListener("click", nextQuestion);

showQuestion();
