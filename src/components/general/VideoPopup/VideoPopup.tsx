import { useOpenedPopupsState } from '@/atoms/opened-popups';
import DefaultPopup from '@/components/shared/DefaultPopup/DefaultPopup';
import { useDebounce } from '@/hooks/use-debounce';

interface Props {
    url: string;
}

export const VIDEO_POPUP_NAME = 'video-popup';

const VideoPopup = ({ url }: Props) => {
    const { openedPopups } = useOpenedPopupsState();
    const isVideoPopupOpen = openedPopups.includes(VIDEO_POPUP_NAME);
    const debouncedVideoVisibility = useDebounce(isVideoPopupOpen, 500);

    return (
        <DefaultPopup name={VIDEO_POPUP_NAME} className="video-popup" overlay={true}>
            <div className="video-popup">
                {(isVideoPopupOpen || debouncedVideoVisibility) && (
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${url}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </DefaultPopup>
    );
};

export default VideoPopup;
