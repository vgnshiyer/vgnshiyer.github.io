const FullScreenImage = ({ src, onClick } : { src: string, onClick: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-85 z-50 flex justify-center items-center"
      onClick={onClick}
    >
      <img src={src} alt="FullScreen" className="max-w-full max-h-full" />
    </div>
  )
}

export default FullScreenImage;
