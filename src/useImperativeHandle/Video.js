import video1 from './istockphoto-483119429-640_adpp_is.mp4';
import { forwardRef, useImperativeHandle, useRef } from 'react'

function Video(props, ref) {

  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();

    },
    pause() {
      videoRef.current.pause();
    }
  }));
  return <video
    ref={videoRef}
    src={video1}
    width={280} />
}

export default forwardRef(Video);