import { onClick, $ } from '../utils';

export const Square = (() => {

    const Selector = {
        GRID: '.grid'
    }

    // onClick();

    function create(id: number = 1) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.id = String(id);
        square.setAttribute('draggable', 'false');

        $(Selector.GRID).appendChild(square);
    }

    function mark(e) {
        if (e.target.classList.contains('marked')) {
            e.target.classList.remove('marked');
        } else {
            e.target.classList.add('marked');
            // setNumber()
        }
    }

    return {
        create,
        mark
    }


})();