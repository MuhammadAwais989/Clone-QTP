
export const fadeIn = (direction, delay)=>{
    return{
        hidden : {
            y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0,
        },
        show : {
          x : 0,  
          y : 0,
          opacity : 1,
          transition : {
            type : 'tween',
            duration : 0.9, 
            delay : 0,
            ease : [0.25, 0.25, 0.25, 0.75],
          }
        },
        ScaleD : {
          scale: 0,
          transition : {
            type : 'tween',
            duration : 0.9, 
            delay : 0,
            ease : [0.25, 0.25, 0.25, 0.75],
          }
        },
        ScaleI : {
          scale: 1,
          transition : {
            type : 'tween',
            duration : 0.9, 
            delay : 0,
            ease : [0.25, 0.25, 0.25, 0.75],
          }
        }
    }
}