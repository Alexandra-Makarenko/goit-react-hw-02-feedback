
export const Statistics = ({ good,neutral,bad,total,positivePercentage }) => {
 return ( <ul style={{ display: 'flex', gap: 8, padding: 8, listStyle: 'none' }}>
    
    {good!==0 && <li>good:{good}</li>}
    {neutral!==0 && <li>neutral:{neutral}</li>}
     {bad !== 0 && <li>bad:{bad}</li>}
     {total !== 0 && <li>total:{total}</li>}
     {positivePercentage>0? <li>positivePercentage:{positivePercentage}%</li>:<li>positivePercentage:0%</li>}
      
    </ul>)
};