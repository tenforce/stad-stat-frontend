export default function(){
  this.transition(
    this.childOf('.topics'),
    this.use('explode', {
      matchBy: 'topic-id',      // matchBy will look for the same
                                     // HTML attribute value in both
                                     // the old and new elements, and
                                     // for each matching pair, it
                                     // runs the given transition.

      // fly-to is a built in transition that animate the element
      // moving from the position of oldElement to the position of
      // newElement.

      use: ['fly-to', {duration: 1000, easing: 'spring'}]
    })
  );
};
