const { Tetris } = require('./tetris');

describe('tetris', () => {
    it('should place rock on map', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '<',
            ticksCount: 0
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
..####.
.......
.......
.......
-------
`.trim()
        );
    });


    it('should run 1 tick and move <', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '<',
            ticksCount: 1
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
.####..
.......
.......
-------
`.trim()
        );
    });

    it('should run 1 tick and move >', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '>',
            ticksCount: 1
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
...####
.......
.......
-------
`.trim()
        );
    });

    it('should run 2 ticks and stop at wall', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '>',
            ticksCount: 2
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
...####
.......
-------
`.trim()
        );
    });

    it('should run 2 tick and move <<', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '<',
            ticksCount: 2
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
####...
.......
-------
`.trim()
        );
    });

    it('should run 1 rock, move <<< and stop', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '<',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
####...
-------
`.trim()
        );
    });

    it('should run 1 rock, move < and >', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '><>',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
...####
-------
`.trim()
        );
    });

    it('should run 2 rocks, move only <', () => {
        const tetris = new Tetris({
            rocksCount: 2,
            movesPattern: '<',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
.#.....
###....
.#.....
####...
-------
`.trim()
        );
    });


    it('should run 3 rocks, move only <', () => {
        const tetris = new Tetris({
            rocksCount: 3,
            movesPattern: '<',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
..#....
..#....
###....
.#.....
###....
.#.....
####...
-------
`.trim()
        );
    });

    it('should run 4 rocks, move only <', () => {
        const tetris = new Tetris({
            rocksCount: 4,
            movesPattern: '<',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
#......
#......
#.#....
#.#....
###....
.#.....
###....
.#.....
####...
-------
`.trim()
        );
    });

    it('should run 5 rocks, move only <', () => {
        const tetris = new Tetris({
            rocksCount: 5,
            movesPattern: '<',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
##.....
##.....
#......
#......
#.#....
#.#....
###....
.#.....
###....
.#.....
####...
-------
`.trim()
        );
    });


    it('should run 6 rocks, move only <, they start to repeat', () => {
        const tetris = new Tetris({
            rocksCount: 6,
            movesPattern: '<',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
####...
##.....
##.....
#......
#......
#.#....
#.#....
###....
.#.....
###....
.#.....
####...
-------
`.trim()
        );
    });

    it('should run 3 ticks, move <>, move pattern repeats', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '<>',
            ticksCount: 3
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
.####..
-------
`.trim()
        );
    });


    it('should run 3 rocks, move <>', () => {
        const tetris = new Tetris({
            rocksCount: 3,
            movesPattern: '<>',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
....#..
....#..
..###..
...#...
..###..
...#...
..####.
-------
`.trim()
        );
    });

    it('should run 1 rock, move like task description', () => {
        const tetris = new Tetris({
            rocksCount: 1,
            movesPattern: '>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
..####.
-------
`.trim()
        );
    });

    it('should run 2 rocks, move like task description', () => {
        const tetris = new Tetris({
            rocksCount: 2,
            movesPattern: '>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
...#...
..###..
...#...
..####.
-------
`.trim()
        );
    });

    it('should run 10 rocks, move like task description', () => {
        const tetris = new Tetris({
            rocksCount: 10,
            movesPattern: '>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
....#..
....#..
....##.
##..##.
######.
.###...
..#....
.####..
....##.
....##.
....#..
..#.#..
..#.#..
#####..
..###..
...#...
..####.
-------
`.trim()
        );
    });

    it('should run 10 rocks, move like task description, check height', () => {
        const tetris = new Tetris({
            rocksCount: 10,
            movesPattern: '>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>',
        });

        tetris.run();

        const height = tetris.getHeight();

        expect(height).toBe(17);
    });

    it('should run 2022 rocks, move like task description, check height', () => {
        const tetris = new Tetris({
            rocksCount: 2022,
            movesPattern: '>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>',
        });

        tetris.run();

        const height = tetris.getHeight();

        expect(height).toBe(3068);
    });

    it('should run 2022 rocks, move like task puzzle input, check height', () => {
        const tetris = new Tetris({
            rocksCount: 2022,
            movesPattern: '>><<>><<>><><<>><<><>>><>>>><<>>>><<<<>>><<<>>>><>><<<<>>>><>><>>><<><>><<>><<>>><<>><<<<>>><>><<<>>>><<>><<><<><<>><><<<<>>><><<<<>>><<>><<<<>>><<<<><<><<>>>><<<>>><<<><>><<>>><<><<<<>><<>>><>>>><<>>>><<<<>><<<>><<<<>>><<>><<<<>>><<>>>><<<<>>><>>><>>><><>>>><><<<<><<<><<>><<<>><<<><>>><>><>>>><<<<>><<><<<>>>><>>><<<<><<<><<><>>>><<<<>><<>>>><<<>><<<<>>>><<<>><<>><>><<<<><<<<><<>>>><<>>><><<>><<<>><<<<>>><<<<>>>><>>><<>>><>>><<<>><><<>><<<<>><<<>>><<<>>>><<<><<<>>><<<>><<>>>><><>><<><<<><>>>><<>>><<<<>><<<<>><<<<>>><<>><<><><<<<>>>><<>><<<><>>>><<><<<>>><<<<><<><>>><<>>><><>>>><<<>>><<<>><><<<<>>><<<<>>>><<<<>>>><<>><<<><>>><<<<>>>><<<<>><<<<>>>><<<<><<<>><<<<><>><<<<>>>><><<>><<>>><<<<>><<>><<<><<<>>>><<>>>><>>><<<>>>><<<><<>>>><<<><<><><<>>><<>>>><<<<>>><>>><<<<>><<<><<><<<<>><<<><<<<>>>><>><<<<><<<>>><<<>>>><>>><<<<>>><<>><>>>><>>>><<<<>>><>>><<<>>>><<<<><>>><>>><>>>><>>><<<>>>><>><<<>>>><<>>>><<<<>>>><<<>>><<>>>><<<>>><>>>><<<><>><><<<<><<<<>><<><<<>>><<<<>>>><<>>><<<<>><<<>><<<<><<>><<<>>>><<<>>>><<<><>>><<<>>>><<>>>><<<><<<<>>>><<<<>><>><<<<>>><>>><<><>><<>>>><<>><<>><<>>><<>>><<<<>><<<<>>><>>><>>>><<>>><<>>><>>><<<<><>>><<<>>>><<<<>><<<<><<<<>>><<>>>><<>>><<<>>>><>><<<>>>><<<<>><<<><<<<>>><<<>>>><<<><<>>>><<>>><<<><>>><><<><<>>><<<>><<<>>><<>>><<>>>><<<>>>><<<<><<>><<<>>>><<>>>><<>>>><<<>><>>>><<>><<<<>>>><<<>>><<>>>><<><<<>>><<<<>>>><<<<>>><<>>>><<<<><>>><<<><>><<>><<<><>><<<>><>><<<<>><>><>>>><<>><<>><<<<>>><<<>>>><<>>>><<>><<<<><>>>><<>><<><><<<><>>><<<<>>>><<<>>><>><<><<<<>>><<<<>><<>><<><><>><<<<><<<<>>>><<>>><>>>><<<>><<>><<>>><<<<>>><<<<><<<<>>><<<<>><<<<><<<><<><>>>><<<<>><<><<>><>>><<<<>>><<<><<<<>>><<>>><<<>>><>>><>><<><><<<<><><<<<>>><<<>><<><<<<>>>><>>><<<>><<<<><>><<<<>>>><<<<>><<<<>><<<<>>>><<><<<><<>><<<><<<<>><<<<>><<<<>>>><<<><<>>><<>>>><<<<>>>><<<>>>><<<<><<<<>>>><<<>>>><<>>>><>>>><<>>>><>>>><<<>>><<<<>><<>>>><<<<><<<<>>><<<<>>>><>><<<>><><<<<>>><>>><>>>><<<<>><<<>><<<<>>><<>>><<<<><<>><<<>>><<>><<<><<>><<>>>><<><<><>><>>>><<><><<><<<>>><<<<>>><>><<<<><<>>><><<>>><<<<>><<>>>><<>>>><><<>>>><<>>><<<>>>><<<>>>><<>>><>>><>><<<<>>><<<><<><<<<><<><<<<>>><>><<<<>>>><><<<>>>><>>>><<<<>>><>><<<>>><<<<>><>><>><<>>>><<<<>>><<<>>><<>>>><<<<><<>><<<><<<<>>>><>>>><<<>>><<<<>>>><><<>>>><<<<>>>><<>>><<<<>><<<<>>><>>>><>>>><<>><<<>>><>>><>>><<>>><<><<<<>>><<>>><<>>><<<><>><<<>>><<<<>>><<>>><<<><<<<>>>><>>><>><<>>>><<<>>><><><<<>><<<<><<<><<<><<>>>><<<<>>>><>><<<<>><<>><<<>>><<>><<<<>>>><<<>>><<<>>><<<<>>><<<>>><<<><<<<>>>><<<<>><<>><<<>>>><<><<<>>><<>><<<<><<<>><<<<>>>><>><<<><<<<>>><<>>>><><<<>>>><>><<><<<<>><<<>>><<<>>><<><<<<>>>><<<<>>>><>>>><<<><>><<<<><><<<>><>><<<<>>>><<>>><<<>>>><<<<>>>><<<><><<<>>>><<>><<>>>><<>><<>><<>><<<<>>>><<<<>>>><<<>>>><<<>>>><<<>>>><<<<>>>><<<>>>><<>><<>><<<<>>><<><<<<><<>>>><<>>>><<>><<<<><<>>><<<>>>><<>>>><<><<>><<>><<><<<<>>>><<<>>><>><>><<<<>><<<>><<<<>>>><<<<>>>><><>>><<<<>><<<>>><<<>><><<<<>><<<<>><<<<>>>><>><<>>>><<>>>><>><<>>>><<<<><<<>><>>>><<<<>>><<<><<<>>>><>>>><<>><>>>><>><<<<>>>><><>><<<>>><>><>><<<<>>>><>>>><<<>><><<><<>>>><<>>>><<>>><><<>>>><><<<>><<>>><><<<>>><<<><<<><<<>>><>><<><<<<>><<<<>>>><>>><<<>>><<<<><>>><<>>><<><<>><><<<>><>>>><<<><><<<<>>>><<<>><>>><<>>>><<<<>>><>><<<>><>>><<><<<><>>><<<<>>><<<>><<>>><>><<<>>><<<<>><<>><<<<>>>><>><<>>><>>><<<>>><>>><<<<><<><>><>>><<>>>><<>>>><<<<><<<<>>>><<>>><<><<>>><>>>><<<>>><>>>><<<>>><<<>>>><<<<><<>>>><>>><<<<>>><<<<>>><><<<<>>>><<>><<<>><<><>><>><>>><<<><><>><<><>><<<>>>><<<>>><<<<>>><<>><><<<<>>><<<<><<<>>>><<<<>><<<>>><<>><>><>><<<<>><<<<>>>><>>>><<<<>>><<>>><<<>>><<<><<<><><<>>><<<>>>><<<<>><<<>>>><<><<<><<>>>><<><<<>><<><<>>>><<<><<<<>><>>><<<><<><<<<><<>><>><>>>><>>>><<<<>><<<>><<<>>><<>>>><<>><<>><<><<<<>>>><<<<>><<<<>>><>>>><<<<><<<>>>><<>>>><<>>><<<>>><<<>>><<><<>>>><><<<<>>><<<>>>><<><<<<><<<>><<<>><<<>>>><<<<>>><<><<<<><<<>>>><<>><>>><<<<>>>><>><>>>><<>>>><>><>>>><<<><<<<>>><<>>><>>><>>><><<<<><><>>>><<<<>>>><<<<>>><<>>><<>>><>>>><<<<>>><>>><>><>>>><<>><<><>><><<<><<>><<><<<<>>>><>><<<>>><<>>><<<>>>><<<<>><<<>>>><<>>><>><<<><>><<<<>>>><<><<>><<<>><<>>>><>>><<<<>>>><<<>>><<<>>><<<>>>><<<><<<>>><<>>><>><<>><>><><>><>>>><>>><<<>>><<<<><>>>><<<>>><>><><<>><<<<>><<<<>>>><>><<>>><<>>>><<<<>>>><<<>>>><<<<>><>>>><<>><>><<<><<>>><<<<>><>><<<<>><>>><<<<>>><>>>><>>>><<<><<>>><><<<<>><>><<<<>>><<>><<<<>>>><<<><><<<<>><<<<>>>><<<<>>><<<>><<<<>>><<>><<>>>><<<<>><<>>>><<>>>><<<>>>><>>>><<>>><><<<><><<<>>>><>>><<<<>><>>>><<<>>><<<>>><>><<<>>><<<>>>><<<<>><>><<<<>>>><<>>><<><>><<<>><<<<>>><<<<><<<<><<<>>><<<<>>>><>>>><><<<><<><>>>><><>>>><<>><>>><<<<>><<<<>><>><<>>>><<>><<>>><>>>><<>>>><<<<>>>><>><>>><<><>><<>>><<<>>>><<>>><<<<>>><<<<>>>><<<<><<><<>>>><<<>><<>><<<<><<>>><><>><<>>>><><<<<>><<<><<>>>><<<><<><<>><<>>><>>>><<>>>><><>>><<<<>>>><<>><<<><<<<>><<<>>><<<>><<<<>>>><<<<>>>><<>><>><<<<>>><><<<>>><>><<<>><>>>><<<>>><<>>>><<<<><<>><<<>><<<>>>><>><<>><<><<>><<>>>><<>>><><<<>><>><><>><<<>>>><<<><<>>><>><>>>><<<><>>><<<><<>>><<>>>><<<<>><<<>><<><<<<>>><><<<>><>>><<><<<>>>><>>><>><>>><<<<>>><><<<<>>><<>>>><<<<>>>><>>><<><<<<>>>><<>>><>>><><<<>>><<<>><<<<><<<>>>><<<>>><<<<>>>><<<<>>>><<>>>><<<<><>>>><>>>><<<>>>><<>>><<>>>><<<<>><<>><<<>><<>>><<>>>><<><<<<>>>><<<>><<<>>>><<<<>><<<>>>><<>>>><<>><<>>>><<<>><>>>><<<>>>><<<>>>><<<><>><<>><>><<<>>>><<<<>>><<<<>>><<><<<<>>><><<>>>><<<>>>><>>>><<><<<>>><<><>><<<<>>><><<>>><<<<>>>><<<>><<<>><<<>>><<<>><<<>>>><<>>>><><<<>><<<<><>>><><<>>>><><<<<><<>>>><<><<<<>>><<<>>><<<<>><<><<<<>>><<<<><<>>><<>><>><>><<<>><<<>><<>><<<<>>>><<<><<>>>><>>><<><<>><<<>>>><<<>>><>>><<<>>>><<<<><<>>><<<<>>>><<>>><<<<>><<>>><><<<<><<<>>>><<<>>>><>>><>><<<<>>><<>><>>>><<<><<<<>>><<>>>><<<>><<<><<<<><<<<>>><<<><<<>>><<>><<<>>><<<<>><>>>><>>><<>>>><<>>><<<<>>>><<><>>>><<<><<<>>><<<><>><<<<>>>><<<>>>><<>><>>><<<<>><>><<>><<<>>>><<<><<<<>>><>>>><<<>>><<><<>>><<<<>>><<<<><<>>>><>>><<<<>>>><<<<>><<<>>><<<>>><<<<>><<<><<<><<<<>>><<>>><<<<><<<>>><>><<<><<<><<<><>><<><<<>>><<<>><<<<>><<<<><<<<><<<<><<<<>>>><<>>>><<<>>><<<>>><<<<>>><<>>>><><>><>>>><<>>>><<<>><<<><<>><<<<>>><<>>>><>><<>>>><<<><<>>>><<<>>><<<<><<><<<<><<>>>><<<>>><<<>>>><<>>>><><>><<<>>>><<<<>><<<<>>>><<>>><<<<><<><><<<<>><<<<>>><<<<>><<<<>>><<<<>><>><<<<><<<>><<<<><<<>>><<>><<<>>><><<<>>>><<>>><<<>>><>><<<<>>>><<<<>><<<><<<<>>>><<<<>>><<<><<<<>>><>>>><<<>>>><<<>>><<<<>><<<<>>><<<>><<<>>><<<<><<<<><<<><>>><<<<>><><<<<><><<<><><>><<>><>>>><<>><<<>><<<<>><>>>><<>><<<<>>><>><<<>><<<<>>><<<><>><<><><><<<<>>>><<<<>>><<>><<>>>><<>>><<<>>><<<<><>><>><<<<><<<<><>><<><<>>>><><<<<>><<>><<<<>>>><<<>>><<<<>>>><<<<>><<<><<>>><<<<>>>><<<>><<<><<<<>><>><<>>><<<>>>><<<<>><<>>><<<>>><<<<><<<><<<<>>><<>><<>>>><<><>>><<>>>><<>>><<>>>><<>>><<<><<>>><>>>><<<>>><<<><<>>>><<<<>>><<<<>>>><<<>><<><<><<<<><<<><<<><<<><>>>><<>>><><<>>>><>>><<>>>><<<<><<<>><<>>><<<>>><<<<>><>><<>>>><<<<><<<><<<>>>><<<<>><>>><>>><<><<<<>><<<<>>>><<<>>><><>>><<<>>>><<<<>><<<>>><>>><<<<>>><<<<>>>><>><<<<>><<<><>><<>><<>>><>><<>>>><>>>><<<<>><>>>><<<>><<>>>><<<>>>><<>><<>>><<<<>>><<<>>>><<>>>><<>><<>>><<><<<>><<<>>><><<>>>><<<<>>><<<>>><>>><<<<>>>><<<<><<<>><>>>><>><<<<>><<<<><<<>>><<><<<>>><<<<>><<>>>><<<<>>><<<<>>>><>>>><><<><>>><<<>><<<>>>><<><<<>>>><<><<<<>>>><<<>>>><<<>>><<<<><>>><<<>>><><>>>><>>>><>>>><<<>><<<<>><<<<>>>><<>>><<>>><<<>><<>>><<<<>>>><<<<>>>><<><<<<>>><<<>><>>>><>>><>>><<<>>>><<><<<<>>><<<<>><<<<><<<>><<<><<<<><<<>><>>>><>><><<<<><>>><<<<>>><<<>><<<>>>><<<<>>><<<<><<<>><<>>>><<>>>><<<>>><>><>><>><<><<<>>>><<<<>>><<<>>><<<>>><>>>><<<<>>>><<<<>>>><<><<<<>>>><>><<<<>><<<<>>><<<<>>>><>><<<<>>><<<><<<<>>><>><><<<>>>><<<<>>><<<<>><<<>>><<>>>><<<>>><<<>>>><>>>><<<<>>>><<>>><<<>>>><<<><<<>><<><<<>><<<><>><<>>><<<><<>><<<>>>><<<<><<<><<>><<<>>>><<><<<<><<>>><<>>><<<<>><<>>>><<<>><>>>><<><<>>><<<>>>><<<>>>><<><<<<>>>><<<<>><<<<>>><<<<>>>><<>>>><<<><<>>><<<>>>><<<>>>><<<><<<>>><<>>><<>>>><><<>>>><<><<<<>>><<<<><>>><<<<>>>><><<<<>><<><<>><<<<>>>><<<<>>>><<<<>><<<<>>><><>>>><<<<>>>><<><<><<<>>><><<>>>><>>><<<<>><>><>><<<<>>><>><<<>>>><<>><<<>>><><<>>><>><<<><<<><<<<><<>><<>>>><<<<><<>>>><<<>>>><<<>>>><<>>>><>><<<<><<<>>><><<<><<<<>>>><><<<>>><>>>><<<<>><<<<>>><>>><<<<>>><<<<>><<<<><><>>>><><>><<>>>><<<<>>><<<><<>><>>>><<<>>>><<<>>>><<<<>><<<<>><<<<>><>>><><>>>><<<<>>><<<<>>>><<>>><<<<>>>><<<<>><<<>>>><<<>>><<<>>><<<>>>><<<>>>><<<>>><<<>><<<<>><<<>>><><<>>>><<<><<><<<<>>><>>>><>>>><>><<<><<>>><<<>>>><><<><<<<>>>><<<>>>><<>><>>><<>><<<>>><>>>><<>>>><<<<><<<>>>><<<<><<<<>><<<>>><<<><<<<>>><<<><<<>>>><>>>><><>>>><<>><<<<>>><<>><><>><<<<><>><<<<>><>><<<>>><<<<>>><<>>><<<<>>><<><<<<>>>><<<<>><<<>>><<<<>>><<>>><<<<>><<><<<<>>><<<><<<<><>>><<<<>><<>>>><<<<>>><<<<>>><<<>>><<<<><<>>>><<>>>><<>>><<<<>>>><<<>>><<<<><<>><<<<><<<<>>>><<<<>>><<>><<<<>>><<<>>>><>>>><<>>>><<<<>><<><<>>>><<>>><<<>><<<><>>><<>>><<>><>><<>>>><>>><<<<>><<<>><>><<<<>>><<<<><><<>>>><<<>>><<<>>>><<<<><>>><<>><<<<><<>>>><<<<><<<>><<<<>>>><<<><<<<>>><<<>>>><>>>><>>><<<>>>><>><>>><>>><<<>><<<<><<>>><><<<<>>>><<<>>>><<>><><>><>><>><<><<<<>>><>><<<>>>><<<<>>><<<>>><<<<>>><<>><<<>><>>><<<<>>>><<<<>><<<>>><<<><<<<>>>><<<>><<<<><<<<>>><<<>><<><<<>>>><<<<>><>>>><<<<>><>>><<><<>><<>><>>><<><<>><<><<<<>>>><>>>><<>>>><<<>>><<>>><<<>><<<<>>><>><<><<<>><<>><<<>>>><<<>>><<<<>><>>>><<><<<<><><<<>>>><><<<>><<<><<<>><<<<><<>><<>>><<>>><<<<>>>><<><>>><<<<>>><><<><<<<><<<<>>>><>>>><<>>><<<>><>><<><<<>><<>>><<<<>><<>>><<>>>><<<<>><<<>>><<>>><<<<><<>>><<><<>>><<<>><>><<<>>>><>>><<<><<<>><<>>>><<><>>><<<<>>>><<>>><<<>><<<<><<>>>><<<><<<<>>>><<>>><<><><<<><<<>>><>>>><<<>><<<<>>>><<<>><<<<>>><>>>><<<><>><>>><<<<>>>><>>><>>><<<<>>>><<>>>><<><<>>>><<<<>><>><<>>>><<>>>><>>><>><<<<>>>><<>>>><><>>>><<<<>>><<<<>>>><>>><<<>>><<<>><>>>><<<>>>><<<<>><<<<>>><<><<<><><<>>>><<<<>><<<<>><<>>>><<<>>>><<><<>>><>>><<<<>>><<<<>>>><<><><<<>><<><<<>>><<><<>>><<<>>><<>><<><<<>><><<<<>>>><<<>>>><<<>>><<<<>><<<>>><<>><<<>>><<<>>><<<>>>><>><><<<<>>><>><>>>><<>>><>>><>><<<>><<>><<<<>>>><<<><<<<>><<>>><>><<<>>>><<<>>><<>>><><<>>>><<<<>><<<><<>>>><<<>><<<>>>><<<<>>><<>>><<<<><<>>><<<<>>><<>>>><<<><>><<>>>><<><<>>><<<<>><>><<>>>><<>>><><<<><<<<>><><<><><<<<>>><<<>><>>>><<><<<<>>><<<<>>><<<<>>>><>><<><<<><<<>>><<>>><<<<>><<><<><<<><<<>>><<>><>>>><>>>><<<<>>>><<<>>>',
        });

        tetris.run();

        const height = tetris.getHeight();

        expect(height).toBe(3124);
    });

    it('should run 10 rocks, move like task description, map', () => {
        const tetris = new Tetris({
            rocksCount: 10,
            movesPattern: '>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>',
        });

        tetris.run();

        const map = tetris.getStringifiedMap();

        expect(map).toBe(
`
....#..
....#..
....##.
##..##.
######.
.###...
..#....
.####..
....##.
....##.
....#..
..#.#..
..#.#..
#####..
..###..
...#...
..####.
-------
`.trim()
        );
    });
});
