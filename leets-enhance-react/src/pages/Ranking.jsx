import '../css/Ranking.css';

import { useNavigate } from 'react-router-dom';
import { getImage } from "../util/get-image";

const Ranking = () => {

    const nav = useNavigate();
    const swordName='혜워니검'
    const userName='조혜원'
    let level=10;

    const onClickLogin = () =>{
      nav("/Login");
    }

    const onClickEnhance = () =>{
      nav("/Enhance");
    }

    return (
      <div className='Ranking'>

        <header>
        <div
            className='login'
            onClick={onClickLogin}
            >
            <img src={getImage('login')} alt="login" />
            로그인하러 가기
          </div>

          <div
            className='enhance'
            onClick={onClickEnhance}
            >
            <img src={getImage('fire')} alt="enhance" />
            강화하러 가기
          </div>
        </header>
        
        <h2>명예의 전당</h2>

        <div className='topRank'>
          <div className='topRank2'>
            <img src={getImage('rank2')} alt="Ranking 2" />
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='topRank1'>
            <img src={getImage('rank1')} alt="Ranking 1" />
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='topRank3'>
            <img src={getImage('rank3')} alt="Ranking 3" />
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>
        </div>

        <div className='other'>

          <div className='other-rank'>
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={getImage('sword')} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>
          
        </div>

      </div>
    )
}

export default Ranking;