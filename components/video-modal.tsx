import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import ReactPlayer from "react-player";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4" onClick={onClose}>
        <div className="fixed inset-0 bg-black opacity-50" />
        <div className="relative bg-white rounded shadow-lg h-[70%] w-full max-w-3xl mx-auto">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <div className="p-4 py-9 md:p-8 mx-auto w-full h-full flex justify-center items-center">
            <ReactPlayer
              url={videoUrl}
              controls
              playing
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default VideoModal;
