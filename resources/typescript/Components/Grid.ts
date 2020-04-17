import {
	Square
} from "Components/Square";
import {
	Counter
} from "Components/Counter";
import {
	Toolbox
} from "Components/Toolbox";
import {
	$,
	$All,
	onClick
} from "../utils";

export const Grid = (() => {
	const Selector = {
		GRID: ".grid",
		SQUARE: {
			DEFAULT: ".square",
			MARKED: ".square.marked",
		},
		RERENDER_BTN: "#rerender-btn",
		CLEAR_GRID_BTN: "#clear-grid-btn",
	};

	/**
	 * Determines if mouse is hold. 
	 * It's needed to be able to check squares while dragging across grid
	 */
	let isMouseDown = false;

	onClick(Selector.RERENDER_BTN, rerender);
	onClick(Selector.CLEAR_GRID_BTN, clear);

	function render(width: number = 32, height: number = 32) {
		const amountOfSquaresToRender = width * height;

		for (let i = 1; i <= amountOfSquaresToRender; i++) {
			Square.create(i);
		}

		$All(Selector.SQUARE.DEFAULT).forEach((square) => {
			square.addEventListener("click", (e) => handleSquareStateChange(e));
			square.addEventListener("mouseover", (e) => {
				if (isMouseDown) {
					handleSquareStateChange(e);
				}
			});
		});

		$(Selector.GRID).addEventListener('mouseup', () => isMouseDown = false);
		$(Selector.GRID).addEventListener('mousedown', () => isMouseDown = true);
	}

	function rerender() {
		const {
			width,
			height
		} = Toolbox.getNewGridDimensions();

		if (width >= 64 || width >= 64) {
			alert("Nie mozna dodać więcej niz 64! Sprobuj mniejszą liczbę!");
			return;
		}

		let root = document.documentElement;

		root.style.setProperty("--gridWidth", String(width));
		root.style.setProperty("--gridHeight", String(height));

		// Clear previous grid before render()
		$(Selector.GRID).innerHTML = "";

		render(width, height);
	}

	function handleSquareStateChange(e: Event) {
			Square.mark(e);
			Counter.updateMarkedSquaresValue();
			Counter.handleAllAxisesChange();
	}

	function countMarkedSquares() {
		let amount = 0;
		$All(Selector.SQUARE.MARKED).forEach((el) => amount++);

		return amount;
	}

	function clear() {
		$All(Selector.SQUARE.MARKED).forEach((square) =>
			square.classList.remove("marked")
		);
	}

	return {
		render,
		rerender,
		countMarkedSquares,
	};
})();