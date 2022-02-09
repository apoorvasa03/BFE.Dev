### this
    1. method is a function which is a property of the object
    2. A method is a procedure or function in object-oriented programming. A function is a group of reusable code which can be called anywhere in your program. This eliminates the need for writing the same code again and again

    ```jsx harmony
    const video = {
        title: 'a',
        play: () => {
            console.log(this) // here this points to the video object
        }
    }

    video.play() => {title: 'a', play: f}
    ```

    ```jsx harmony
        function playVideo(){
            console.log(this) // here this point to window/global in brower/node
        }
    ```

