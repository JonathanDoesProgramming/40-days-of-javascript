# JavaScript Arrays Notes

## Fundamentals

1. An array is an ordered collection of values.
2. Arrays can store any data type:
   - String
   - Number
   - Boolean
   - Object
   - Function
   - Array
3. Arrays are zero-indexed.
4. The `length` property returns the total number of elements.
5. The last index is always `length - 1`.
6. Arrays are reference types.

---

## Creating Arrays

### Array Literal

- Most common way to create arrays.
- Uses square brackets.

### Array Constructor

- Uses the `Array` constructor.
- Less common than array literals.

---

## Accessing Elements

1. Elements are accessed using their index.
2. First element is at index `0`.
3. Last element can be accessed using:
   - `length - 1`

---

## Basic Array Methods

### push()

1. Adds elements to the end of an array.
2. Mutates the original array.
3. Returns the new length of the array.

### unshift()

1. Adds elements to the beginning of an array.
2. Mutates the original array.
3. Returns the new length of the array.

### pop()

1. Removes the last element.
2. Mutates the original array.
3. Returns the removed element.

### shift()

1. Removes the first element.
2. Mutates the original array.
3. Returns the removed element.

---

## slice()

1. Creates a shallow copy of an array.
2. Does not mutate the original array.
3. Returns a new array.
4. Creates a different reference.
5. Commonly used for cloning arrays.

---

## Rest and Spread Operator (...)

### Rest Operator

1. Appears on the left side of destructuring.
2. Collects remaining values into a new array.
3. Automatically creates a new array.
4. Must be the last element in destructuring.

### Spread Operator

1. Expands iterable values.
2. Commonly used for:
   - Cloning arrays
   - Merging arrays
   - Copying elements
3. Creates a shallow copy.

---

## Array Destructuring

1. Extracts values from an array into variables.
2. Values are assigned based on position.
3. Elements can be skipped using commas.
4. Default values can be assigned.
5. Rest operator can collect remaining values.

---

## Array Methods Part 1

### concat()

1. Merges arrays.
2. Does not mutate the original arrays.
3. Returns a new array.

### join()

1. Combines array elements into a string.
2. Uses a separator.
3. Returns a string.

### fill()

1. Fills array elements with a static value.
2. Mutates the original array.
3. Returns the modified array.

### includes()

1. Checks if a value exists in the array.
2. Returns `true` or `false`.
3. Case-sensitive when checking strings.

### indexOf()

1. Returns the first matching index.
2. Returns `-1` if not found.

### sort()

1. Sorts elements in place.
2. Mutates the original array.
3. Returns the same array.
4. Converts values to strings by default before sorting.
5. Sorts in ascending order by default.

---

## Array Methods Part 2

### splice()

1. Adds elements.
2. Removes elements.
3. Replaces elements.
4. Mutates the original array.
5. Returns an array containing removed elements.
git 
#### Parameters

- `start` → starting index.
- `deleteCount` → number of elements to remove.
- `item(s)` → elements to insert.

#### Important Notes

1. Can be used only for insertion.
2. Can be used only for deletion.
3. Can be used for replacement.
4. Returns an empty array when nothing is deleted.

### at()

1. Accesses elements using positive indexes.
2. Accesses elements using negative indexes.
3. Negative indexes count from the end.

### groupBy()

1. Groups elements based on a specified condition.
2. Returns grouped values using a key.

---

## Immutable Array Methods

### toSorted()

1. Creates a sorted copy.
2. Does not mutate the original array.

### with()

1. Creates a copy with one element replaced.
2. Does not mutate the original array.

#### Parameters

- `index` → position to replace.
- `value` → replacement value.

---

## Static Array Methods

### Array-Like Objects

1. Have indexed elements.
2. Have a `length` property.
3. Look like arrays.
4. Are not true arrays.
5. Do not have built-in array methods.

#### Examples

- `arguments`
- DOM collections

### Array.from()

1. Converts array-like objects into arrays.
2. Converts iterable values into arrays.
3. Returns a new array.

### Array.fromAsync()

1. Converts async iterable values into arrays.
2. Returns a Promise.
3. Requires `await` or `.then()`.

### Array.of()

1. Creates a new array from provided arguments.
2. Returns a new array instance.

---

## Iterator Methods

### filter()

1. Returns elements that satisfy a condition.
2. Returns a new array.
3. Does not mutate the original array.

### reduce()

1. Reduces an array into a single value.
2. Executes a reducer function for every element.

#### Reducer Parameters

- `accumulator` → stores accumulated result.
- `currentValue` → current element.
- `index` → current index.
- `array` → original array.

### some()

1. Checks if at least one element satisfies a condition.
2. Returns `true` or `false`.

### entries()

1. Returns an iterator.
2. Provides index-value pairs.
3. Useful when both index and value are needed.

---

## Shallow Cloning

1. Copies only the first level.
2. Nested arrays and objects still share references.
3. Creates a new outer array.

### Common Methods

- Spread Operator (`...`)
- `slice()`
- `Array.from()`

---

## Deep Cloning

1. Copies all nested levels.
2. Creates completely independent data.
3. Nested arrays and objects no longer share references.

### Common Method

- `structuredClone()`

---

## Mutable Methods

These methods change the original array:

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`
- `fill()`

---

## Immutable Methods

These methods do not change the original array:

- `slice()`
- `concat()`
- `filter()`
- `map()`
- `reduce()`
- `toSorted()`
- `with()`

---

## Quick Rules

1. Arrays are zero-indexed.
2. First index is always `0`.
3. Last index is always `length - 1`.
4. `push()` and `unshift()` return the new length.
5. `pop()` and `shift()` return the removed element.
6. `slice()` copies.
7. `splice()` modifies.
8. `sort()` modifies.
9. `toSorted()` does not modify.
10. Spread operator creates a shallow clone.
11. `structuredClone()` creates a deep clone.
12. Arrays are reference types.
13. Destructuring extracts values by position.
14. Rest collects values.
15. Spread expands values.