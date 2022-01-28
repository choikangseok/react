import React, { memo,PureComponent, useState } from 'react';

// class Try extends PureComponent {
//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }



// 정밀한 동작을 요하는 경우 
// class Try extends PureComponent {
//     constructor(props) {
//         super(props);
//         //다른 동작
//         const filtered = this.props.filter(() =>{

//         });
//         this.state = {
//             result : filtered,
//             try: this.props.try,
//         };
//     }

//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }







const Try = memo( ({tryInfo}) =>{
    // tryInfo.try ='hello'
    //props는 부모가 바꾸어야한다
    //자식이 바꿔주면 안된다.

    //바꿔야 할 때는 다음과 같이 사용
    const [result, setResult] = useState(Tryinfo.result);
    const onClick = () =>{
        setResult('1');
    };

    return (
       <li>
           <div>{tryInfo.try}</div>
           <div onClick = {onClick}>{result}</div>
        </li>
    )
    
});


// const Try = memo( ({tryInfo}) =>{
//     // tryInfo.try ='hello'
//     //props는 부모가 바꾸어야한다
//     //자식이 바꿔주면 안된다.

//     //바꿔야 할 때는 다음과 같이 사용
//     const [result, setResult] = useState(Tryinfo.result);
//     const onClick = () =>{
//         setResult('1');
//     };

//     return (
//        <li>
//            <div>{tryInfo.try}</div>
//            <div onClick = {onClick}>{result}</div>
//         </li>
//     )
    
// });

export default Try;

// props.tryinfo를 tryInfo로 쓰겠다.
// 구조분해 해준다.
// const Try = ({tryInfo}) => {
//     return(
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// };

// class Try extends Component {
//     render() {
//         return(
//             <li>
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
            
//         )
//     }
// }


