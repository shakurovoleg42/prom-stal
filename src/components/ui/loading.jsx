const Loading = () => {
  return (
    <>
      <div className="my-44 flex flex-col items-center text-center">
        <div className="text-[3rem] flex">
          Загрузка
          <span className="dot-1">.</span>
          <span className="dot-2">.</span>
          <span className="dot-3">.</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes dotAnimation {
          0%,
          100% {
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
        }

        .dot-1 {
          animation: dotAnimation 1.5s infinite;
        }

        .dot-2 {
          animation: dotAnimation 1.5s infinite 0.5s;
        }

        .dot-3 {
          animation: dotAnimation 1.5s infinite 1s;
        }
      `}</style>
    </>
  );
};
export default Loading;
