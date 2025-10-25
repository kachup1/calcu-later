
import './Calculater.css';

function Calculater() {
  return (
    <div className='Calculater'>
      <div className='Header'>
        <div className='Logo'>
          {/*Robot logo */}
          <img src="Sources/RobotIcon2.png" alt="Robot Icon" className="RobotIcon" />

        </div>
        <div className='Calc-Title'>
          CALCU-LATER
        </div>
    </div>

    <div className='SubHeader'>
      <div className='From-Section'>
        <label htmlFor='From'>FROM:</label>
        <select id='From' name='From'>
          <option value="octal">Octal (OCT)</option>
          <option value="decimal">Decimal (DEC)</option>
          <option value="hexadecimal">Hexadecimal (HEX)</option>
          <option value="binary">Binary (BIN)</option>
        </select>
      </div>
      <div className='To-Section'>
         <label htmlFor='To'>TO:</label>
        <select id='To' name='To'>
          <option value="octal">Octal (OCT)</option>
          <option value="decimal">Decimal (DEC)</option>
          <option value="hexadecimal">Hexadecimal (HEX)</option>
          <option value="binary">Binary (BIN)</option>
        </select>
      </div>
    </div>

    <div className='Calc-Section'>
      
      <div className='Calc-Options'>
        <div className='Hex-Option'>

        </div>
        <div className='Dec-Option'>

        </div>
        <div className='Oct-Option'>
          </div>
        <div className='Bin-Option'>
          </div>

      </div>

      <div className='Calc-Right-Side'>
        <div className='Calc-Top-Box'>
          <div className='Calculation-Display'>
            <div>0</div>
          </div>
        </div>
        <div className='Calc-Middle-Options'>
          <button className="key">CE</button>
          <button className="key">C</button>
          <button className="key">(</button>
          <button className="key">)</button>
          <button className="key">AND</button>
          <button className="key">OR</button>
          <button className="key">NOT</button>
        </div>
        <div className='Calc-Buttons-Section'>
        </div>
      </div>


     
       

    </div>
    </div>
  );
}

export default Calculater;
