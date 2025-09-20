
import './Calculater.css';

function Calculater() {
  return (
    <div className='Calculater'>
      <div className='Header'>
        <div className='Logo'>
          {/*Robot logo */}
          <img src="/RobotIcon2.png" alt="Robot Icon" className="RobotIcon" />

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

      
    </div>


    </div>
  );
}

export default Calculater;
