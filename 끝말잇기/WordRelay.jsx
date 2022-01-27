const React = require('react');
const {useState, useRef} = React;

//아래와 같이 변경 해줄 수 있음.
//  React.useState() --> useState()
//  React.useRef() --> useRef()

const WordRelay = () => {
    const [word, setWord] = useState("제로초");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    const onSubmitForm = (e) =>{
            e.preventDefault();
            if(word[word.length - 1] === value[0]) {
                setResult("딩동댕");
                setWord(value);
                setValue('');
                // inputRef.current.focus();
            } else {
                setResult("땡");
                setValue('');
                inputRef2.current.focus();
            }
        }; 

    const onChangeInput = (e) => {
            setValue(e.target.value);
    };
    
    return (
    <>
        <div>{word}</div>
        <form onSubmit = {onSubmitForm}>
            <input ref = {inputRef} value ={value} onChange = {onChangeInput} />
            <button>클릭</button>
        </form>
        <div>{result}</div>
        
        <div>useRef 테스트 </div>
        <input ref = {inputRef2} />
    </>
    );
};

module.exports = WordRelay;