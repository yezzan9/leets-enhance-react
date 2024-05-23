import '../css/Ranking.css';

import { useNavigate } from 'react-router-dom';

import rank1 from '.././assets/rank1.png';
import rank2 from '.././assets/rank2.png';
import rank3 from '.././assets/rank3.png';
import sword from '.././assets/sword.png';
import fire from '.././assets/fire.png';
import login from '.././assets/login.png';

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
            <img src={login} alt="login" />
            로그인하러 가기
          </div>

          <div
            className='enhance'
            onClick={onClickEnhance}
            >
            <img src={fire} alt="enhance" />
            강화하러 가기
          </div>
        </header>
        


        <h2>명예의 전당</h2>

        <div className='topRank'>

          <div className='topRank2'>
            <img src={rank2} alt="Ranking 2" />
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='topRank1'>
            <img src={rank1} alt="Ranking 1" />
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='topRank3'>
            <img src={rank3} alt="Ranking 3" />
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>
          
        </div>

        <div className='other'>

          <div className='other-rank'>
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>

          <div className='other-rank'>
            <img src={sword} alt="Sword" />
            {swordName} Lv.{level}
            <div className='line'/>
            <p>{userName}</p>
          </div>
          
        </div>

      </div>
    )
}

export default Ranking;