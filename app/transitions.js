const duration = 600;

export default function(){
  this.transition(
    this.childOf('.values'),
    this.use('explode', {
      matchBy: 'value-id',      // matchBy will look for the same
                                     // HTML attribute value in both
                                     // the old and new elements, and
                                     // for each matching pair, it
                                     // runs the given transition.

      // fly-to is a built in transition that animate the element
      // moving from the position of oldElement to the position of
      // newElement.
      use: ['fly-to', {duration: duration, easing: 'ease-in-out'}]
    },{
      use: ['cross-fade']
    }),
    this.debug()
  );
}
