import { MyUppercasePipe } from './my-uppercase.pipe';


describe('MyPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
