import React, {Component} from 'react';

//라이프 사이클
//클래스의 경우 -> constructor 부분 --> render --> ref --> componentDidMount
// --> (setState/props 바뀔때) --> shouldComponentUpdate(true일 경우)--> render(리렌더링) --> componentDidUpdate
// 부모컴포넌트는 자식컴포넌트를 지울 수 있다.
// 부모가 나를 없앴을 때 --> componentWillUnmount --> 소멸



const rspCoords = {
    바위 : '0',
    가위 : '-142px',
    보 : '-284px',
}

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) =>{
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

class RSP extends Component {
    state ={
        result: '',
        imgCoord:'0',
        score:0,
    };

    interval;


    //컴포넌트의 라이프 사이클 


    //두개가 서로 한쌍   componentDidMount() componentWillUnmount()
    componentDidMount(){ //컴포넌트가 첫 렌더링된 후 -> 비동기 요청을 많이 한다.
        //클로저 문제란?
        this.interval = setInterval(this.chnageHand, 1000);
    }

    componentDidUpdate(){ //리렌더링 후

    }

    componentWillUnmount(){ //컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 한다.
        clearInterval(this.interval);
    }

    chnageHand = () => {
        const {imgCoord} = this.state; // 처음에 -142px;이라고 할 때
        console.log('hello', this.state.imgCoord)
        if (imgCoord === rspCoords.바위) {
            this.setState({
                imgCoord : rspCoords.가위,
            });
        } else if (imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보){
            this.setState({
                imgCoord: rspCoords.바위,
            });
        }
    };


    onClickBtn = (choice) => () =>{
        const {imgCoord} = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore -cpuScore;
        if(diff === 0) {
            this.setState({
                result : "비겼습니다.",
            });
        } else if ([-1,2].includes(diff)){
            this.setState((prevState) => {
                return {
                    result: "이겼습니니다.!",
                    score : prevState.score + 1,
                };
            });
        } else {
            this.setState( (prevState) => {
                return {
                    result : "졌습니다.!",
                    score : prevState.score -1, 
                };
            });
        }


        setTimeout(() =>{
            this.interval = setInterval(this.chnageHand, 100);
        }, 2000)
        //2초정도 기다렸다가.
        //손을 다시 움직임
        // this.interval =setInterval(this.chnageHand, 1000);
        
    };


    render() {
        const {result, score, imgCoord} = this.state;
        
        return(
            <>
            <div id = 'computer' style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0 `}} />
            <div>
                {/* <button id='rock' className='btn' onClick={() => this.onClickBtn('바위')}>바위</button> */}
                <button id='rock' className='btn' onClick={this.onClickBtn('바위')}>바위</button>
                <button id='scissor' className='btn' onClick={this.onClickBtn('가위')}>가위</button>
                <button id='paper' className='btn' onClick={this.onClickBtn('보')}>보</button>
            </div>

            <div>{result}</div>
            <div>현재 {score} 점</div>

            </>

        );
    }
}

export default RSP;