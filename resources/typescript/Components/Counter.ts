import { Grid } from 'Components/Grid';
import { $ } from '../utils';

export const Counter = (() => {

    const Selector = {
        COUNTER_VALUE: '.counterValue',
        Y_AXIS_VALUE: '#house-height',
        ALL_AXISES_COUNTER_VALUE: '.counterXYZValue',
    }


    $(Selector.Y_AXIS_VALUE).addEventListener('input', () => {
        Counter.updateMarkedSquaresValue();
        Counter.handleAllAxisesChange();
    });

    function updateMarkedSquaresValue() {
        let amount = Grid.countMarkedSquares();
        

        $(Selector.COUNTER_VALUE).textContent = String(amount);
    }

    function handleAllAxisesChange() {
        let amount = Grid.countMarkedSquares();
        const YaxisValue: number = parseInt(($(Selector.Y_AXIS_VALUE) as HTMLInputElement).value);

        amount = amount * YaxisValue;

        $(Selector.ALL_AXISES_COUNTER_VALUE).innerHTML = String(amount);
    }

    return {
        updateMarkedSquaresValue,
        handleAllAxisesChange
    }

})();