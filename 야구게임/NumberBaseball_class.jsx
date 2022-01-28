import React, {Component, createRef} from "react";
import Try from './Try'
// const React = require('react');
// const {Component} = React;


//독립적으로 존재하는 함수
function getNumbers(){//숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for( let i = 0; i < 4; i += 1) {
        const chosen =candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}


class NumberBaseball extends Component {
    state ={
        result: '',
        value : '',
        answer : getNumbers(), // ex: [1,3,5,7]
        tries: [], // push 쓰면 안 된다.
    };

    onSubmitForm = (e) => {
        const {value, tries, answer} = this.state;
        e.preventDefault();
        if (value === answer.join('')){ 
            this.setState((prevState) => {
                return {
                    result : "홈런!",
                    tries: [...prevState.tries, {try: value, result: "홈런!"}],
                }
            });
            alert("게임을 다시 시작합니다.!");
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
            this.inputRef.current.focus();
        } else{
            const answerArray = value.split('').map( (v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if( this.state.tries.length >=9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`,
                });
                alert("게임을 다시 시작합니다.!");
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
                this.inputRef.current.focus();
            } else{
                for (let i =0; i <4; i +=1){
                    if (answerArray[i] === this.state.answer[i]){
                        strike +=1;
                    } else if (this.state.answer.includes(answerArray[i])){
                        ball +=1;
                    }
                }
                this.setState((prevState)=>{
                    return{
                        tries: [...prevState.tries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                        value: '',
                    }
                });
                this.inputRef.current.focus();
            }

        }
        console.log(this.state.value)

    };

    onChangeInput =(e) => {
        this.setState({
            value: e.target.value,
        });
    };

    fruits = [
        {fruit: "사과", taste: "맛있다."},
        {fruit: "바나나", taste: "맛없다."},
        {fruit: "포도", taste: "시다."},
        {fruit: "귤", taste: "시다."},
        {fruit: "감", taste: "시다."},
        {fruit: "배", taste: "시다."},
        {fruit: "밥", taste: "시다."},

        // ["사과", '맛있다'],
        // ["바나나", '맛없다'],
        // ["포도", "시다"],
        // ["귤", '시다'],
        // ["감", '시다'],
        // ["배", '시다'],
        // ["밥", '시다']
    ];
    inputRef = createRef();
    // inputRef;
    // onIputRef = (c) => {this.inputRef =c;};

//<li><b>{v[0]}</b>{v[1]}</li>
//<li key= {v.fruit + v.taste}> <b>{v.fruit + v.taste}</b> index: {i}</li>
//렌더 안에는 setState 쓰는거 아니다.

    render () {
        return (
        <>
            <h1>{this.state.result}</h1>
            <form onSubmit ={this.onSubmitForm}>
                <input ref = {this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
            </form>
            <div>시도: {this.state.tries.length}</div>
            <ul>
                {this.state.tries.map( (v, i) => {
                    return (
                        <Try key = {`${i + 1}차 시도 :`} tryInfo ={v}/>
                    );
                })}
            </ul>
        </>
        );
    }
}

export default NumberBaseball;

