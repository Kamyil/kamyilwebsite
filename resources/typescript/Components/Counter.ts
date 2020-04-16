import { Grid } from 'Components/Grid';
import { $ } from '../utils';

export const Counter = (() => {

    const Selector = {
        COUNTER_VALUE: '.counterValue'
    }

    // onClick();

    function updateMarkedSquaresValue() {
        const amount = Grid.countMarkedSquares();

        $(Selector.COUNTER_VALUE).textContent = String(amount);
    }

    return {
        updateMarkedSquaresValue
    }

})();