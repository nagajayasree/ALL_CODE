(function(){
    const questions = [
        {
            question: "In what state is the Elephant Falls located?",
            answer: "Meghalaya"
        },
        {
            question: "Which is the largest coffee producing state of India?",
            answer: "Karnataka"
        },
        {
            question: "In which state is the main language Khasi?",
            answer: "Meghalaya"
        },
        {
            question: "Which state has the largest population?",
            answer: "Uttar Pradesh"
        },
        {
            question: "What is the state flower of Haryana?",
            answer: "Lotus"
        },
        {
            question: "Which crop is sown on the largest area in India?",
            answer: "Rice"
        },
        {
            question: "Entomology is the science that studies...",
            answer: "Insects"
        },
        {
            question: "The world smallest country is",
            answer: "Vatican City"
        },
        {
            question: "The currency notes are printed in",
            answer: "Nasik"
        },
        {
            question: "What is the world's most common religion?",
            answer: "Christianity"
        }
    ];

    const butn = document.getElementById("ok-button");

    butn.addEventListener("click",function(){
        let random = Math.floor(Math.random()*questions.length);
        console.log(random);
        document.getElementById("question").textContent = questions[random].question;
        document.querySelector('.answer').textContent = questions[random].answer;
    });
})();