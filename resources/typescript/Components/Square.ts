import { onClick, $ } from '../utils';

export const Square = (() => {

    const Selector = {
        GRID: '.grid'
    }

    // onClick();

    function create() {
        const square = document.createElement('div');
        square.classList.add('square');

        $(Selector.GRID).appendChild(square);
    }

    function mark(e) {
        if (e.target.classList.contains('marked')) {
            e.target.classList.remove('marked');
        } else {
            e.target.classList.add('marked');
        }
    }

    return {
        create,
        mark
    }


})();