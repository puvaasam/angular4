import { DataTransformerPipe, EllipsePipe } from './data-transformer.pipe';

describe('DataTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new DataTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('EllipsePipe', () =>{
  it('create an instance', () =>{
    const pipe = new EllipsePipe();
    expect(pipe).toBeTruthy();
  });
});
