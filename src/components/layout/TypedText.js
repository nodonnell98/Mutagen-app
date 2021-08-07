import React, {useRef, useEffect} from 'react'
import Typed from 'typed.js'

export default function TypedText() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'a game from the future',
        'an experience like no other',
        'MUTAGEN'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      backDelay: 700
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])


  return (
    <div className="type-wrap" style={{fontSize: '60px'}}>
    This is <span style={{ whiteSpace: 'pre' }} ref={el} />
  </div>
  )
}
