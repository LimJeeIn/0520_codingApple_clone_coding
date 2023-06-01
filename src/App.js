import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let posts = '강남 우동 맛집';
  let [a, setA] = useState(['다 코트 추천', '가 코트 추천', '나 코트 추천']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');

  const onHandler = (idx) => {
    let copyLike = [...like];

    copyLike[idx] += 1;
    setLike(copyLike);

    // setLike((like += 1));
  };

  const onChangeView = () => {
    let copy = [...a];
    copy[0] = a[1];
    setA(copy);
  };

  const onSort = () => {
    let arrCopy = [...a];
    setA(arrCopy.sort());
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const onTitChange = () => {
    setA(['가 코트 추천', ...a.slice(1)]);
  };

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <button onClick={onChangeView}>버튼</button>
      <button onClick={onSort}>버튼</button>

      {a.map((item, idx) => {
        return (
          <>
            <div className='list'>
              <h4
                onClick={() => {
                  openModal();
                  setTitle(item);

                  // idx == 2 ? openModal() : closeModal();
                }}
              >
                {a[idx]}
              </h4>
              <span onClick={() => onHandler(idx)}>👌</span>
              {like[idx]}
              <p>2월 17일 발행</p>
            </div>
            {idx === 2 && modal && (
              <Modal
                closeModalKey={closeModal}
                color={'skyblue'}
                titChange={onTitChange}
                titContent={title}
              />
            )}
            {/* {idx === 2 ? modal && <Modal closeModalKey={closeModal} /> : null} */}
          </>
        );
      })}

      <input
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />
      <button onClick={() => {}}>send</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ backgroundColor: props.color }}>
      <h4>{props.titContent} </h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.titChange}>글수정</button>
      <button onClick={props.closeModalKey}>닫기</button>
    </div>
  );
}

export default App;
