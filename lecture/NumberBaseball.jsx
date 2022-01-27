import React, {Component} from "react";
import Try from './Try'
// const React = require('react');
// const {Component} = React;



function getNumbers(){//숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
    state ={
        result: '',
        value : '',
        answer : getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput =() => {

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

//<li><b>{v[0]}</b>{v[1]}</li>
//<li key= {v.fruit + v.taste}> <b>{v.fruit + v.taste}</b> index: {i}</li>

    render () {
        return (
        <>
            <h1>{this.state.result}</h1>
            <form onSubmit ={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
            </form>
            <div>시도: {this.state.tries.length}</div>
            <ul>
                {this.fruits.map( (v, i) => {
                    return (
                        <Try value ={v} index= {i}/>
                    );
                })}
            </ul>
        </>
        );
    }
}

export default NumberBaseball;

