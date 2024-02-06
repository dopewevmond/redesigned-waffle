const FormStatusModal = ({
  content,
  closeModal
}: {
  content: string;
  closeModal: () => void
}) => {
  return (
    <div className="fixed w-screen h-screen bg-black/40 z-10">
      <div className="relative w-full h-full flex items-center justify-center">
        <div onClick={closeModal} className="fixed w-screen h-screen bg-black/50" />
        <div
          className='z-20 bg-white w-full max-w-md rounded-xl p-4 md:p-8 border-solid border-t-[4px] space-y-4 text-center relative
            border-t-green-400'
        >
          <button onClick={closeModal} type="button" className="absolute top-4 right-4 px-3 py-2 border border-solid border-gray-200 rounded-full">&#10060;</button>
          <h3 className='text-lg font-semibold text-green-800'>Login successful</h3>
          <p className="text-gray-700 text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FormStatusModal;
