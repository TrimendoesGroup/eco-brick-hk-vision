
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface YouTubePlayerProps {
  videoUrl: string;
  onClose: () => void;
}

const YouTubePlayer = ({ videoUrl, onClose }: YouTubePlayerProps) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video">
        <Button
          onClick={onClose}
          variant="ghost"
          className="absolute -top-12 right-0 text-white hover:bg-white/10 z-10"
        >
          <X className="h-6 w-6" />
        </Button>
        
        <iframe
          src={videoUrl}
          title="YouTube video player"
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
