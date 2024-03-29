// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.flatMap((card) => (card === 3 ? [card, card, card] : card));
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const deckLength = deck.length;
  const [prevMiddle, nextMiddle] = [
    Math.floor(deckLength / 2) - 1,
    Math.floor(deckLength / 2),
  ];
  return [deck[prevMiddle], deck[nextMiddle]];
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // better solution
  // const mid = deck.length / 2;
  // deck.splice(mid, 0, deck.pop());
  // deck.splice(mid, 0, deck.shift());
  // return deck;

  const middle = Math.floor(deck.length / 2);

  const newLeftHalf = [deck.at(-1), ...deck.slice(1, middle)];
  const leftMovedLeftHalf = newLeftHalf.map((_x, i) =>
    i < newLeftHalf.length - 1
      ? newLeftHalf.at(i + 1) ?? 0
      : newLeftHalf.at(0) ?? 0,
  );

  const newRightHalf = [...deck.slice(middle, deck.length - 1), deck.at(0)];
  const rightMovedRightHalf = newRightHalf.map(
    (_x, i) => newRightHalf.at(i - 1) ?? 0,
  );

  return [...leftMovedLeftHalf, ...rightMovedRightHalf];
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
