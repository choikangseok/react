import React, {PureComponent} from 'react';

class Test extends PureComponent {
    state={
        counter: 0,
        string : "hellp",
        number: 1,
        boolean: true,
        object : {},
        array: [],
    };

    //setState만 해줘도 렌더링이 다시 시작된다.
    //어떤경우에 렌더링을 해줘야할지 적어준다.
    // shouldComponentUpdate(nextProps, nextState, nextContext){
    //     if (this.state.counter !== nextState.counter){
    //         return true;
    //     }
    //     return false;
    // }


    // 현재 어레이가 다음 어레이와 똑같다고 생각해서 PureComponent는 인지 못한다.
    onClick = () =>{
        const array = this.state.array;
        array.push(5);
        this.setState({
            array:array,
        });

    };


    // onClick = () =>{
    //     const array = this.state.array;
    //     array.push(5);
    //     this.setState({
    //         array:[...this.state.array, 2],
    //     });

    // };
    

    render() {
        console.log("렌더링", this.state);
        return (<div>
            <button onClick ={this.onClick}> 클릭</button>
            </div>
        )
    }
}
export default Test;
