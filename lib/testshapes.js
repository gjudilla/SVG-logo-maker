const { Circle, Triangle, Square } = require('./shapes'); 

// test for Circle class
describe('Circle', () => {
    test('render() method should return SVG string with correct attributes and color', () => {
        const circle = new Circle();
        circle.setColor('red');
        const svg = circle.render();
        expect(svg).toContain('<circle');
        expect(svg).toContain('cx="50%"');
        expect(svg).toContain('cy="50%"');
        expect(svg).toContain('r="100"');
        expect(svg).toContain('fill="red"');
    });
});

// test for Triangle class
describe('Triangle', () => {
    test('render() method should return SVG string with correct attributes and color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const svg = triangle.render();
        expect(svg).toContain('<polygon');
        expect(svg).toContain('points="0,200,300,200,150,0"');
        expect(svg).toContain('fill="blue"');
    });
});

// test for Square class
describe('Square', () => {
    test('render() method should return SVG string with correct attributes and color', () => {
        const square = new Square();
        square.setColor('green');
        const svg = square.render();
        expect(svg).toContain('<rect');
        expect(svg).toContain('x="50"');
        expect(svg).toContain('width="200"');
        expect(svg).toContain('height="200"');
        expect(svg).toContain('fill="green"');
    });
});
