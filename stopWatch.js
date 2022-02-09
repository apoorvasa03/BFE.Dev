/** write a stop clock function where 
 * let sw = new StopWatch()
 * sw.start() -> should start the watch
 * sw.stop() -> should stop the watch
 * sw.suration -> return the duration of the watch
 * sw.rest() = will reset the watch
 */
function StopWatch(){
  let startTime, endTime,running, duration =0

  this.start = function (){
    if(running) throw new Error('stop watch is already started')
    running = true
    startTime = new Date()


  }

  this.stop = function(){
    if(!running) throw new Error('stop watch is already stopped')
    running = false
    endTime = new Date()
    const second = (endTime.getTime() - startTime.getTime()) / 1000
    duration += second
  }

  

  this.reset = function(){
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get : function() {
        return duration
    }
  })
}

let sw = new StopWatch()
sw.start()
console.log(sw.duration)
