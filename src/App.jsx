import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";



function App() {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("0 ქულა");


    const data = [
        {
            id: 1,
            question: "რომელ საუკუნეში მოღვაწეობდა დავით ამაშენებელი?",
            answers: [
                {
                    text: "12 ",
                    correct: false,
                },
                {
                    text: "11",
                    correct: true,
                },
                {
                    text: "8",
                    correct: false,
                },
                {
                    text: "20",
                    correct: false,
                },
            ],
        },

        {
            id: 2,
            question: "რომელ წელს დაიბადა გიორგი კვიტატიანი?",
            answers: [
                {
                    text: "2002",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 3,
            question: "dedaaaaaniiiiiiiiiiiiiiiiiiiii?",
            answers: [
                {
                    text: "jimsher gvinjilia",
                    correct: false,
                },
                {
                    text: "lana shamugia",
                    correct: true,
                },
                {
                    text: "larisa qardava",
                    correct: false,
                },
                {
                    text: "jemal gvinjilia",
                    correct: true,
                },
            ],
        },

        {
            id: 4,
            question: "რომელ წელს მიიღო საქართველომ დამოუკიდებლობა?",
            answers: [
                {
                    text: "1989",
                    correct: true,
                },
                {
                    text: "1992",
                    correct: false,
                },
                {
                    text: "2000",
                    correct: false,
                },
                {
                    text: "1990",
                    correct: false,
                },
            ],
        },

        {
            id: 5,
            question: "რა ერქვა ქალს რომელიც მართავდა საქართველოს 12 საუკუნის დასასრულს?",
            answers: [
                {
                    text: "თამარი",
                    correct: true,
                },
                {
                    text: "ჯილდა",
                    correct: false,
                },
                {
                    text: "ლარისა",
                    correct: false,
                },
                {
                    text: "ლანა",
                    correct: false,
                },
            ],
        },

        {
            id: 6,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 6,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 7,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 8,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 9,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 10,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 11,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 12,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 13,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 14,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

        {
            id: 15,
            question: "chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },

    ];


    const moneyPyramid = useMemo(() =>
        [
            { id: 1, amount: " 05. ქულა" },
            { id: 2, amount: " 10. ქულა" },
            { id: 3, amount: " 15. ქულა" },
            { id: 4, amount: " 20. ქულა" },
            { id: 5, amount: " 25. ქულა" },
            { id: 6, amount: " 30. ქულა" },
            { id: 7, amount: " 35. ქულა" },
            { id: 8, amount: " 40. ქულა" },
            { id: 9, amount: " 45. ქულა" },
            { id: 10, amount: " 50. ქულა" },
            { id: 11, amount: " 52. ქულა" },
            { id: 12, amount: " 54. ქულა" },
            { id: 13, amount: " 56. ქულა" },
            { id: 14, amount: " 58. ქულა" },
            { id: 15, amount: " 60. ქულა" },
        ].reverse(),
        []
    );

    useEffect(() => {
        questionNumber > 1 &&
            setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [moneyPyramid, questionNumber]);


    return (
        <div className="app">
            {username ? (
                <>
                    <div className="main">
                        {stop ? (
                            <h1 className="endText">თქვენ აიღეთ: {earned}</h1>
                        ) : (
                            <>
                                <div className="top">
                                    <div className="timer">
                                        <Timer setStop={setStop} questionNumber={questionNumber} />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Trivia
                                        data={data}
                                        setStop={setStop}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                    />
                                </div>
                            </>
                        )}

                    </div>
                    <div className="pyramid">
                        <ul className="moneyList">
                            {moneyPyramid.map((m) => (
                                <li
                                    className={questionNumber === m.id
                                        ? "moneyListItem active"
                                        : "moneyListItem"
                                    }
                                >
                                    <span className="moneyListItemNumber">{m.id}</span>
                                    <span className="moneyListItemAmount">{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ): <Start setUsername = { setUsername }/> }
           
        </div>
    );
}


export default App;





