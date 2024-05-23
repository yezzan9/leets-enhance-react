import '../css/Enhance.css'
import '../css/Modal.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal'

import instruction from '.././assets/instruction.png';
import card from '.././assets/card.png';
import trophy from '.././assets/trophy.png';
import sword from '.././assets/sword.png';
import x from '.././assets/x.png';

Modal.setAppElement('#root');

const Enhance = () => {

  const nav = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let probCoupon = 3;
  const swordName = '박보검';
  let level = 10;


  const onClickRanking = () =>{
    nav("/");
  }
  
  const oepnModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className='Enhance'>

      <div className='menu-enhance'>
        <div
        className='menu-item'
        onClick={oepnModal}
        >
        <img src={instruction} alt="instruction" />
        강화하러 가기
        </div>
      </div>
      
      <Modal
          className='modal-content'
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='instruction'
        >
          <img onClick={closeModal} src={x} alt="x" />
          
          <p>
            확률 증가권(사용시 확률 10% 증가)은 계정당 3개 주어집니다.<br/>
            강화 단계에 따른 강화 확률이 보여집니다.<br/>
            <br/>
            💪🏻강화 확률<br/>
            90% → 80% → 70% → 50% → 30% → 10% → 3%<br/>
            7번 성공 이후에는 3%로 고정됩니다<br/>
            <br/>
            🔥파괴 확률<br/>
            3강 이전 5%<br/>
            4강 이후부터 5%씩 증가,<br/>
            예) 4강 10%, 15%....<br/>
            최대 50%까지 증가합니다<br/>
            <br/>
            파괴되지 않을 경우 한 단계 하강<br/>
            파괴될 경우 Lv.0으로 하강
          </p>
        </Modal>

      <div className='menu-prob'>
        <div
        className='menu-item'
        >
        <img src={card} alt="card" />
        확률 증가권 : {probCoupon}개 남음
        </div>
      </div>

      <div className='menu-rank'>
        <div
        className='menu-item'
        onClick={onClickRanking}
        >
        <img src={trophy} alt="card" />
        명예의 전당 가기
        </div>
      </div>

      <h2 className='info'>
        {swordName}
        <br/>
        Lv.{level}
      </h2>

      <div className='sword'>
        <img src={sword} alt="sword" />
      </div>

      <button>강화하기</button>

    </div>
  )
}

export default Enhance;