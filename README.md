# Merge Sorted Arrays (TypeScript)

This typescript project implements a function to merge three arrays into a single sorted array in ascending order, without using any sort function.

## Problem Statement

Implement a function with the following interface:

```
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
P.S. The task is "merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []"
```
given collection_1, collection_2 already sorted from min(0) to max and collection_3  already sorted from max to min(0)

## Project Structure

```
├── src/
│   ├── main.ts        # Example Usage
│   └── merge.ts       # Implementation
├── test/
│   └── merge.test.ts  # Unit tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Setup & Usage

### 1. Install (Setup) Dependencies
```
npm install
```

### 2. Execute Code
```
npm run start
```
The output will be printed to the console from `src/main.ts`

### 3. Execute Unit Test
```
npm test
```
Tests are located in `test/merge.test.ts`