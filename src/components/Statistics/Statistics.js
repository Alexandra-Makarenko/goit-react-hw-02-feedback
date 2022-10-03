import PropTypes from 'prop-types';
import { List} from './Statistics.styled';

export const Statistics = ({ good,neutral,bad,total,positivePercentage }) => {
 return ( <List>
    
    {good!==0 && <li>good:{good}</li>}
    {neutral!==0 && <li>neutral:{neutral}</li>}
     {bad !== 0 && <li>bad:{bad}</li>}
     {total !== 0 && <li>total:{total}</li>}
     {positivePercentage>0? <li>positivePercentage:{positivePercentage}%</li>:<li>positivePercentage:0%</li>}
      
    </List>)
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}