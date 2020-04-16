import { $ } from '../utils';

export const Toolbox = (() => {

    const Selector = {
        INPUT_WIDTH: '#grid-width',
        INPUT_HEIGHT: '#grid-height',

    }

    // onClick();

    function getNewGridDimensions() {
        return {
            width: parseInt(
                ($(Selector.INPUT_WIDTH) as HTMLInputElement).value
            ),
            height: parseInt(
                ($(Selector.INPUT_HEIGHT) as HTMLInputElement).value
            )
        }
    }

    return {
        getNewGridDimensions
    }

})();