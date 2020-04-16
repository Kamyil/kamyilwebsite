/** Important JQuery/Cheerio-like selector grabber */
export const $ = (selector: string): HTMLElement => document.querySelector(selector);
/** Important JQuery/Cheerio-like selector grabber */
export const $All = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector);

export const onClick = (selector: string, callback) => $(selector).addEventListener('click', callback);