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
        'This is a new experience',
        'This is the future of tabletop',
        'This is MUTAGEN'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: false,
      loopCount: Infinity,
      backDelay: 1000
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
    <span style={{ whiteSpace: 'pre', textShadow: '1px 2px 4px #000000' }} ref={el} />
  </div>
  )
}
