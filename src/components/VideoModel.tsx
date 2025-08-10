import { useState } from 'react';
import { X, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-background border-border">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-bold text-foreground">
            {title} - Live Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative w-full aspect-video bg-muted rounded-lg mx-0 mb-6 overflow-hidden">
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center">
                <Play className="h-16 w-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">Loading video...</p>
              </div>
            </div>
          )}
          
          <video
            controls
            autoPlay
            className="w-full h-full rounded-lg"
            onLoadedData={() => setIsVideoLoaded(true)}
            poster="/placeholder.svg"
          >
            <source src={videoUrl} type="video/mp4" />
            <p className="text-muted-foreground p-0">
              Your browser doesn't support video playback. 
              <a href={videoUrl} className="text-accent hover:underline ml-1">
                Download the video instead.
              </a>
            </p>
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;