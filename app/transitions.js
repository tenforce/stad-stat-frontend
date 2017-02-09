export default function(){
  this.transition(
    this.childOf('.facts'),
    this.use('explode', {
      use: ['crossFade', {duration: 1000}]
    })
  );
};
